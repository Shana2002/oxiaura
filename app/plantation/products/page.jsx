"use client";

import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ProductHorizontalCard from "@/components/ui/ProductHorizontalCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/assets/data.js";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative text-center py-16 md:py-24 bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/placeholder-leaves.png')" }}
      >
        <div className="absolute inset-0 bg-white opacity-90"></div>
        <div className="relative z-10 px-4">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-6xl text-gray-700 mb-2"
          >
            From Plantation to You
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-8xl font-bold text-green-700 leading-tight"
          >
            Pure, Authentic, Responsible
          </motion.h1>
        </div>
      </motion.section>

      {/* Product Highlight Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-lg h-170 md:h-170"
          >
            <Image
              src="/images/Chille.png"
              alt="Chilli"
              fill
              className="object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Red Chilli</h3>
              <p className="text-sm">Spicy delight</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-lg h-200 md:h-200"
          >
            <Image
              src="/images/agarwood.png"
              alt="Agarwood"
              fill
              className="object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Agarwood</h3>
              <p className="text-sm">Exotic fragrance</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-3xl overflow-hidden shadow-lg h-170 md:h-170"
          >
            <Image
              src="/images/vanila.png"
              alt="Green Bean"
              fill
              className="object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Green Beans</h3>
              <p className="text-sm">Fresh & Healthy</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <div className="container mx-auto px-4 text-center flex justify-around items-center">
          <div>
            <p className="text-8xl font-bold text-black">95K</p>
            <p className="text-gray-600 mt-2 text-2xl">Investments</p>
          </div>
          <div>
            <p className="text-8xl font-bold text-black">5K</p>
            <p className="text-gray-600 mt-2 text-2xl">Paid profits</p>
          </div>
        </div>
      </motion.section>

      <hr className="my-10 border-2 border-green-500 w-2/3 mx-auto" />

      {/* Featured Products with Details */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        {products.slice(0, 4).map((item, index) => (
          <ProductHorizontalCard
            key={index}
            title={item.title}
            desc={item.desc}
            subtitle={item.subtitle}
            image={item.image}
            link={`/products/${item.slug}`}
            side={index} // alternate layout
          />
        ))}
      </motion.section>

      {/* More Products Grid */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.slice(4, 7).map((product, i) => (
            <Link key={i} href={`/products/${product.slug}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative rounded-lg overflow-hidden shadow-lg h-[70vh]"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white px-2">
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  <p className="text-sm line-clamp-2 ">{product.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
