import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import GroupLogoWhite from "@/assets/images/logo/logo_group_white.png";
import Image from "next/image";
import { companies } from "@/assets/data";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white">
      <div className="mx-auto px-[5vw] py-10 flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="md:w-1/4">
          <div className="w-1/2 flex items-center gap-2">
            <Link href={"/"}>
              <Image src={GroupLogoWhite} alt="white-oxaiura-logo" />
            </Link>
          </div>
          <p className="mt-4 text-sm">
            Oxiaura Plantation Pvt. Ltd. specializes in sustainable plantation
            management, eco-friendly products, and investment opportunities,
            focusing on innovation and growth.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaPhone /> +94 76 455 3564 / +94 38 225 4330
            </p>
            <p className="flex items-center gap-2">
              <IoLogoWhatsapp /> +94 76 455 3564
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> info@oxiaura.com
            </p>
          </div>
          <div className="mt-4 flex gap-4">
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        {/* Links Section */}
        <div className="md:w-2/4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Welcome</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href={"/plantation"}>Home</Link>
              </li>
              <li>
                <Link href={"/plantation/about"}>About</Link>
              </li>
              <li>
                <Link href={"/plantation/products"}>Products</Link>
              </li>
              <li>
                <Link href={"/plantation/investment"}>Investment</Link>
              </li>
              <li>
                <Link href={"/plantation/career"}>Career</Link>
              </li>
              <li>
                <Link href={"/plantation/blog"}>Blog</Link>
              </li>
              <li>
                <Link href={"/plantation/gallery"}>Gallery</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Products</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href={"/plantation/products/agarwood"}>Agarwood</Link>
              </li>
              <li>
                <Link href={"/plantation/products/tjc-mango"}>TJC Mango</Link>
              </li>
              <li>
                <Link href={"/plantation/products/vanilla"}>Vanila</Link>
              </li>
              <li>
                <Link href={"/plantation/products/sandalwood"}>Sandalwood</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Partnerships</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href={"/"}>Olix</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Groups</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href={"/"}>Excel Lanka Travels</Link>
              </li>
              <li>
                <Link href={"www.oxoaura.net/web"}>Oxiaura Cosmetics</Link>
              </li>
              <li>
                <Link href={"/"}>JK Holdings</Link>
              </li>
              <li>
                <Link href={"/"}>JK Logistics</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo Section */}
        <div className="md:w-1/4 grid grid-cols-3 gap-3">
          {companies.map((company, i) => (
            <Link key={i} href={company.link} className="relative">
              <div
                className="relative bg-white rounded-md flex items-center justify-center aspect-square p-2 overflow-hidden"
                style={{ backgroundColor: company.bgcolor }}
              >
                <Image
                  src={company.logo}
                  alt={company.name + " logo"}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="bg-green-900 text-center py-4 text-sm">
        Copyright © 2025 Oxiaura. All rights reserved!
      </div>
    </footer>
  );
};

export default Footer;
