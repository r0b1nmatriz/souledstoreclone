"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"

const categories = [
  { title: "Men", href: "/category/men" },
  { title: "Women", href: "/category/women" },
  { title: "Kids", href: "/category/kids" },
  { title: "Accessories", href: "/category/accessories" },
  { title: "Collections", href: "/collections" },
  { title: "Membership", href: "/membership" },
]

export function MainNav() {
  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      {categories.map((category) => (
        <Link key={category.title} href={category.href} className={cn("transition-colors hover:text-red-600")}>
          {category.title}
        </Link>
      ))}
    </nav>
  )
}
