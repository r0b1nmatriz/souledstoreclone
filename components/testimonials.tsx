"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "I've been shopping from TheSouledStore for years now. The quality of their products is consistently excellent, and their designs are unique and trendy. Highly recommend!",
  },
  {
    id: 2,
    name: "Priya Patel",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4,
    text: "Love their collection of official merchandise. The t-shirts are super comfortable and the prints don't fade even after multiple washes. Great customer service too!",
  },
  {
    id: 3,
    name: "Amit Kumar",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The membership program is totally worth it! I get early access to new collections and amazing discounts. The delivery is always on time and the packaging is eco-friendly.",
  },
]

export function Testimonials() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
