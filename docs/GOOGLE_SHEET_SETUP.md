# Google Sheet Lead Collection Setup

Leads from your form are saved locally and can also be sent to a Google Sheet when you configure the webhook.

## 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
2. Name it (e.g. "Nexovatu Leads").
3. In **row 1**, add these headers:
   - `Timestamp` | `Name` | `Email` | `Phone` | `Location` | `Message` | `IP`

## 2. Add the Apps Script

1. In the sheet, go to **Extensions** → **Apps Script**.
2. Delete any sample code and paste this:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.location || '',
      data.message || '',
      data.ip || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (disk icon) and name the project (e.g. "Lead Webhook").

## 3. Deploy as Web App

1. Click **Deploy** → **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Description:** e.g. "Lead webhook"
   - **Execute as:** Me (your Google account)
   - **Who has access:** Anyone
4. Click **Deploy**.
5. **Authorize** when prompted (choose your Google account and allow access).
6. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/.../exec`).

## 4. Add URL to Your Project

1. In your project root, copy `.env.example` to `.env.local` (if you don’t have it yet):
   ```bash
   cp .env.example .env.local
   ```
2. Open `.env.local` and set:
   ```
   GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
   Use the exact URL you copied from the deployment.

3. Restart your dev server (`npm run dev`) or redeploy so the new env variable is loaded.

After this, every new lead will be stored locally and appended as a new row in your Google Sheet.
