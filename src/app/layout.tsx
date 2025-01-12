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
                    width={270}
                    height={72}
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
        <footer className="bg-gray-800 text-white">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <p>Address: Rm. 301-3, Daekyung T&S Bldg., 9, Yonghyeon-ro, Deogyang-gu, Goyang-si, Gyeonggi-do</p>
                <p>Tel: +821087764677</p>
                <p>Fax: +82260089735</p>
                <p>Email: dabinko@kita.net</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                <p>Contact us via WhatsApp, WeChat, or Telegram</p>
                <p className="mt-4">
                  <a href="https://tubetyre.com" className="text-blue-400 hover:underline">
                    Visit Our Website
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
