"use client";
import { useState, useEffect } from "react";

const testimonials = [
  { id: 1, name: "Alice", text: "Oxiaura has transformed my business with its eco-friendly products." },
  { id: 2, name: "Bob", text: "High-quality service and reliable delivery every time!" },
  { id: 3, name: "Charlie", text: "Sustainable sourcing with a touch of nature. Highly recommended." },
  { id: 4, name: "Diana", text: "Amazing experience! I love the attention to detail and care." },
  { id: 5, name: "Ethan", text: "Their products are a perfect blend of innovation and nature." },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-green-700 mb-8">
        What Our Clients Say
      </h2>

      <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-6 items-center">
        {testimonials.map((testimonial, index) => {
          const isActive = index === current;
          return (
            <div
              key={testimonial.id}
              className={`transition-all duration-500 ease-in-out flex-shrink-0
                ${isActive ? "scale-105 shadow-2xl opacity-100" : "scale-95 opacity-70"}
                w-full sm:w-[45%] md:w-[30%] lg:w-[25%] mb-6 sm:mb-0`}
            >
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl h-full flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <p className="text-gray-700 text-center sm:text-left text-lg">{testimonial.text}</p>
                <h3 className="mt-4 font-bold text-green-900 text-center sm:text-left text-xl">{testimonial.name}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300
              ${index === current ? "bg-green-700 scale-125" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
