import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const footerLinks = {
  help: [
    { name: "Contact Us", href: "/contact" },
    { name: "Track Order", href: "/track-order" },
    { name: "Returns & Refunds", href: "/returns" },
    { name: "FAQs", href: "/faqs" },
    { name: "My Account", href: "/account" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Investor Relations", href: "/investors" },
    { name: "Careers", href: "/careers" },
    { name: "Stores Near Me", href: "/stores" },
    { name: "Community Initiatives", href: "/community" },
  ],
  info: [
    { name: "T&C", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Sitemap", href: "/sitemap" },
  ],
  social: [
    { name: "Facebook", href: "https://facebook.com", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "YouTube", href: "https://youtube.com", icon: Youtube },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">NEED HELP</h3>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-red-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">COMPANY</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-red-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">MORE INFO</h3>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-red-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">EXPERIENCE THE APP</h3>
            <div className="flex space-x-2 mb-6">
              <Link href="#" className="block transition-transform hover:scale-105">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Download on Google Play"
                  width={120}
                  height={40}
                />
              </Link>
              <Link href="#" className="block transition-transform hover:scale-105">
                <Image src="/placeholder.svg?height=40&width=120" alt="Download on App Store" width={120} height={40} />
              </Link>
            </div>
            <h3 className="font-bold text-lg mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              {footerLinks.social.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-600 hover:text-red-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} TheSouledStore Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
