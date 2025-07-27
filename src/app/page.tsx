import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import WhySapadigiSection from '@/components/WhySapadigiSection'
import TechHelpSection from '@/components/TechHelpSection'
import SapaToolsSection from '@/components/SapaToolsSection'
import ProductSection from '@/components/ProductSection'
import BenefitsSection from '@/components/BenefitsSection'
import TestimonialSection from '@/components/TestimonialSection'
import AboutSection from '@/components/AboutSection'
import FAQSection from '@/components/FAQSection'
import NewsletterSection from '@/components/NewsletterSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WhySapadigiSection />
      <TechHelpSection />
      <SapaToolsSection />
      <ProductSection />
      <BenefitsSection />
      <TestimonialSection />
      <AboutSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
