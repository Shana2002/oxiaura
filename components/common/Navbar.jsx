"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, User, Menu, X } from "lucide-react"
import logo from '@/assets/images/logo1.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full h-16 flex justify-between items-center px-[5vw] transition-all duration-300 z-50
        ${scrolled ? "bg-white shadow-md" : "bg-transparent shadow-none"}
      `}
    >
      {/* Left: Logo */}
      <nav className="flex items-center gap-6">
        <Link href="/" className="flex items-center">
          <img src={"/images/logo1.png"} alt="OXIAURA Logo" className="h-10 w-auto" />
        </Link>

        {/* Nav links */}
        <ul className="hidden lg:flex gap-6 list-none">
          <li>
            <Link href="/" className="text-gray-800  font-semibold hover:text-green-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-800 font-semibold hover:text-green-600 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-gray-800 font-semibold hover:text-green-600 transition-colors">
              Products
            </Link>
          </li>
          <li>
            <Link href="/plans" className="text-gray-800 font-semibold hover:text-green-600 transition-colors">
              Investment plans
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="text-gray-800 font-semibold hover:text-green-600 transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/career" className="text-gray-800 font-semibold hover:text-green-600 transition-colors">
              Career
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right: Search + Profile */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden sm:block text-black">
          <input
            type="search"
            placeholder="Search"
            className="border border-green-600 rounded-full px-4 py-1.5 pr-10 text-sm focus:outline-none focus:ring-0 focus:ring-green-600"
          />
          <button
            type="submit"
            className="absolute right-[-2] top-[-2] w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors p-"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Profile button */}
        <Link
          href="/profile"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
        >
          <User size={20} />
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-gray-800 hover:text-green-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link
                href="/"
                className="text-gray-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/plans"
                className="text-gray-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Investment plans
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="text-gray-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/career"
                className="text-gray-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Career
              </Link>
            </li>
            <li>
              
            </li>
          </ul>
          <div className="relative  text-black p-6 flex justify-center items-center mt-[-2vh] gap-2">
          <input
            type="search"
            placeholder="Search"
            className="border border-green-600 rounded-full px-4 py-1.5 pr-10 text-sm focus:outline-none focus:ring-0 focus:ring-green-600"
          />
          <button
            type="submit"
            className=" w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors p-"
          >
            <Search size={25} />
          </button>
        </div>
          
        </div>
      )}
    </header>
  )
}
