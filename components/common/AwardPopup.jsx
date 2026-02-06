"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AwardPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Auto show popup when page loads
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Popup Box */}
          <motion.div
            className="relative max-w-lg w-full rounded-2xl bg-white p-6 shadow-xl"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Award Image */}
            <div className="flex justify-center">
              <Image
                src="/images/award.jpg"
                alt="Award"
                width={120}
                height={120}
                className="mb-4"
              />
            </div>

            {/* Congrats Text */}
            <h2 className="text-2xl font-bold text-center text-green-600">
              🎉 Congratulations!
            </h2>

            <p className="mt-2 text-center text-gray-600">
              We are proud to announce that we have won an award for excellence!
              Thank you for your support 💛
            </p>

            {/* Button */}
            <div className="mt-5 flex justify-center">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-green-600 px-6 py-2 text-white font-semibold hover:bg-green-700 transition"
              >
                Awesome!
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
