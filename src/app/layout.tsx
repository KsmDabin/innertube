'use client';
import { useState } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showQR, setShowQR] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Dabinko International Company</title>
        <meta name="description" content="Manufacturer of Butyl Inner Tubes" />
      </head>
      <body className={inter.className}>
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="flex items-center">
                <img src="/images/dabinko-logo.png" alt="Dabinko Logo" className="h-16" />
              </a>
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-[#7B2CBF]">HOME</a>
                <a href="/products" className="text-gray-700 hover:text-[#7B2CBF]">PRODUCTS</a>
                <a href="/about" className="text-gray-700 hover:text-[#7B2CBF]">ABOUT US</a>
                <a href="/contact" className="text-gray-700 hover:text-[#7B2CBF]">CONTACT US</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section with Large Logo */}
        <div className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <img src="/images/dabinko-logo.png" alt="Dabinko Logo" className="h-24 mx-auto" />
          </div>
        </div>

        {/* Production Procedure Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Production Procedure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/images/raw-material.jpg" alt="Raw Material" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">Raw Material</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/images/mixing-process.jpg" alt="Mixing Process" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">Mixing Process</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/images/extruding.jpg" alt="Extruding" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">Extruding</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/images/splicing.jpg" alt="Splicing" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">Splicing</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/images/vulcanizing.jpg" alt="Vulcanizing" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">Vulcanizing</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/images/testing.jpg" alt="Testing" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">Testing</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/images/packaging.jpg" alt="Packaging" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">Packaging</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/images/shipping.jpg" alt="Shipping" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">Shipping</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {children}

        {/* Floating Social Media Menu */}
        <div className="fixed right-0 top-1/3 z-50 flex flex-col gap-1 bg-[#4CAF50] bg-opacity-20 rounded-l-lg shadow-lg">
          {/* WhatsApp */}
          <a
            href="https://wa.me/821087764677"
            className="flex items-center p-2 hover:bg-[#4CAF50] hover:text-white transition-colors group overflow-hidden"
          >
            <svg className="w-5 h-5 text-[#25D366] group-hover:text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="ml-2 text-xs whitespace-nowrap w-0 group-hover:w-auto overflow-hidden transition-all duration-300">+821087764677</span>
          </a>

          {/* WeChat */}
          <button
            onClick={() => setShowQR(!showQR)}
            className="flex items-center p-2 hover:bg-[#4CAF50] hover:text-white transition-colors group overflow-hidden w-full text-left"
          >
            <svg className="w-5 h-5 text-[#07C160] group-hover:text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.133 0 .24-.11.24-.246 0-.06-.024-.12-.04-.177l-.325-1.233a.492.492 0 01.177-.554c1.526-1.115 2.496-2.851 2.496-4.785 0-3.416-3.148-6.041-7.055-5.957zm-2.06 2.97c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z"/>
            </svg>
            <span className="ml-2 text-xs whitespace-nowrap w-0 group-hover:w-auto overflow-hidden transition-all duration-300">+821087764677</span>
          </button>

          {/* Telegram */}
          <a
            href="https://t.me/821087764677"
            className="flex items-center p-2 hover:bg-[#4CAF50] hover:text-white transition-colors group overflow-hidden"
          >
            <svg className="w-5 h-5 text-[#0088cc] group-hover:text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span className="ml-2 text-xs whitespace-nowrap w-0 group-hover:w-auto overflow-hidden transition-all duration-300">+821087764677</span>
          </a>

          {/* Email */}
          <a
            href="mailto:dabinko@kita.net"
            className="flex items-center p-2 hover:bg-[#4CAF50] hover:text-white transition-colors group overflow-hidden"
          >
            <svg className="w-5 h-5 text-blue-500 group-hover:text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="ml-2 text-xs whitespace-nowrap w-0 group-hover:w-auto overflow-hidden transition-all duration-300">dabinko@kita.net</span>
          </a>
        </div>

        {/* WeChat QR Code Modal */}
        {showQR && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">WeChat QR Code</h3>
                <button onClick={() => setShowQR(false)} className="text-gray-500 hover:text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="w-64 h-64 bg-gray-200 flex items-center justify-center">
                <img src="/images/wechat-qr.png" alt="WeChat QR Code" className="w-full h-full object-contain" />
              </div>
              <p className="mt-4 text-center text-gray-600">ID: Dabinko</p>
              <p className="text-center text-gray-600">+821087764677</p>
            </div>
          </div>
        )}

        {/* Main content remains unchanged */}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p className="text-gray-400">
                  Dabinko International Company specializes in manufacturing high-quality butyl inner tubes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">
                  Email: dabinko@kita.net<br />
                  Tel: +82-10-8776-4677
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Address</h3>
                <p className="text-gray-400">
                  25, Seongsuil-ro 8-gil,<br />
                  Seongdong-gu, Seoul,<br />
                  Republic of Korea
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                <p className="text-gray-400">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM KST
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-6 pt-4 border-t border-gray-800">
              <p className="text-sm text-gray-400">
                © 2018 - 2025 Dabinko International Company. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
