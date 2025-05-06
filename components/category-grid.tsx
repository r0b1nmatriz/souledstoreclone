"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const categories = [
  { name: "Men", image: "/placeholder.svg?height=300&width=300", href: "/category/men" },
  { name: "Women", image: "/placeholder.svg?height=300&width=300", href: "/category/women" },
  { name: "Kids", image: "/placeholder.svg?height=300&width=300", href: "/category/kids" },
  { name: "Accessories", image: "/placeholder.svg?height=300&width=300", href: "/category/accessories" },
]

export function CategoryGrid() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Shop By Category
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={category.href} className="group relative overflow-hidden rounded-lg block">
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-4 group-hover:bg-black/40 transition-colors">
                    <h3 className="text-white font-semibold text-lg md:text-xl">{category.name}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
