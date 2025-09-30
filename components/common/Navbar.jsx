"use client"; // Only if using App Router and you want client-side interactivity

import { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo1.png"
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // adjust scroll threshold
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full h-16 flex justify-between items-center px-[5vw] transition-all duration-300 z-50
        ${scrolled ? "bg-white shadow-md" : "bg-transparent shadow-none"}
      `}
    >
      {/* Left: Logo */}
      <nav className="flex items-center gap-6">
        <Image src={logo} alt="Logo"/>

        {/* Nav links */}
        <ul className="hidden md:flex gap-6 list-none">
          <li><Link href="/" className="text-gray-800 font-medium hover:text-green-600">Home</Link></li>
          <li><Link href="/about" className="text-gray-800 font-medium hover:text-green-600">About</Link></li>
          <li><Link href="/products" className="text-gray-800 font-medium hover:text-green-600">Products</Link></li>
          <li><Link href="/plans" className="text-gray-800 font-medium hover:text-green-600">Investment Plans</Link></li>
          <li><Link href="/blog" className="text-gray-800 font-medium hover:text-green-600">Blog</Link></li>
          <li><Link href="/contact" className="text-gray-800 font-medium hover:text-green-600">Contact</Link></li>
        </ul>
      </nav>

      {/* Right: Search + Profile */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            className="border border-green-600 rounded-full px-4 py-1 text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 w-7 h-7 flex items-center justify-center rounded-full bg-green-600 text-white"
          >
            <FaSearch size={20} />
          </button>
        </div>

        {/* Profile button */}
        <Link
          href="/profile"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white"
        >
          <CgProfile  size={20} />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-800 text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile nav menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li><Link href="/" className="text-gray-800 hover:text-green-600">Home</Link></li>
            <li><Link href="/about" className="text-gray-800 hover:text-green-600">About</Link></li>
            <li><Link href="/products" className="text-gray-800 hover:text-green-600">Products</Link></li>
            <li><Link href="/plans" className="text-gray-800 hover:text-green-600">Investment Plans</Link></li>
            <li><Link href="/blog" className="text-gray-800 hover:text-green-600">Blog</Link></li>
            <li><Link href="/contact" className="text-gray-800 hover:text-green-600">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
