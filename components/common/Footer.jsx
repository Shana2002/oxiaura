import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white">
      <div className="mx-auto px-[5vw] py-10 flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="md:w-1/4">
          <h1 className="text-3xl font-bold flex items-center gap-2">OXIAURA</h1>
          <p className="mt-4 text-sm">
            Oxiaura Plantation Pvt. Ltd. specializes in sustainable plantation management, eco-friendly products, and investment opportunities, focusing on innovation and growth.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaPhone /> +94 78 123 4567 / +94 11 234 5678
            </p>
            <p className="flex items-center gap-2">
              <IoLogoWhatsapp /> +94 78 123 4567
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> info@example.com
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
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Products</h3>
            <ul className="space-y-1 text-sm">
              <li>Product 01</li>
              <li>Product 02</li>
              <li>Product 03</li>
              <li>Product 04</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Partnerships</h3>
            <ul className="space-y-1 text-sm">
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Groups</h3>
            <ul className="space-y-1 text-sm">
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
        </div>

        {/* Image placeholders */}
        <div className="md:w-1/4 grid grid-cols-3 gap-2">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="bg-gray-300 h-16 w-full rounded-md"
              ></div>
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
