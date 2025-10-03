"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Leaf from "@/assets/images/leaf.png";

export default function Hero() {
  const leftVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const images = [
    { src: "/images/plantation_image1.jpg", alt: "Red Chilies" },
    { src: "/images/plantation_image2.png", alt: "Natural Wood" },
    { src: "/images/plantation_image3.webp", alt: "Vanilla Pods" },
  ];

  const [index, setIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const getRole = (i) => {
    if (i === index) return "center";
    if (i === (index + 1) % images.length) return "right";
    if (i === (index + 2) % images.length) return "left";
    return "hidden";
  };

  // Predefined 10 leaves around the content area
  const leaves = [
    { top: "5%", left: "10%", size: "large", rotate: 0, duration: 7 },
    { top: "15%", left: "80%", size: "medium", rotate: 20, duration: 8 },
    { top: "25%", left: "20%", size: "small", rotate: -15, duration: 6 },
    { top: "35%", left: "70%", size: "large", rotate: 45, duration: 9 },
    { top: "50%", left: "5%", size: "medium", rotate: -30, duration: 7 },
    { top: "55%", left: "85%", size: "small", rotate: 10, duration: 6 },
    { top: "65%", left: "25%", size: "medium", rotate: 15, duration: 8 },
    { top: "70%", left: "75%", size: "large", rotate: -25, duration: 9 },
    { top: "80%", left: "15%", size: "small", rotate: 30, duration: 7 },
    { top: "85%", left: "65%", size: "medium", rotate: -10, duration: 8 },
  ];

  // Map size to width/height
  const getSize = (size) => {
    switch (size) {
      case "small":
        return { width: 30, height: 30 };
      case "medium":
        return { width: 50, height: 50 };
      case "large":
        return { width: 70, height: 70 };
      default:
        return { width: 40, height: 40 };
    }
  };

  const leafFloat = {
    animate: (custom) => ({
      y: [0, -15 + Math.random() * 10, 0],
      x: [0, 10 - Math.random() * 20, 0],
      rotate: [custom.rotate, custom.rotate + 10, custom.rotate - 10, custom.rotate],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-green-50 to-white overflow-hidden px-[5vw] pt-20 pb-16 text-black">
      {/* Floating Leaves */}
      {leaves.map((leaf, i) => {
        const size = getSize(leaf.size);
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: leaf.top,
              left: leaf.left,
              width: size.width,
              height: size.height,
            }}
            custom={leaf}
            variants={leafFloat}
            animate="animate"
          >
            <Image src={Leaf} alt="Leaf" fill className="object-contain" />
          </motion.div>
        );
      })}

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10">
        {/* Left Content */}
        <motion.div
          className="col-span-1 lg:col-span-5 flex flex-col gap-4 text-center lg:text-left"
          variants={leftVariant}
          initial="hidden"
          animate="visible"
        >
         <h2 className="text-[clamp(2rem,4vw,4rem)] font-medium text-green-700">Connecting</h2>
          <h1 className="text-[clamp(4rem,8vw,10rem)] font-bold text-green-700 leading-none">Nature</h1>
          <h3 className="text-[clamp(1.5rem,3vw,3rem)] font-semibold leading-none">
            with <span className="text-green-900">Oxiaura Plantation</span>
          </h3>
          <p className="mt-6 mb-8 text-base md:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
            From eco-conscious sourcing to worldwide delivery, Oxiaura is your bridge between nature and innovation.
          </p>
          <Link
            href="#"
            className="relative flex items-center justify-between bg-black hover:bg-green-700 text-white rounded-full px-6 py-3 w-fit mx-auto lg:mx-0 transition duration-300"
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

        {/* Right Side – Auto Carousel */}
        <motion.div
          className="col-span-1 lg:col-span-7 flex justify-center items-center relative h-[650px] w-auto"
          variants={rightVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="relative flex justify-center items-center w-auto h-auto">
            {images.map((img, i) => {
              const role = getRole(i);

              const positions = {
                center: { x: 0, scale: 1.1, zIndex: 30, opacity: 1, width: 300, height: 600 },
                left: { x: '-120%', scale: 0.9, zIndex: 20, opacity: 0.8, width: 240, height: 500 },
                right: { x: '120%', scale: 0.9, zIndex: 20, opacity: 0.8, width: 240, height: 500 },
                hidden: { x: 0, scale: 0.5, zIndex: 0, opacity: 0 },
              };

              return (
                <motion.div
                  key={i}
                  className="absolute rounded-[2rem] overflow-hidden shadow-xl"
                  animate={positions[role]}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={positions[role].width}
                    height={positions[role].height}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
