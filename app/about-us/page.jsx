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
import ExpertCard from "@/components/ui/ExpertCard";

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
    name: "Mr. Jagath Premal",
    title: "Director",
    bio: "Mr. Jagath Premal has over 30 years of experience in top management roles in Sri Lanka's plantation and insurance sectors and Director of Principal officer Fairwell Insurance Brokers, earning national and international awards.",
    imageUrl: "https://oxiaura.com/wp-content/uploads/2025/01/222.jpg",
  },
  {
    name: "Dr. Susantha Kosgolla",
    title: "Director",
    bio: "International Nelson mandela pease award 2019 winner . lanka abhimani Honorary title . PHD honor National American business university . Member of Lions club international. Sectary of Young Men Buddhist Association (YMBA – Kurunegala ) . Chairmen of Oxiflame Cosmetics (Pvt) Ltd. Chairmen of OlixCeylon (Pvt) Ltd. Member of Million Dollar Round Table .",
    imageUrl: "https://oxiaura.com/wp-content/uploads/2025/01/9.jpg",
  },
  {
    name: "Sharman Kulathilaka",
    title: "Lead R&D Scientist",
    bio: "35 years in Insurance industry experience.  Retired ad GM(Sales) People Insurance PLC.  Dip in MKTG(SLIM) . MBA(UK) , MSLIM ,MCIM",
    imageUrl: "https://oxiaura.com/wp-content/uploads/2025/09/Untitled-1.png",
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
    <div className="bg-gradient-to-r from-[#CDFFB7] to-white text-black">
      <Navbar />
      {/* Mission Section */}
      <div className="h-screen flex flex-col w-[100vw] items-center justify-center">
        <h2 className="text-3xl md:text-6xl font-bold text-green-900">
          Nature-Powered Investments
        </h2>
        <h3 className="text-3xl md:text-6xl font-bold mb-10 text-black">
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
          <h2 className="text-center text-6xl font-bold text-green-900 mb-12">
            Our Experts
          </h2>
          <div className="grid md:grid-cols-3 gap-10 mx-auto h-full ">
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
