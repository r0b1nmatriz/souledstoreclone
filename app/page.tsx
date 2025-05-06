import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedProducts } from "@/components/featured-products"
import { NewArrivals } from "@/components/new-arrivals"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { BrandPartners } from "@/components/brand-partners"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroCarousel />
        <CategoryGrid />
        <FeaturedProducts />
        <NewArrivals />
        <BrandPartners />
        <Testimonials />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  )
}
