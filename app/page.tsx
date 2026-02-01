import PremiumHero from '@/components/PremiumHero'
import ComingSoonContent from '@/components/ComingSoonContent'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <PremiumHero />
      <ComingSoonContent />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
