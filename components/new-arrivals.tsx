"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"

// Mock products data
const newArrivals = {
  men: [
    {
      id: "m1",
      name: "Marvel Spider-Man T-Shirt",
      price: 799,
      image: "/placeholder.svg?height=400&width=300",
      category: "T-Shirts",
      href: "/product/marvel-spiderman-t-shirt",
    },
    {
      id: "m2",
      name: "Star Wars Mandalorian Hoodie",
      price: 1499,
      image: "/placeholder.svg?height=400&width=300",
      category: "Hoodies",
      href: "/product/star-wars-mandalorian-hoodie",
    },
    {
      id: "m3",
      name: "DC Superman Sweatshirt",
      price: 1199,
      image: "/placeholder.svg?height=400&width=300",
      category: "Sweatshirts",
      href: "/product/dc-superman-sweatshirt",
    },
    {
      id: "m4",
      name: "Game of Thrones Stark T-Shirt",
      price: 699,
      image: "/placeholder.svg?height=400&width=300",
      category: "T-Shirts",
      href: "/product/got-stark-t-shirt",
    },
  ],
  women: [
    {
      id: "w1",
      name: "Friends Monica Geller T-Shirt",
      price: 799,
      image: "/placeholder.svg?height=400&width=300",
      category: "T-Shirts",
      href: "/product/friends-monica-t-shirt",
    },
    {
      id: "w2",
      name: "Harry Potter Hogwarts Hoodie",
      price: 1499,
      image: "/placeholder.svg?height=400&width=300",
      category: "Hoodies",
      href: "/product/harry-potter-hogwarts-hoodie",
    },
    {
      id: "w3",
      name: "Marvel Black Widow Sweatshirt",
      price: 1199,
      image: "/placeholder.svg?height=400&width=300",
      category: "Sweatshirts",
      href: "/product/marvel-black-widow-sweatshirt",
    },
    {
      id: "w4",
      name: "Disney Princess T-Shirt",
      price: 699,
      image: "/placeholder.svg?height=400&width=300",
      category: "T-Shirts",
      href: "/product/disney-princess-t-shirt",
    },
  ],
  kids: [
    {
      id: "k1",
      name: "Marvel Avengers Kids T-Shirt",
      price: 599,
      image: "/placeholder.svg?height=400&width=300",
      category: "T-Shirts",
      href: "/product/marvel-avengers-kids-t-shirt",
    },
    {
      id: "k2",
      name: "Disney Frozen Hoodie",
      price: 1099,
      image: "/placeholder.svg?height=400&width=300",
      category: "Hoodies",
      href: "/product/disney-frozen-hoodie",
    },
    {
      id: "k3",
      name: "Paw Patrol Sweatshirt",
      price: 899,
      image: "/placeholder.svg?height=400&width=300",
      category: "Sweatshirts",
      href: "/product/paw-patrol-sweatshirt",
    },
    {
      id: "k4",
      name: "Pokemon Pikachu T-Shirt",
      price: 599,
      image: "/placeholder.svg?height=400&width=300",
      category: "T-Shirts",
      href: "/product/pokemon-pikachu-t-shirt",
    },
  ],
}

export function NewArrivals() {
  const { addItem } = useCart()
  const { toast } = useToast()
  const [wishlist, setWishlist] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState("men")

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

  const handleAddToCart = (product: any) => {
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
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          New Arrivals
        </motion.h2>

        <Tabs defaultValue="men" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="men" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Men
              </TabsTrigger>
              <TabsTrigger value="women" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Women
              </TabsTrigger>
              <TabsTrigger value="kids" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Kids
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="men" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {newArrivals.men.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard
                    product={product}
                    wishlist={wishlist}
                    toggleWishlist={toggleWishlist}
                    handleAddToCart={handleAddToCart}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="women" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {newArrivals.women.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard
                    product={product}
                    wishlist={wishlist}
                    toggleWishlist={toggleWishlist}
                    handleAddToCart={handleAddToCart}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="kids" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {newArrivals.kids.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard
                    product={product}
                    wishlist={wishlist}
                    toggleWishlist={toggleWishlist}
                    handleAddToCart={handleAddToCart}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href={`/category/${activeTab}`}>
              View All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}'s Collection
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, wishlist, toggleWishlist, handleAddToCart }: any) {
  return (
    <Card className="border-0 overflow-hidden group">
      <Link href={product.href}>
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700">New</Badge>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
            onClick={(e) => {
              e.preventDefault()
              toggleWishlist(product.id)
            }}
          >
            <Heart className={`h-5 w-5 ${wishlist.includes(product.id) ? "fill-red-600 text-red-600" : ""}`} />
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
  )
}
