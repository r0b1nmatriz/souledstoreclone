# TheSouledStore Clone

A comprehensive clone of TheSouledStore e-commerce platform, featuring a responsive design, authentication system, admin dashboard, and seamless animations.

## Features

- **Responsive Design**: Optimized for iOS, mobile, and desktop
- **Authentication System**: Secure user authentication with Supabase
- **Product Catalog**: Browse products by category with filtering options
- **Shopping Cart**: Add, remove, and update items in your cart
- **Admin Dashboard**: Shopify-inspired dashboard for managing products, orders, and customers
- **Smooth Animations**: Enhanced user experience with seamless transitions
- **ERP & CRM Integration**: Integrated systems for inventory, customer management, and analytics

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **State Management**: React Context API
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/r0b1nmatriz/thesouledstore-clone.git
   cd thesouledstore-clone
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   \`\`\`
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   \`\`\`

4. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Accessing the Admin Dashboard

The admin dashboard is available at [http://localhost:3000/admin](http://localhost:3000/admin).

To access the admin dashboard in production:
1. Create an admin user through the Supabase dashboard
2. Set the user's role to 'admin' in the profiles table
3. Log in with the admin credentials
4. Navigate to `/admin`

## Database Schema

The application uses the following main tables in Supabase:

- **profiles**: User profiles and authentication data
- **products**: Product information including variants, pricing, and inventory
- **categories**: Product categories and subcategories
- **orders**: Order information and status
- **order_items**: Individual items within orders
- **cart_items**: Items in user shopping carts

## Deployment

The application is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure the environment variables
4. Deploy

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
