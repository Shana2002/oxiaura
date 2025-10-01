"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Plant from "@/assets/images/plant_img.png";

export default function GetInTouch() {
  // Motion variants
  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="bg-white py-20 px-5 md:px-20 flex flex-col md:flex-row gap-10">
      {/* Left Image + Partnerships */}
      <motion.div
        className="md:w-2/4 flex flex-col gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={leftVariant}
      >
        <div className="bg-green-700 w-full h-[50vh] relative rounded-lg overflow-hidden">
          <Image
            src={Plant}
            alt="plant"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex items-center bg-gray-100 rounded-lg p-4">
          <p className="flex-1 bg-transparent outline-none px-2 py-2 text-gray-700">
            For partnerships and investments
          </p>
          <p className="font-semibold">email@oxiaura.com</p>
          <span className="ml-4 w-10 h-10 flex items-center justify-center bg-black text-white rounded-full cursor-pointer">
            &rarr;
          </span>
        </div>
      </motion.div>

      {/* Right Form */}
      <motion.div
        className="md:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={rightVariant}
      >
        <h1 className="text-3xl font-bold text-green-700 mb-6">Getting touch</h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="name" className="mb-1 font-medium">Your name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 font-medium">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows={6}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" id="terms" className="w-4 h-4" />
            <label htmlFor="terms" className="text-gray-500 text-sm">
              I agree with terms of use and privacy policy
            </label>
          </div>

          <button
            type="submit"
            className="mt-4 bg-black text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 w-max"
          >
            Send your message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
