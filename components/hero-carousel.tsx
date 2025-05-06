"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const carouselItems = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=1600",
    title: "New Summer Collection",
    description: "Discover the latest trends for the season",
    buttonText: "Shop Now",
    buttonLink: "/category/summer",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=1600",
    title: "Exclusive Marvel Collection",
    description: "Official merchandise from your favorite superheroes",
    buttonText: "Explore",
    buttonLink: "/collections/marvel",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=1600",
    title: "Premium Membership",
    description: "Join now for exclusive benefits and early access",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = useCallback(() => {
    setCurrent((current) => (current === carouselItems.length - 1 ? 0 : current + 1))
  }, [])

  const prev = useCallback(() => {
    setCurrent((current) => (current === 0 ? carouselItems.length - 1 : current - 1))
  }, [])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [autoplay, next])

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
        <AnimatePresence mode="wait">
          {carouselItems.map(
            (item, index) =>
              index === current && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                      className="text-center p-4 max-w-md"
                    >
                      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">{item.title}</h1>
                      <p className="mb-6 text-white text-lg">{item.description}</p>
                      <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                        <Link href={item.buttonLink}>{item.buttonText}</Link>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full h-10 w-10"
        onClick={() => {
          prev()
          setAutoplay(false)
        }}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full h-10 w-10"
        onClick={() => {
          next()
          setAutoplay(false)
        }}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${index === current ? "w-8 bg-white" : "w-2 bg-white/60"}`}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
