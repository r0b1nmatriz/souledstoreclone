"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const brands = [
  { name: "Marvel", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Disney", logo: "/placeholder.svg?height=80&width=120" },
  { name: "DC Comics", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Star Wars", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Harry Potter", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Friends", logo: "/placeholder.svg?height=80&width=120" },
]

export function BrandPartners() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Official Brand Partners
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300">
                <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="object-contain" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
