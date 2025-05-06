"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Edit, Trash } from "lucide-react"

// Mock recent orders data
const recentOrders = [
  {
    id: "ORD-001",
    customer: {
      name: "Rahul Sharma",
      email: "rahul@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    status: "completed",
    date: "2023-05-04T11:42:32",
    amount: "₹2,345",
  },
  {
    id: "ORD-002",
    customer: {
      name: "Priya Patel",
      email: "priya@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    status: "processing",
    date: "2023-05-04T10:24:18",
    amount: "₹1,799",
  },
  {
    id: "ORD-003",
    customer: {
      name: "Amit Kumar",
      email: "amit@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    status: "pending",
    date: "2023-05-04T09:12:41",
    amount: "₹899",
  },
  {
    id: "ORD-004",
    customer: {
      name: "Sneha Gupta",
      email: "sneha@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    status: "completed",
    date: "2023-05-03T18:36:27",
    amount: "₹3,245",
  },
  {
    id: "ORD-005",
    customer: {
      name: "Vikram Singh",
      email: "vikram@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    status: "cancelled",
    date: "2023-05-03T15:27:52",
    amount: "₹1,499",
  },
]

export function RecentOrders() {
  const [orders, setOrders] = useState(recentOrders)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "processing":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "cancelled":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id} className="hover:bg-gray-50">
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={order.customer.avatar || "/placeholder.svg"} alt={order.customer.name} />
                  <AvatarFallback>{order.customer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{order.customer.name}</span>
                  <span className="text-xs text-muted-foreground">{order.customer.email}</span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge className={getStatusColor(order.status)}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </Badge>
            </TableCell>
            <TableCell>{formatDate(order.date)}</TableCell>
            <TableCell className="text-right">{order.amount}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Eye className="mr-2 h-4 w-4" />
                    View details
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit order
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <Trash className="mr-2 h-4 w-4" />
                    Cancel order
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
