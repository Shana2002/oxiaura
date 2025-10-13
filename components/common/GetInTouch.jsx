"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Plant from "@/assets/images/bg/plant_img.png";
import { useState } from "react";

export default function GetInTouch({link}) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Motion variants
  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwclfJTtDLVImiAIo42GmdFnOEkNyP5b1o2TJwZTvD17AgYToDZJEDRfXbg9C8vp7U/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      setSuccess(true);
      setFormData({ email: "", name: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-20 px-5 md:px-20 flex flex-col md:flex-row gap-10 text-black" id={link}>
      {/* Left Image + Partnerships */}
      <motion.div
        className="md:w-2/4 flex flex-col gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={leftVariant}
      >
        <div className="bg-green-700 w-full h-[50vh] relative rounded-lg overflow-hidden">
          <Image src={Plant} alt="plant" fill className="object-contain" />
        </div>

        <div className="flex items-center bg-gray-100 rounded-lg p-4">
          <p className="flex-1 bg-transparent outline-none px-2 py-2 text-gray-700"></p>
          <p className="font-semibold">info@oxiaura.com</p>
          <span
            className="ml-4 w-10 h-10 flex items-center justify-center bg-black text-white rounded-full cursor-pointer"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=info@oxiaura.com&su=Hello&body=Hi%20there,",
                "_blank" // opens Gmail in a new tab
              )
            }
          >
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
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          Getting touch
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="name" className="mb-1 font-medium">
                Your name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Enter your message"
              required
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
            disabled={loading}
            className="mt-4 bg-black text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 w-max"
          >
            Send your message
          </button>
          {success && <p className="text-green-600 mt-2">Message sent </p>}
        </form>
      </motion.div>
    </section>
  );
}
