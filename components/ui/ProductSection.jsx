"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import Agarwood from '@/public/images/plants/agarwood.png'
import Vanila from '@/public/images/plants/vanila2.jpg'
import Watermelon from '@/public/images/plants/watermelon.png'
import scotchbonnet from '@/public/images/plants/scotchbonnet.png'
import Image from "next/image";

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
      <div
      className="grid w-full h-auto lg:h-[80vh] gap-4 md:gap-6 lg:gap-[17px] 
                 grid-cols-1 sm:grid-cols-2 
                 lg:grid-cols-[repeat(11,1fr)] lg:grid-rows-[repeat(3,1fr)]"
    >
      {/* Agarwood */}
      <motion.div
        className="relative bg-white rounded-[20px] h-60 sm:h-72 lg:h-auto 
                   lg:col-span-4 lg:row-span-3 overflow-hidden"
        variants={item}
      >
        <Image
          src={Agarwood}
          alt="Agarwood"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 to-black/0"></div>
        <p className="absolute bottom-0 px-10 py-12 text-white">
          Precious and aromatic, Agarwood embodies depth and warmth, connecting nature’s rarest essence to timeless craftsmanship.
        </p>
      </motion.div>

      {/* Vanilla */}
      <motion.div
        className="relative bg-white rounded-[20px] h-60 sm:h-72 lg:h-auto 
                   lg:col-span-3 lg:row-span-2 lg:col-start-5 lg:row-start-1 overflow-hidden"
        variants={item}
      >
        <Image
          src={Vanila}
          alt="Vanilla"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 to-black/0"></div>
        <p className="absolute bottom-0 px-10 py-12 text-white">
          Grown with care, our Vanilla brings a soft sweetness and fragrant richness — nature’s touch in every pod.
        </p>
      </motion.div>

      {/* Watermelon */}
      <motion.div
        className="relative bg-white rounded-[20px] h-60 sm:h-72 lg:h-auto 
                   lg:col-span-3 lg:col-start-5 lg:row-start-3 overflow-hidden"
        variants={item}
      >
        <Image
          src={Watermelon}
          alt="Watermelon"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 to-black/0"></div>
        <p className="absolute bottom-0 px-10 py-12 text-white">
          Juicy, refreshing, and vibrant — Watermelon captures the taste of pure summer, cultivated with sustainable care.
        </p>
      </motion.div>

      {/* Scotch Bonnet */}
      <motion.div
        className="relative bg-white rounded-[20px] h-60 sm:h-72 lg:h-auto 
                   lg:col-span-4 lg:row-span-3 lg:col-start-8 lg:row-start-1 overflow-hidden"
        variants={item}
      >
        <Image
          src={scotchbonnet}
          alt="Scotch Bonnet"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 to-black/0"></div>
        <p className="absolute bottom-0 px-10 py-12 text-white">
          Bold and fiery, Scotch Bonnet delivers a burst of heat and tropical flavor, grown from passion and nature’s spice.
        </p>
      </motion.div>
    </div>

      {/* View More Link */}
      <Link
        href="/plantation/products"
        className="px-12 py-2 mt-12 md:mt-16 text-white  border-2 border-white rounded-4xl  transition hover:bg-white hover:text-black"
      >
        View More
      </Link>
    </motion.div>
  );
};

export default ProductSection;
