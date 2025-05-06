"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const categories = [
  {
    title: "Men",
    href: "/category/men",
    subcategories: [
      { title: "T-Shirts", href: "/category/men/t-shirts" },
      { title: "Shirts", href: "/category/men/shirts" },
      { title: "Jeans", href: "/category/men/jeans" },
    ],
  },
  {
    title: "Women",
    href: "/category/women",
    subcategories: [
      { title: "T-Shirts", href: "/category/women/t-shirts" },
      { title: "Tops", href: "/category/women/tops" },
      { title: "Dresses", href: "/category/women/dresses" },
    ],
  },
  {
    title: "Kids",
    href: "/category/kids",
    subcategories: [
      { title: "T-Shirts", href: "/category/kids/t-shirts" },
      { title: "Clothing", href: "/category/kids/clothing" },
    ],
  },
  {
    title: "Accessories",
    href: "/category/accessories",
    subcategories: [
      { title: "Bags", href: "/category/accessories/bags" },
      { title: "Caps", href: "/category/accessories/caps" },
    ],
  },
  { title: "Collections", href: "/collections" },
  { title: "Membership", href: "/membership" },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] pr-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b pb-4">
            <SheetClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </SheetClose>
            <div className="relative flex-1 px-4">
              <Search className="absolute left-6 top-3 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="Search..." className="w-full pl-8 rounded-full bg-gray-100" />
            </div>
          </div>
          <div className="flex-1 overflow-auto py-4">
            <div className="flex flex-col space-y-3">
              {categories.map((category) =>
                category.subcategories ? (
                  <Accordion key={category.title} type="single" collapsible className="w-full">
                    <AccordionItem value={category.title} className="border-none">
                      <AccordionTrigger className="py-2 px-4 hover:no-underline hover:bg-gray-100">
                        {category.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 pl-4">
                          {category.subcategories.map((subcategory) => (
                            <SheetClose asChild key={subcategory.title}>
                              <Link href={subcategory.href} className="py-2 px-4 hover:bg-gray-100 rounded-md">
                                {subcategory.title}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <SheetClose asChild key={category.title}>
                    <Link href={category.href} className="py-2 px-4 hover:bg-gray-100 rounded-md">
                      {category.title}
                    </Link>
                  </SheetClose>
                ),
              )}
            </div>
          </div>
          <div className="border-t pt-4 px-4 space-y-4">
            <SheetClose asChild>
              <Link href="/account" className="flex items-center py-2 hover:bg-gray-100 rounded-md">
                My Account
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/track-order" className="flex items-center py-2 hover:bg-gray-100 rounded-md">
                Track Order
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/contact" className="flex items-center py-2 hover:bg-gray-100 rounded-md">
                Contact Us
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
