"use client"
import { useState, useEffect, useRef } from "react";

const testimonials = [
  { id: 1, name: "Alice", text: "This is testimonial 1." },
  { id: 2, name: "Bob", text: "This is testimonial 2." },
  { id: 3, name: "Charlie", text: "This is testimonial 3." },
  { id: 4, name: "Diana", text: "This is testimonial 4." },
  { id: 5, name: "Ethan", text: "This is testimonial 5." },
];

export default function TestimonialCarousel() {
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
    <div className="w-full max-w-xl mx-auto p-4">
      {/* Testimonial Frame */}
      <div
        ref={containerRef}
        className="flex overflow-hidden h-[70vh] w-[60vw] rounded-lg shadow"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 w-full flex flex-col items-center justify-center bg-gray-100 p-6"
          >
            <p className="text-center text-gray-700">{testimonial.text}</p>
            <h3 className="mt-4 font-bold text-lg">{testimonial.name}</h3>
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
  );
}
