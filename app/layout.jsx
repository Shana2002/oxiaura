import { Inter } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Oxiaura Group",
  description: "Oxiaura Plantation is a proud member of the Oxiaura Group, delivering high-quality sustainable plantation products and excellence in agriculture in Sri Lanka.",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased text-black overflow-x-hidden`}>

        {/* 🏆 Awards (Horizontal - Left of WhatsApp) */}
        <div className="fixed bottom-6 right-24 flex items-center gap-3 z-[999]">
          
          <Link href="/plantation/blogs/excellence-in-sustainable-plantation-development-award-2025">
            <img
              src="/images/blog/award_1.png"
              alt="Award 1"
              className="w-20 h-44 object-cover hover:scale-105 transition cursor-pointer"
            />
          </Link>

          <Link href="/plantation/blogs/excellence-award-for-best-plantation-company-2025">
            <img
              src="/images/blog/synergy_award.png"
              alt="Award 2"
              className="w-20 h-44 object-cover hover:scale-105 transition cursor-pointer"
            />
          </Link>

        </div>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/+94764336544"
          className="fixed bottom-6 right-6 bg-green-600 p-4 rounded-full text-white shadow-lg hover:bg-green-700 z-[1000]"
        >
          <FaWhatsapp className="text-2xl" />
        </a>

        {children}
      </body>
    </html>
  );
}
