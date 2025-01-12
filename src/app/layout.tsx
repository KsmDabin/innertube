import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dabinko International Company",
  description: "Manufacturer of Butyl Inner Tubes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <a href="/" className="flex items-center py-4">
                  <Image
                    src="/images/Logo-innertube.png"
                    alt="Dabinko Logo"
                    width={297}
                    height={79}
                    priority
                  />
                </a>
                <div className="flex items-center space-x-1">
                  <a href="/" className="py-4 px-2">Home</a>
                  <a href="/products" className="py-4 px-2">Products</a>
                  <a href="/news" className="py-4 px-2">News</a>
                  <a href="/about" className="py-4 px-2">About us</a>
                  <a href="/contact" className="py-4 px-2">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 border-l-4 border-yellow-500 pl-3">CONTACT US</h3>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <span className="mr-2">🏢</span>
                    Rm. 301-3, Daekyung T&S Bldg., 9, Yonghyeon-ro, Deogyang-gu, Goyang-si, Gyeonggi-do
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📞</span>
                    +821087764677
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📠</span>
                    +82260089735
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📧</span>
                    dabinko@kita.net
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 border-l-4 border-yellow-500 pl-3">FOLLOW US</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-yellow-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-yellow-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-yellow-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 border-l-4 border-yellow-500 pl-3">SUBSCRIBE</h3>
                <p className="mb-4">For inquiries about our products or pricelist, please leave to us and we will be in touch within 24 hours.</p>
                <button className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition-colors">
                  INQUIRY
                </button>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
              <p>© Copyright - 2010-2024 : All Rights Reserved.</p>
              <p className="mt-2">
                <a href="#" className="hover:text-yellow-500">Hot Products</a> - 
                <a href="#" className="hover:text-yellow-500"> Sitemap</a> - 
                <a href="#" className="hover:text-yellow-500"> AMP Mobile</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
