"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function DirectorCard({ name, title, bio, imageUrl, index }) {
  const side = index % 2;
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-8 rounded-xl ${
        side === 1 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] relative flex-shrink-0">
        <Image
          src={imageUrl}
          alt={`oxiaura-${title}`}
          fill
          className={`object-contain ${side === 1 ? "scale-x-[-1]" : ""}`}
          priority
        />
      </div>

      {/* Content */}
      <div
        className={`max-w-xl text-center md:text-left ${
          side === 1 ? "md:text-right" : ""
        }`}
      >
        <h2 className="text-4xl font-bold text-black my-3 ">{name}</h2>
        <h3 className="text-green-600 text-lg font-semibold">{title}</h3>
        <div
          className={`w-20 h-[2px] bg-green-600   my-2 ${
            side === 1 ? "md:ml-auto" : ""
          }`}
        ></div>

        <p className="text-gray-700 mb-4">{bio}</p>

        {/* Socials */}
        <div
          className={`flex gap-4 text-white text-lg justify-center 
    ${side === 1 ? "md:justify-end" : "md:justify-start"}`}
        >
          <a
            href="#"
            className="bg-green-600 hover:bg-green-700 p-2 rounded-full"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-green-600 hover:bg-green-700 p-2 rounded-full"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="bg-green-600 hover:bg-green-700 p-2 rounded-full"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
}
