"use client"
import Link from "next/link";
import { motion } from "framer-motion";

const ProductSection = () => {
  // Container variant for staggering children
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // each child appears 0.2s after previous
      },
    },
  };

  // Item variant
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center px-6 md:px-12 lg:px-16 py-16 md:py-24 min-h-screen"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }} // triggers when 30% visible
    >
      {/* Grid */}
      <div className="grid w-full h-auto lg:h-[80vh] gap-4 md:gap-6 lg:gap-[17px] 
                      grid-cols-1 sm:grid-cols-2 
                      lg:grid-cols-[repeat(11,1fr)] lg:grid-rows-[repeat(3,1fr)]">
        
        <motion.div
          className="bg-white rounded-[20px] h-60 sm:h-72 lg:h-auto 
                     lg:col-span-4 lg:row-span-3 
                     bg-[url('/images/agarwood.png')] bg-no-repeat bg-cover bg-center"
          variants={item}
        />

        <motion.div
          className="bg-white rounded-[20px] h-60 sm:h-72 lg:h-auto 
                     lg:col-span-3 lg:row-span-2 lg:col-start-5 lg:row-start-1
                     bg-[url('/images/vanila.png')] bg-no-repeat bg-cover bg-center"
          variants={item}
        />

        <motion.div
          className="bg-white rounded-[20px] h-60 sm:h-72 lg:h-auto 
                     lg:col-span-3 lg:col-start-5 lg:row-start-3 
                     bg-[url('/images/watermelon.png')] bg-no-repeat bg-cover bg-center"
          variants={item}
        />

        <motion.div
          className="bg-white rounded-[20px] h-60 sm:h-72 lg:h-auto 
                     lg:col-span-4 lg:row-span-3 lg:col-start-8 lg:row-start-1
                     bg-[url('/images/scotchbonnet.png')] bg-no-repeat bg-cover bg-center"
          variants={item}
        />
      </div>

      {/* View More Link */}
      <Link
        href="/products"
        className="px-6 py-2 mt-12 md:mt-16 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        View More
      </Link>
    </motion.div>
  );
};

export default ProductSection;
