"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react"; // Icons
import GroupLogo from "@/assets/images/logo/group_logo.png";

const GroupNavbar = ({always=false}) => {
  const [scrolled, setScrolled] = useState(always);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (always) {
      // If always is true, keep it scrolled style permanently
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [always]);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-16 z-50 transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "bg-white shadow-md translate-y-0 opacity-100"
            : "bg-transparent shadow-none -translate-y-16 opacity-0"
        }
      `}
    >
      <nav className="flex items-center justify-between px-[5vw] h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={GroupLogo}
            alt="OXIAURA Group Logo"
            width={120}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-black font-semibold text-lg">
          <Link href="/">Home</Link>
          <Link href="/plantation">Plantation</Link>
          <Link href="https://oxiaura.net">Cosmetics</Link>
          <Link href="/">Excel Lanka</Link>

          {/* Members Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-green-700">
              Members <ChevronDown size={18} />
            </button>
            {dropdownOpen && (
              <div
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-lg"
              >
                <Link
                  href="/members/team"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Olix
                </Link>
                <Link
                  href="/members/partners"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  JK Holding
                </Link>
                <Link
                  href="/members/join"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  JK Logistics
                </Link>
                <Link
                  href="/members/join"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Oxiaura Healthcare
                </Link>
                <Link
                  href="/members/join"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Oxiaura Realestate
                </Link>
              </div>
            )}
          </div>

          <Link href="/">Gallery</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col items-start px-[5vw] py-4 text-black font-medium space-y-3">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Plantation
            </Link>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Cosmetics
            </Link>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Excel Lanka
            </Link>

            {/* Members mobile dropdown */}
            <div>
              <button
                className="flex items-center gap-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Members <ChevronDown size={18} />
              </button>
              {dropdownOpen && (
                <div className="flex flex-col ml-4 mt-2 space-y-2 text-gray-700">
                  <Link href="/members/team" onClick={() => setMenuOpen(false)}>
                    Olix
                  </Link>
                  <Link
                    href="/members/partners"
                    onClick={() => setMenuOpen(false)}
                  >
                    JK Holding
                  </Link>
                  <Link href="/members/join" onClick={() => setMenuOpen(false)}>
                    JK Logistics
                  </Link>
                  <Link href="/members/join" onClick={() => setMenuOpen(false)}>
                    Oxiaura Healthcare
                  </Link>
                  <Link href="/members/join" onClick={() => setMenuOpen(false)}>
                    Oxiaura Realestate
                  </Link>
                </div>
              )}
            </div>

            <Link href="/" onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default GroupNavbar;
