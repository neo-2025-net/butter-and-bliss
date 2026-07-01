import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { BakeryCase } from '@/components/bakery-case'
import { ProductCatalogue } from '@/components/product-catalogue'
import { SocialWall } from '@/components/social-wall'
import { Footer } from '@/components/footer'
import { AnimatedBackground } from '@/components/animated-background'

export default function Page() {
  return (
    <main className="w-full bg-background relative">
      <AnimatedBackground />
      <Header />
      <HeroSection />
      <BakeryCase />
      <ProductCatalogue />
      <SocialWall />
      <Footer />
    </main>
  )
}
