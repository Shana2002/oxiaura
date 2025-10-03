"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import GroupLogo from '@/assets/images/logo/group_logo.png'
import Image from "next/image";

const GroupNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed w-full h-16 flex justify-between items-center px-[5vw] z-50 transition-all duration-500 ease-in-out
        ${scrolled ? "bg-white shadow-md translate-y-0 opacity-100" : "bg-transparent shadow-none -translate-y-16 opacity-0"}
      `}
    >
      <nav className="flex items-center gap-6">
        <Link href="/" className="flex items-center">
          <Image
            src={GroupLogo}
            alt="OXIAURA Logo"
            className="h-15 w-auto"
          />
        </Link>
      </nav>
    </header>
  );
};

export default GroupNavbar;
