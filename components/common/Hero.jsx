"use client"
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import HeroImage2 from "@/assets/images/hero_image2.png";
import HeroImage from "@/assets/images/hero_image.png";
import HeroRightScroller from "../ui/HeroRightScroller";

export default function Hero() {
  // Motion variants
  const leftVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-green-50 to-white overflow-hidden px-[5vw] py-16 lg:py-5 text-black">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">

        {/* Left: Text Content */}
        <motion.div
          className="col-span-1 lg:col-span-5 flex flex-col gap-4 text-center lg:text-left z-10"
          variants={leftVariant}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl md:text-6xl font-medium text-green-700">Connecting</h2>
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold text-green-700 leading-none">Nature</h1>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-none">
            with <span className="text-green-900">Oxiaura Plantation</span>
          </h3>
          <p className="mt-6 mb-8 text-base md:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
            From eco-conscious sourcing to worldwide delivery, Oxiaura is your
            bridge between nature and innovation.
          </p>

          <Link
            href="#"
            className="relative flex items-center justify-between bg-black hover:bg-green-700 text-white rounded-full px-5 py-3 w-fit mx-auto lg:mx-0 transition duration-300"
          >
            <span className="pr-3">Discover Sustainability</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black">
              <FaArrowRight />
            </span>
          </Link>

          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <a href="#" className="bg-green-700 text-white p-3 rounded-full hover:bg-green-800">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-green-700 text-white p-3 rounded-full hover:bg-green-800">
              <FaInstagram />
            </a>
            <a href="#" className="bg-green-700 text-white p-3 rounded-full hover:bg-green-800">
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        {/* Right: Images */}
        <motion.div
          className="col-span-1 lg:col-span-7 relative w-full h-[400px] md:h-[600px] lg:h-[100vh] flex justify-center lg:justify-end"
          variants={rightVariant}
          initial="hidden"
          animate="visible"
        >

          <div className="lg:hidden w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={HeroImage2}
              alt="Hero Plantation"
              fill
              className="object-center rounded-2xl"
            />
          </div>

          <div className="hidden lg:block relative w-full h-full ">
            
              <HeroRightScroller />
            
            

            <div className="absolute bottom-15 xl:bottom-5 right-[-45] w-[64%] h-auto">
              <Image
                src={HeroImage2}
                alt="Hands Planting"
                width={2000}
                height={1100}
                className="rounded-[30px] object-cover"
              />
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
