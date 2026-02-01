import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

interface Lead {
  name: string
  email: string
  phone: string
  location: string
  message: string
  timestamp: string
  ip?: string
}

const leadsFilePath = path.join(process.cwd(), 'data', 'leads.json')

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Read leads from file
function readLeads(): Lead[] {
  ensureDataDirectory()
  if (!fs.existsSync(leadsFilePath)) {
    return []
  }
  try {
    const fileContent = fs.readFileSync(leadsFilePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.error('Error reading leads file:', error)
    return []
  }
}

// Write leads to file
function writeLeads(leads: Lead[]) {
  ensureDataDirectory()
  try {
    fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2))
  } catch (error) {
    console.error('Error writing leads file:', error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, location, message } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and phone are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Get client IP
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Create lead object
    const newLead: Lead = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      location: location?.trim() || '',
      message: message?.trim() || '',
      timestamp: new Date().toISOString(),
      ip,
    }

    // Read existing leads
    const leads = readLeads()

    // Add new lead
    leads.push(newLead)

    // Write back to file
    writeLeads(leads)

    // Send to Google Sheet if webhook URL is configured
    const googleSheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL
    if (googleSheetUrl) {
      try {
        const sheetResponse = await fetch(googleSheetUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: newLead.name,
            email: newLead.email,
            phone: newLead.phone,
            location: newLead.location,
            message: newLead.message,
            timestamp: newLead.timestamp,
            ip: newLead.ip,
          }),
        })
        if (!sheetResponse.ok) {
          console.warn('Google Sheet sync failed:', await sheetResponse.text())
        }
      } catch (sheetError) {
        console.warn('Google Sheet sync error:', sheetError)
      }
    }

    console.log('New lead submitted:', { name, email, phone, location })

    return NextResponse.json(
      {
        success: true,
        message: 'Lead submitted successfully',
        lead: {
          name: newLead.name,
          email: newLead.email,
          phone: newLead.phone,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const leads = readLeads()
    return NextResponse.json({ leads, count: leads.length }, { status: 200 })
  } catch (error) {
    console.error('Error reading leads:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
