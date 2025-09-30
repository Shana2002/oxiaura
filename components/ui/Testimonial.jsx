"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Comma from '@/assets/images/comma.png'

const testimonials = [
  { id: 1, name: "Alice", text: "A truly remarkable experience! The plantation was breathtaking, and the guided tour offered deep insights into the history and process behind every crop. Highly recommend for nature lovers and curious minds alike!" },
  { id: 2, name: "Bob", text: "This is testimonial 2." },
  { id: 3, name: "Charlie", text: "This is testimonial 3." },
  { id: 4, name: "Diana", text: "This is testimonial 4." },
  { id: 5, name: "Ethan", text: "This is testimonial 5." },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  // Auto scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to current testimonial when current changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.offsetWidth * current,
        behavior: "smooth",
      });
    }
  }, [current]);
  return (
    <>
      <div className="px-[5vw] py-20 text-center h-screen">
        <div className="flex items-center justify-center gap-5">
          <hr className="border-white mb-8 w-1/8 border-2" />
          <h2 className="text-4xl font-semibold mb-10 text-white">
            What Clients Say
          </h2>
          <hr className="border-white mb-8 w-1/8 border-2" />
        </div>
        <div className="mx-auto flex flex-col items-center gap-6 w-full h-[70vh] overflow-hidden rounded-lg shadow p-5">
          <div
            ref={containerRef}
            className="flex overflow-hidden h-[70vh] w-full rounded-lg shadow"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full flex flex-col items-center justify-center p-6 relative "
              >
                <div
                  className="w-full h-full  rounded-3xl bg-[rgba(255,255,255,0.4)]
                            shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                            backdrop-blur-[6.4px]
                            flex items-center justify-center flex-col"
                    >
                  <p className="text-center text-white">
                    {testimonial.text}
                  </p>
                  <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
                </div>
                <Image src={Comma} className="absolute top-0 left-0 text-9xl text-white w-1/12" />
              </div>
            ))}
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-blue-500 scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
