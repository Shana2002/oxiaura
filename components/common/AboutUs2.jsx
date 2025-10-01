"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // ✅ import motion
import Plant from "@/assets/images/plant_img.png";
import ProductSection from "../ui/ProductSection";
import Testimonial from "../ui/Testimonial";

export default function AboutUs2() {
  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen bg-[#0D893F] bg-[url('/images/aboutus2_bg.png')] bg-no-repeat bg-cover bg-center text-white pt-12">
      
      {/* Dark overlay */}
      <div className="absolute top-0 w-full h-full bg-black/40"></div>
      
      {/* Top Gradient */}
      <div className="absolute w-full h-100 -top-12 bg-gradient-to-b from-transparent via-[rgba(12,57,60,0.82)] to-transparent]"></div>
      
      {/* Mid Gradient */}
      <div className="absolute w-full h-100 top-1/2 -translate-y-1/2 bg-gradient-to-t from-transparent via-[rgba(12,57,60,0.82)] to-transparent"></div>

      {/* Content container */}
      <div className="relative z-30">
        
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen py-16 px-6 lg:px-16 gap-10 md:gap-12 lg:gap-16">
          
          {/* Text Container */}
          <motion.div
            className="w-full md:w-1/3 flex flex-col gap-2 order-2 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={textVariant}
          >
            <h3 className="text-xl sm:text-5xl font-semibold text-white">
              Green Roots
            </h3>
            <h1 className="text-4xl sm:text-3xl lg:text-7xl font-bold leading-tight">
              Strong Futures
            </h1>
            
            <p className="text-gray-200 text-base md:text-lg max-w-xl mt-7">
              Oxiaura Plantation Pvt. Ltd. is more than just a plantation
              company—we are a forward-thinking enterprise that blends
              innovation with sustainable, eco-friendly practices at every stage
              of our operations. By embracing modern agricultural techniques,
              renewable energy, and responsible resource management, we ensure
              that our products not only meet but exceed the highest standards
              of quality and environmental stewardship.

              <br className="mb-4" />
              Our commitment goes beyond production; it is about creating a
              positive impact on communities, ecosystems, and future
              generations. From cultivating with care to adopting green
              technologies, we strive to preserve biodiversity, reduce our
              carbon footprint, and foster a culture of responsibility across
              the industry.

              <br className="mb-4" />
              At Oxiaura, we believe sustainability is not an option—it’s the
              foundation of long-term success. With every product we deliver, we
              aim to inspire trust, promote well-being, and shape a greener,
              more resilient future for the world.
            </p>
          </motion.div>

          {/* Image Container */}
          <motion.div
            className="w-full md:w-2/3 relative order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={imageVariant}
          >
            <Image
              src={Plant}
              alt="plant_img"
              sizes="(max-width: 500px) 75vw, 66vw"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>

        {/* Product Section & Testimonial */}
        <ProductSection />
        <Testimonial />
      </div>
    </section>
  );
}
