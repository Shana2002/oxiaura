"use client";

import React from "react";
import {
  Twitter,
  Linkedin,
  Facebook,
  Leaf,
  TrendingUp,
  Cpu,
} from "lucide-react";
import Navbar from "@/components/common/Navbar";
import MissionBox from "@/components/ui/MissionBox";
import Footer from "@/components/common/Footer";

// Custom component for the Expert Card
const ExpertCard = ({ name, title, bio, imageUrl }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 h-[70vh] flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-green-100">
    {/* Profile Image Placeholder */}
    <div className="w-28 h-28 rounded-full bg-green-200 mb-4 overflow-hidden border-4 border-white shadow-md">
      {/* Using a placeholder for the expert image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/112x112/A5D6A7/004D40?text=Expert";
        }}
      />
    </div>

    <h3 className="text-xl font-bold text-green-800">{name}</h3>
    <p className="text-sm font-semibold text-green-600 mb-3">{title}</p>

    <p className="text-gray-600 text-sm mb-4 line-clamp-4">{bio}</p>

    {/* Social Links */}
    <div className="flex space-x-3 text-green-700">
      <a
        href="#"
        aria-label={`Follow ${name} on Facebook`}
        className="hover:text-green-500 transition"
      >
        <Facebook size={18} />
      </a>
      <a
        href="#"
        aria-label={`Follow ${name} on Twitter`}
        className="hover:text-green-500 transition"
      >
        <Twitter size={18} />
      </a>
      <a
        href="#"
        aria-label={`Follow ${name} on LinkedIn`}
        className="hover:text-green-500 transition"
      >
        <Linkedin size={18} />
      </a>
    </div>
  </div>
);

// Custom component for the Service/Product Card
const ServiceCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start transition-all duration-300 hover:shadow-2xl hover:bg-green-50">
    <div className="p-3 mb-4 rounded-full bg-green-100 text-green-700">
      <Icon size={28} />
    </div>
    <h3 className="text-lg font-bold text-green-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const teamMembers = [
  {
    name: "John Doe",
    title: "Chief Investment Officer",
    bio: "John leads our strategic planning and ensures all investments meet strict ecological and return standards.",
    imageUrl: "https://placehold.co/112x112/A5D6A7/004D40?text=JD",
  },
  {
    name: "Jane Smith",
    title: "Head of Sustainability",
    bio: "Jane is responsible for vetting all partner projects to guarantee genuine environmental impact and compliance.",
    imageUrl: "https://placehold.co/112x112/B9F6CA/004D40?text=JS",
  },
  {
    name: "Alex Lee",
    title: "Lead R&D Scientist",
    bio: "Alex manages our research into innovative eco-friendly technologies that drive our future investment opportunities.",
    imageUrl: "https://placehold.co/112x112/81C784/004D40?text=AL",
  },
];

const services = [
  {
    title: "Sustainable Agriculture",
    description:
      "Investments in vertical farming, organic production, and water conservation technologies.",
    icon: Leaf,
  },
  {
    title: "Renewable Energy",
    description:
      "Funding solar, wind, and geothermal projects with high growth potential and low carbon footprint.",
    icon: TrendingUp,
  },
  {
    title: "AI & Eco-Tech",
    description:
      "Developing intelligent systems for environmental monitoring and resource management.",
    icon: Cpu,
  },
];

export default function App() {
  return (
    <div className="bg-gradient-to-r from-[#CDFFB7] to-white">
      <Navbar />
      {/* Mission Section */}
      <div className="h-screen flex flex-col w-[100vw] items-center justify-center">
        <h2 className="text-3xl md:text-6xl font-bold text-green-900">
          Nature-Powered Investments
        </h2>
        <h3 className="text-3xl md:text-6xl font-bold mb-10">
          guaranteed return
        </h3>
        <div className="w-[70vw] h-[60vh]">
          <div className="grid grid-cols-4 grid-rows-2 gap-1.5 w-full h-full">
            <div className="col-span-2 row-span-2 bg-[url('/images/plant1.png')] bg-no-repeat bg-cover bg-center flex items-center justify-center rounded-3xl text-white"></div>
            <div className="col-span-2 col-start-3 bg-[url('/images/plant2.png')] bg-no-repeat bg-cover bg-center flex items-center justify-center rounded-3xl text-white"></div>
            <div className="col-span-2 col-start-3 row-start-2 bg-[url('/images/plant3.png')] bg-no-repeat bg-cover bg-center flex items-center justify-center rounded-3xl text-white"></div>
          </div>
        </div>
      </div>
      <div className="w-screen h-48 bg-green-900"></div>

      {/* Vision and Mission Cards */}
      <section className="h-screen flex flex-col items-center justify-center gap-10">
        <h1 className="mx-auto text-4xl text-center px-[20vw]">
          To be the world's leading platform for green investments, setting the
          standard for sustainable financial and ecological performance.
        </h1>
        <div className="h-[60vh] w-[90vw]">
          <div className="h-full w-full grid grid-cols-2 grid-rows-5 gap-2">
            {/* div1 spans 2 columns and 3 rows */}
            <MissionBox
              title="Who we Are"
              description="Oxiaura Group, established in 1999, is a diversified conglomerate with operations spanning distribution, manufacturing, plantations, and vehicle sales. The group’s portfolio includes partnerships with major brands like AMW and Lanka Wall Tile,Lanka Flow Tile ,Ruhuna Foods , Edna , along with ventures in furniture and manufacturing food , cosmetics and food supplement. In addition, it runs Amunukuttiya Plantation and Thisari Traders, specializing in the import and sale of Japanese vehicles. Oxiaura Group is committed to growth, innovation, and sustainability across its diverse business sectors."
              className="col-span-2 row-span-3"
            />
            <MissionBox
              title="Our Mission"
              description="We aim to create a sustainable future."
              className="row-span-2 row-start-4"
            />
            <MissionBox
              title="Our Mission"
              description="We aim to create a sustainable future."
              className="row-span-2 row-start-4"
            />
          </div>
        </div>
      </section>

      {/* What We Do - Services Section */}
      <section className="py-20">
        <div className="mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12">
            What We Do
          </h2>
          <div className="px-[5vw] grid md:grid-cols-3 gap-8 mx-auto">
            {services.map((service, index) => (
              <MissionBox key={index} title={service.title} description={service.description} image={"/images/plant1.png"} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Oxiaura Section */}
      <section className="relative h-[60vh] bg-green-900 overflow-hidden bg-[url('/images/teagarden.png')] bg-no-repeat bg-cover bg-center ">
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black to-[rgba(12,57,60,0)]"></div>
        <div className="relative z-10 container mx-[5vw] h-full flex flex-col justify-center text-white text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-4">Why Choose Oxiaura</h2>
          <p className="text-lg max-w-3xl font-light">
            We combine rigorous financial analysis with deep environmental
            expertise. Our commitment to transparency, coupled with our unique
            portfolio of vetted, high-impact green projects, ensures both your
            financial and ethical returns are maximized.
          </p>
        </div>
      </section>

      {/* Our Experts Section */}
      <section className="py-20 bg-white h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-green-900 mb-12">
            Our Experts
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto h-full ">
            {teamMembers.map((member, index) => (
              <ExpertCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
