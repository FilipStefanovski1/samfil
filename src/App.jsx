import Header from './components/Header'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import Problem from './components/Problem'
import WhyMacedonia from './components/WhyMacedonia'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import ClientFit from './components/ClientFit'
import TrustSection from './components/TrustSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <Problem />
        <WhyMacedonia />
        <Services />
        <HowItWorks />
        <WhyUs />
        <ClientFit />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
