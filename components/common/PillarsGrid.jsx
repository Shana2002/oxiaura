"use client";

import Image from "next/image";
import {companies} from '@/assets/data.js'

export default function PillarsGrid() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 bg-white">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
        <span className="border-green-600 pb-2 text-green-700">
          The Strength of Oxiaura
        </span>
      </h2>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
        {companies.map((company, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group h-[50vh] lg:h-[70vh]"
          >
            {/* Background (fill parent) */}
            <img
              src={company.bg}
              alt={company.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 group-hover:bg-opacity-40 transition duration-300"></div>

            {/* Content */}
            <div className="absolute bottom-0 z-10 flex flex-col md:flex-row items-center w-full justify-center gap-10 p-4 text-center text-white">
              <div className="size-44 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: company.bgcolor }}>
                <img
                  src={company.logo}
                  alt={company.name + " logo"}
                  className="max-w-full max-h-full object-cover rounded-2xl"
                  
                />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold">{company.name}</h3>
                <a
                  href={company.link}
                  rel="noopener noreferrer"
                  className="mt-3 bg-green-700 font-bold hover:bg-green-800 text-white text-sm px-4 py-2 rounded-lg shadow"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
