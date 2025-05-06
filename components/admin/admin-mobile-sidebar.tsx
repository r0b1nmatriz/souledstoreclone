"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Package,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  Tag,
  CreditCard,
  Truck,
  MessageSquare,
} from "lucide-react"

export function AdminMobileSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  const menuItems = [
    {
      title: "Main",
      items: [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
        { name: "Products", href: "/admin/products", icon: Package },
        { name: "Customers", href: "/admin/customers", icon: Users },
      ],
    },
    {
      title: "Catalog",
      items: [
        { name: "Categories", href: "/admin/categories", icon: Tag },
        { name: "Collections", href: "/admin/collections", icon: Package },
        { name: "Discounts", href: "/admin/discounts", icon: Tag },
      ],
    },
    {
      title: "Sales",
      items: [
        { name: "Transactions", href: "/admin/transactions", icon: CreditCard },
        { name: "Shipping", href: "/admin/shipping", icon: Truck },
      ],
    },
    {
      title: "Reports",
      items: [{ name: "Analytics", href: "/admin/analytics", icon: BarChart3 }],
    },
    {
      title: "Customer Service",
      items: [{ name: "Support Tickets", href: "/admin/support", icon: MessageSquare }],
    },
    {
      title: "Settings",
      items: [
        { name: "Store Settings", href: "/admin/settings", icon: Settings },
        { name: "Help & Support", href: "/admin/help", icon: HelpCircle },
      ],
    },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="border-b p-4">
        <Link href="/admin" className="flex items-center gap-2 font-bold text-xl">
          <ShoppingBag className="h-6 w-6 text-red-600" />
          <span>Admin Dashboard</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        {menuItems.map((section) => (
          <div key={section.title} className="px-3 py-2">
            <h3 className="mb-2 px-4 text-xs font-semibold text-gray-500">{section.title}</h3>
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium ${
                      isActive(item.href) ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t p-4">
        <button className="flex w-full items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  )
}
