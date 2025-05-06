"use server"

import { revalidatePath } from "next/cache"
import { supabase } from "./client"

// Product actions
export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching products:", error)
    return []
  }

  return data
}

export async function getProductById(id: string) {
  const { data, error } = await supabase.from("products").select("*").eq("id", id).single()

  if (error) {
    console.error("Error fetching product:", error)
    return null
  }

  return data
}

export async function createProduct(productData: any) {
  const { data, error } = await supabase.from("products").insert(productData).select()

  if (error) {
    console.error("Error creating product:", error)
    return { success: false, error }
  }

  revalidatePath("/admin/products")
  return { success: true, data }
}

export async function updateProduct(id: string, productData: any) {
  const { data, error } = await supabase.from("products").update(productData).eq("id", id).select()

  if (error) {
    console.error("Error updating product:", error)
    return { success: false, error }
  }

  revalidatePath("/admin/products")
  revalidatePath(`/product/${id}`)
  return { success: true, data }
}

export async function deleteProduct(id: string) {
  const { error } = await supabase.from("products").delete().eq("id", id)

  if (error) {
    console.error("Error deleting product:", error)
    return { success: false, error }
  }

  revalidatePath("/admin/products")
  return { success: true }
}

// Order actions
export async function getOrders() {
  const { data, error } = await supabase
    .from("orders")
    .select(`
      *,
      customers (
        first_name,
        last_name,
        email
      )
    `)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching orders:", error)
    return []
  }

  return data
}

export async function getOrderById(id: string) {
  const { data, error } = await supabase
    .from("orders")
    .select(`
      *,
      customers (
        first_name,
        last_name,
        email,
        phone
      ),
      order_items (
        *,
        products (
          name,
          sku,
          images
        )
      )
    `)
    .eq("id", id)
    .single()

  if (error) {
    console.error("Error fetching order:", error)
    return null
  }

  return data
}

export async function updateOrderStatus(id: string, status: string) {
  const { data, error } = await supabase.from("orders").update({ status }).eq("id", id).select()

  if (error) {
    console.error("Error updating order status:", error)
    return { success: false, error }
  }

  revalidatePath("/admin/orders")
  revalidatePath(`/admin/orders/${id}`)
  return { success: true, data }
}

// Customer actions
export async function getCustomers() {
  const { data, error } = await supabase.from("customers").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching customers:", error)
    return []
  }

  return data
}

export async function getCustomerById(id: string) {
  const { data, error } = await supabase
    .from("customers")
    .select(`
      *,
      orders (
        id,
        created_at,
        status,
        total_amount
      )
    `)
    .eq("id", id)
    .single()

  if (error) {
    console.error("Error fetching customer:", error)
    return null
  }

  return data
}
