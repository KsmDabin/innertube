import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dabinko International Company",
  description: "Butyl inner tube 제조 전문 기업",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <a href="/" className="flex items-center py-4">
                  <span className="font-semibold text-gray-500 text-lg">Dabinko</span>
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
                <h3 className="text-lg font-semibold mb-4">연락처</h3>
                <p>주소: Rm. 301-3, Daekyung T&S Bldg., 9, Yonghyeon-ro, Deogyang-gu, Goyang-si, Gyeonggi-do</p>
                <p>전화: +821087764677</p>
                <p>팩스: +82260089735</p>
                <p>이메일: dabinko@kita.net</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">SNS</h3>
                <p>WhatsApp, WeChat, Telegram으로 연락 가능</p>
                <p className="mt-4">
                  <a href="http://www.florescencetube.com" className="text-blue-400 hover:underline">
                    회사 웹사이트 방문
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
