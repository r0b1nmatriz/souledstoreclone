import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
        <Image src="/placeholder.svg?height=600&width=1200" alt="Hero Banner" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-4 bg-white/80 rounded-lg max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">New Collection</h1>
          <p className="mb-6">Discover our latest arrivals with exclusive designs</p>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/category/new-arrivals">Shop Now</Link>
            </Button>
            <Button variant="outline">
              <Link href="/collections">View Collections</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
