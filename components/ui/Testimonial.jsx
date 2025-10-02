"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Comma from "@/assets/images/comma.png";
import { testimonials } from "@/assets/data.js";

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  // Auto scroll every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to current testimonial
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.offsetWidth * current,
        behavior: "smooth",
      });
    }
  }, [current]);

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Handle drag end
  const handleDragEnd = (event, info) => {
    const containerWidth = containerRef.current.offsetWidth;
    if (info.offset.x < -50 && current < testimonials.length - 1) {
      setCurrent(current + 1);
    } else if (info.offset.x > 50 && current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <section className="px-6 lg:px-[5vw] py-16 lg:py-32 ">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
        className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-16"
      >
        <hr className="border-white w-16 lg:w-32 border-2" />
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-center">
          What Clients Say
        </h2>
        <hr className="border-white w-16 lg:w-32 border-2" />
      </motion.div>

      {/* Carousel */}
      <div className="relative w-full flex justify-center h-full overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex overflow-x-hidden overflow-y-hidden h-full scroll-smooth snap-x snap-mandatory w-full lg:w-[80%] no-scrollbar cursor-grab"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-full over snap-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={cardVariant}
            >
              <div className="relative bg-white/20 backdrop-blur-md rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col items-center text-center gap-6">
                <Image
                  alt="quote"
                  src={Comma}
                  className="absolute top-4 left-4 w-10 lg:w-16 opacity-30"
                />
                <p className="text-white text-base lg:text-lg leading-relaxed px-4 lg:px-16">
                  {testimonial.comment}
                </p>
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white/50">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg lg:text-xl">
                    {testimonial.name}
                  </h3>
                  <p className="text-white/80 text-sm lg:text-base">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center mt-8 gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-green-500 scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
