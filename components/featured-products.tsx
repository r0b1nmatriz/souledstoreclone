"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"

// Mock products data
const products = [
  {
    id: "1",
    name: "Marvel Avengers T-Shirt",
    price: 699,
    image: "/placeholder.svg?height=400&width=300",
    category: "T-Shirts",
    href: "/product/marvel-avengers-t-shirt",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "2",
    name: "Friends Official Hoodie",
    price: 1299,
    image: "/placeholder.svg?height=400&width=300",
    category: "Hoodies",
    href: "/product/friends-official-hoodie",
    isNew: false,
    isFeatured: true,
  },
  {
    id: "3",
    name: "Harry Potter Sweatshirt",
    price: 999,
    image: "/placeholder.svg?height=400&width=300",
    category: "Sweatshirts",
    href: "/product/harry-potter-sweatshirt",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "4",
    name: "DC Batman Cap",
    price: 499,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
    href: "/product/dc-batman-cap",
    isNew: false,
    isFeatured: true,
  },
]

export function FeaturedProducts() {
  const { addItem } = useCart()
  const { toast } = useToast()
  const [wishlist, setWishlist] = useState<string[]>([])

  const toggleWishlist = (id: string) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((itemId) => itemId !== id))
      toast({
        title: "Removed from wishlist",
        description: "Item has been removed from your wishlist",
      })
    } else {
      setWishlist([...wishlist, id])
      toast({
        title: "Added to wishlist",
        description: "Item has been added to your wishlist",
      })
    }
  }

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    })
  }

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.h2
            className="text-2xl md:text-3xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Products
          </motion.h2>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/products" className="text-red-600 hover:underline">
              View All
            </Link>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-0 overflow-hidden group">
                <Link href={product.href}>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.isNew && <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700">New</Badge>}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                      onClick={(e) => {
                        e.preventDefault()
                        toggleWishlist(product.id)
                      }}
                    >
                      <Heart
                        className={`h-5 w-5 ${wishlist.includes(product.id) ? "fill-red-600 text-red-600" : ""}`}
                      />
                      <span className="sr-only">Add to wishlist</span>
                    </Button>
                  </div>
                </Link>
                <CardContent className="p-4">
                  <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                  <Link href={product.href} className="font-medium hover:underline line-clamp-2">
                    {product.name}
                  </Link>
                  <div className="mt-2 font-bold">₹{product.price}</div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-red-600 hover:bg-red-700 group" onClick={() => handleAddToCart(product)}>
                    <ShoppingCart className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
