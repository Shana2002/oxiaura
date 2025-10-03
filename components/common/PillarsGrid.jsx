"use client";

import Image from "next/image";

const companies = [
  {
    name: "Oxiaura Plantation",
    logo: "/logos/plantation.png",
    bg: "/bg/plantation.jpg",
    link: "#",
  },
  {
    name: "Olix Nano Tech",
    logo: "/logos/olix.png",
    bg: "/bg/nano.jpg",
    link: "#",
  },
  {
    name: "Oxiaura Cosmetics",
    logo: "/logos/cosmetics.png",
    bg: "/bg/cosmetics.jpg",
    link: "#",
  },
  {
    name: "Excel Lanka",
    logo: "/logos/excel.png",
    bg: "/bg/excel.jpg",
    link: "#",
  },
  {
    name: "JK Holdings",
    logo: "/logos/holdings.png",
    bg: "/bg/holdings.jpg",
    link: "#",
  },
  {
    name: "JK Logistics",
    logo: "/logos/logistics.png",
    bg: "/bg/logistics.jpg",
    link: "#",
  },
  {
    name: "Oxiaura Healthcare",
    logo: "/logos/healthcare.png",
    bg: "/bg/healthcare.jpg",
    link: "#",
  },
  {
    name: "Oxiaura Realestate",
    logo: "/logos/realestate.png",
    bg: "/bg/realestate.jpg",
    link: "#",
  },
];

export default function PillarsGrid() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 bg-white">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
        <span className="border-green-600 pb-2 text-green-700">
          The Pillars of Oxiaura
        </span>
      </h2>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {companies.map((company, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            {/* Background */}
            <Image
              src={company.bg}
              alt={company.name}
              width={500}
              height={700}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center text-white">
              <Image
                src={company.logo}
                alt={company.name + " logo"}
                width={50}
                height={50}
                className="mb-3"
              />
              <h3 className="text-lg font-semibold">{company.name}</h3>
              <a
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 bg-green-700 hover:bg-green-800 text-white text-sm px-4 py-2 rounded-lg shadow"
              >
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
