"use client";

import React from "react";
import Navbar from "@/components/common/Navbar";
import MissionBox from "@/components/ui/MissionBox";
import Footer from "@/components/common/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import plant1 from "@/public/images/plants/plant1.png";
import plant2 from "@/public/images/plants/plant2.png";
import plant3 from "@/public/images/plants/plant3.png";
import teagarden from '@/public/images/teagarden.png'
import PlantationTeam from "@/components/common/PlantationTeam";

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

// const teamMembers = [
//   {
//     name: "Mr. Jagath Premal",
//     title: "Director",
//     bio: "Mr. Jagath Premal has over 30 years of experience in top management roles in Sri Lanka's plantation and insurance sectors and Director of Principal officer Fairwell Insurance Brokers, earning national and international awards.",
//     imageUrl: "/images/Chairman.png",
//   },
//   {
//     name: "Dr. Susantha Kosgolla",
//     title: "Director",
//     bio: "International Nelson mandela pease award 2019 winner . lanka abhimani Honorary title . PHD honor National American business university . Member of Lions club international. Sectary of Young Men Buddhist Association (YMBA – Kurunegala ) . Chairmen of Oxiflame Cosmetics (Pvt) Ltd. Chairmen of OlixCeylon (Pvt) Ltd. Member of Million Dollar Round Table .",
//     imageUrl: "/images/MD.png",
//   },
//   {
//     name: "Mr. Sharman Kulatilake",
//     title: "Cheif Executive Officer",
//     bio: "35 years in Insurance industry experience.  Retired ad GM(Sales) People Insurance PLC.  Dip in MKTG(SLIM) . MBA(UK) , MSLIM ,MCIM",
//     imageUrl: "/images/CEO.png",
//   },
// ];

const services = [
  {
    title: "Premium Plantation Products",
    description:
      "From Agarwood to Vanilla and TJC Mango, we cultivate quality.",
    image: "/images/what_we_1.png",
  },
  {
    title: "Responsible Investment Opportunities",
    description:
      "Grow with us through sustainable agriculture ventures and property investments.",
    image: "/images/what_we_2.png",
  },
  {
    title: "Strong Distribution, Local Care",
    description:
      "We deliver superior products to international markets with transparency and eco-conscious practices.",
    image: "/images/what_we_3.png",
  },
];

export default function App() {
  return (
    <div className="bg-gradient-to-r from-[#f5fff1] to-white text-black overflow-x-hidden">
      <Navbar />
      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-screen flex flex-col w-full items-center justify-center px-4 md:px-0"
      >
        <h2 className="text-3xl md:text-6xl font-bold text-green-900 text-center">
          Nature-Powered Investments
        </h2>
        <h3 className="text-3xl md:text-6xl font-bold mb-10 text-center">
          Guaranteed Return
        </h3>

        <div className="w-full max-w-[1200px] h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-2 gap-3 h-full">
            {/* Plant 1 */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative row-span-1 md:row-span-2 rounded-3xl overflow-hidden"
            >
              <Image src={plant1} alt="Plant 1" fill className="object-cover" />
            </motion.div>

            {/* Plant 2 */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden"
            >
              <Image src={plant2} alt="Plant 2" fill className="object-cover" />
            </motion.div>

            {/* Plant 3 */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden"
            >
              <Image src={plant3} alt="Plant 3" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="w-screen h-48 bg-green-900"></div>

      {/* Vision and Mission Cards */}
      <section className="flex flex-col items-center justify-center gap-10 px-4 md:px-0 py-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto text-3xl md:text-4xl text-center max-w-[800px]"
        >
          To be the world's leading platform for green investments, setting the
          standard for sustainable financial and ecological performance.
        </motion.h1>

        <div className="w-full max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First box: full width on mobile, large on desktop */}
            <MissionBox
              title="Who we Are"
              description=" Oxiaura Group, established in 1996, is a 
diversified conglomerate with operations 
spanning imports, distribution, 
manufacturing and plantation . The 
group’s portfolio includes partnerships 
with major brands like Lanka Wall Tiles, 
Lanka Floor Tiles, Edna, AMW  along with 
ventures in foods, cosmetics and food 
supplements. In addition, it runs 
specializing in the import and sale of 
Japanese vehicles and bath ware, 
accessories. Oxiaura Group is  committed 
to growth, innovation, and sustainability 
across its diverse business sectors."
              className="w-full md:col-span-2"
            />

            {/* Second and third boxes: stacked on mobile, side-by-side on desktop */}
            <MissionBox
              title="Our Vision"
              description=" To be the foremost agricultural company in sri lanka"
              className="w-full"
            />
            <MissionBox
              title="Our Mission"
              description=" To adopt the best agricultural practice and deliver highest return to our valued customers and stake holders."
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* What We Do - Services Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-3xl md:text-4xl font-bold mb-12"
          >
            What We Do
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <MissionBox
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                className="w-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Oxiaura Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 top-0 w-full">
          <Image
            src={teagarden}
            alt="Tea Garden"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-[rgba(12,57,60,0)] -z-0"></div>

        {/* Content */}
        <div className="relative z-10 mx-4 md:mx-[5vw] h-full flex flex-col justify-center text-white text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Why Choose Oxiaura
          </h2>
          <p className="text-base md:text-lg max-w-full md:max-w-3xl font-light mx-auto md:mx-0">
            We combine rigorous financial analysis with deep environmental
            expertise. Our commitment to transparency, coupled with our unique
            portfolio of vetted, high-impact green projects, ensures both your
            financial and ethical returns are secured and maximized.
          </p>
        </div>
      </section>

      {/* Our Experts Section */}
      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center text-3xl md:text-4xl font-bold text-green-900 mb-12"
          >
            Our Experts
          </motion.h2>

          <PlantationTeam />
        </div>
      </section>

      <Footer />
    </div>
  );
}
