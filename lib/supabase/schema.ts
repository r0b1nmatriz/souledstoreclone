// This file defines the database schema for Supabase

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          created_at: string
          name: string
          description: string
          price: number
          compare_at_price: number | null
          category_id: string
          subcategory_id: string | null
          brand_id: string | null
          sku: string
          barcode: string | null
          inventory_quantity: number
          is_active: boolean
          is_featured: boolean
          images: string[]
          tags: string[] | null
          metadata: Json | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          description: string
          price: number
          compare_at_price?: number | null
          category_id: string
          subcategory_id?: string | null
          brand_id?: string | null
          sku: string
          barcode?: string | null
          inventory_quantity: number
          is_active?: boolean
          is_featured?: boolean
          images: string[]
          tags?: string[] | null
          metadata?: Json | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          description?: string
          price?: number
          compare_at_price?: number | null
          category_id?: string
          subcategory_id?: string | null
          brand_id?: string | null
          sku?: string
          barcode?: string | null
          inventory_quantity?: number
          is_active?: boolean
          is_featured?: boolean
          images?: string[]
          tags?: string[] | null
          metadata?: Json | null
        }
      }
      categories: {
        Row: {
          id: string
          created_at: string
          name: string
          slug: string
          description: string | null
          parent_id: string | null
          image_url: string | null
          is_active: boolean
          sort_order: number
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          slug: string
          description?: string | null
          parent_id?: string | null
          image_url?: string | null
          is_active?: boolean
          sort_order?: number
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          slug?: string
          description?: string | null
          parent_id?: string | null
          image_url?: string | null
          is_active?: boolean
          sort_order?: number
        }
      }
      customers: {
        Row: {
          id: string
          created_at: string
          user_id: string
          first_name: string
          last_name: string
          email: string
          phone: string | null
          address_line1: string | null
          address_line2: string | null
          city: string | null
          state: string | null
          postal_code: string | null
          country: string | null
          is_verified: boolean
          metadata: Json | null
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          address_line1?: string | null
          address_line2?: string | null
          city?: string | null
          state?: string | null
          postal_code?: string | null
          country?: string | null
          is_verified?: boolean
          metadata?: Json | null
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string | null
          address_line1?: string | null
          address_line2?: string | null
          city?: string | null
          state?: string | null
          postal_code?: string | null
          country?: string | null
          is_verified?: boolean
          metadata?: Json | null
        }
      }
      orders: {
        Row: {
          id: string
          created_at: string
          customer_id: string
          status: string
          total_amount: number
          subtotal: number
          tax: number
          shipping: number
          discount: number
          payment_method: string
          payment_status: string
          shipping_address: Json
          billing_address: Json
          tracking_number: string | null
          notes: string | null
          metadata: Json | null
        }
        Insert: {
          id?: string
          created_at?: string
          customer_id: string
          status: string
          total_amount: number
          subtotal: number
          tax: number
          shipping: number
          discount: number
          payment_method: string
          payment_status: string
          shipping_address: Json
          billing_address: Json
          tracking_number?: string | null
          notes?: string | null
          metadata?: Json | null
        }
        Update: {
          id?: string
          created_at?: string
          customer_id?: string
          status?: string
          total_amount?: number
          subtotal?: number
          tax?: number
          shipping?: number
          discount?: number
          payment_method?: string
          payment_status?: string
          shipping_address?: Json
          billing_address?: Json
          tracking_number?: string | null
          notes?: string | null
          metadata?: Json | null
        }
      }
      order_items: {
        Row: {
          id: string
          created_at: string
          order_id: string
          product_id: string
          variant_id: string | null
          quantity: number
          price: number
          total: number
          metadata: Json | null
        }
        Insert: {
          id?: string
          created_at?: string
          order_id: string
          product_id: string
          variant_id?: string | null
          quantity: number
          price: number
          total: number
          metadata?: Json | null
        }
        Update: {
          id?: string
          created_at?: string
          order_id?: string
          product_id?: string
          variant_id?: string | null
          quantity?: number
          price?: number
          total?: number
          metadata?: Json | null
        }
      }
    }
  }
}
