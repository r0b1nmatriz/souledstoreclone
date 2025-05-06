"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter",
    })

    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <section className="py-12 px-4 bg-red-600 text-white">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Subscribe to Our Newsletter
          </motion.h2>
          <motion.p
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Stay updated with the latest trends, exclusive offers, and new arrivals
          </motion.p>
          <motion.form
            className="flex flex-col sm:flex-row gap-2"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus-visible:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="bg-white text-red-600 hover:bg-white/90" disabled={isSubmitting}>
              {isSubmitting ? (
                "Subscribing..."
              ) : (
                <>
                  Subscribe <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
