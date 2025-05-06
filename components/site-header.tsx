"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, User, Heart, ShoppingBag, Download, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/components/auth-provider"
import { useCart } from "@/components/cart-provider"
import { cn } from "@/lib/utils"

const categories = [
  { name: "Men", href: "/category/men" },
  { name: "Women", href: "/category/women" },
  { name: "Kids", href: "/category/kids" },
  { name: "Accessories", href: "/category/accessories" },
  { name: "Collections", href: "/collections" },
  { name: "Membership", href: "/membership" },
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { user } = useAuth()
  const { itemCount } = useCart()

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className={cn("sticky top-0 z-50 w-full transition-all duration-300", isScrolled ? "shadow-md" : "")}>
      <div className="bg-red-600 text-white py-2 px-4 flex justify-between items-center text-sm">
        <div className="hidden sm:flex items-center space-x-4">
          <Link href="/track-order" className="hover:underline transition-colors">
            TRACK ORDER
          </Link>
          <Link href="/contact" className="hover:underline transition-colors">
            CONTACT US
          </Link>
        </div>
        <Link href="/download" className="flex items-center hover:underline transition-colors">
          <Download className="h-4 w-4 mr-1" />
          DOWNLOAD APP
        </Link>
      </div>
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center mr-6">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="TheSouledStore"
                width={120}
                height={40}
                className="transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-red-600",
                    pathname.startsWith(category.href) ? "text-red-600" : "text-gray-700",
                  )}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-8 md:w-[300px] rounded-full bg-gray-100 focus:ring-red-600 transition-all"
              />
            </div>
            <Link href={user ? "/account" : "/auth/signin"}>
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-red-600 transition-colors">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-red-600 transition-colors">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
            </Link>
            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-red-600 transition-colors relative"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[80%] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                      <Image src="/placeholder.svg?height=40&width=120" alt="TheSouledStore" width={120} height={40} />
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </div>
                  <div className="p-4 border-b">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input type="search" placeholder="Search..." className="w-full pl-8 rounded-full bg-gray-100" />
                    </div>
                  </div>
                  <nav className="flex-1 overflow-auto py-4">
                    <AnimatePresence>
                      {categories.map((category, index) => (
                        <motion.div
                          key={category.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <Link
                            href={category.href}
                            className={cn(
                              "flex items-center px-4 py-3 text-base font-medium transition-colors",
                              pathname.startsWith(category.href)
                                ? "text-red-600 bg-red-50"
                                : "text-gray-700 hover:bg-gray-50",
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {category.name}
                          </Link>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </nav>
                  <div className="border-t p-4 space-y-3">
                    <Link
                      href="/track-order"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Track Order
                    </Link>
                    <Link
                      href="/contact"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/download"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Download App
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
