"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import HeroImage from "@/assets/images/hero_bg.png";
import HeroImage2 from "@/assets/images/hero_image2.png";
import HeroImage3 from "@/assets/images/bg1.jpg";
import HeroImage4 from "@/assets/images/bg2.jpg";

export default function HeroRightScroller() {
  const images = [HeroImage, HeroImage2,HeroImage3,HeroImage4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0  overflow-hidden lg:-mt-14"
      style={{
        WebkitMaskImage: 'url("/hero-mask-cropped1.svg")',
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        WebkitMaskPosition: "center",
        maskImage: 'url("/hero-mask-cropped1.svg")',
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
        maskPosition: "center",
      }}
    >
      {/* Sliding Images */}
      <motion.div
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex w-[200%] h-full"
      >
        {images.map((img, i) => (
          <div key={i} className="relative w-full h-full flex-shrink-0">
            <Image
              src={img}
              alt={`Hero ${i}`}
              fill
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
