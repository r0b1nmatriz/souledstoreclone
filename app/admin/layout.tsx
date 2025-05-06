import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <div className="flex flex-col flex-1">
          <AdminHeader />
          <main className="flex-1 p-6 bg-gray-50">{children}</main>
        </div>
      </div>
    </div>
  )
}
