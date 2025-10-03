"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MissionBox = ({ title, description, className, image }) => {
  const design = image
    ? "text-xl font-bold mb-6 text-center"
    : "text-2xl font-bold mb-2 text-green-700";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.3 }}
      className={`rounded-2xl p-6 flex flex-col ${className} border border-gray-300 justify-center items-center bg-white`}
    >
      <h1 className={design}>{title}</h1>

      {image && (
        <div className="relative h-64 w-full overflow-hidden rounded-lg my-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      )}

      <motion.p
        className="text-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default MissionBox;
