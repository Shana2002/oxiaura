"use client";
import React from "react";
import { motion } from "framer-motion";

const MissionBox = ({ title, description, className, image }) => {
  const design = image
    ? "text-xl font-bold mb-6"
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
        <motion.img
          src={image}
          alt={title}
          className="w-1/2 h-1/2 object-contain mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          
        />
      )}

      <motion.p
        className="text-lg text-center px-6 md:px-20"
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
