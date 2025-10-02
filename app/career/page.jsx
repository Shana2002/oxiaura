"use client";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { jobs } from "@/assets/data.js";
import JobCard from "@/components/ui/JobCard";
import { motion } from "framer-motion";

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full h-[70vh] flex items-center justify-center flex-col"
      >
        <div className="relative px-[5vw] w-[90vw] rounded-4xl h-[40vh] overflow-hidden">
          {/* Background Image */}
          <img
            src="/images/career_image_1.png"
            alt="Diverse team of professionals smiling"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gray-900/60" />

          {/* Hero Text */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-3">
              Planting Careers
            </h1>
            <p className="text-xl sm:text-3xl font-light tracking-wide">
              Cultivating Success
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mx-auto px-4 text-center mt-20"
        >
          <p className="text-2xl italic text-gray-700 font-medium">
            "Be part of a company that blends innovation, sustainability, and
            opportunity."
          </p>
        </motion.div>
      </motion.section>

      {/* 4. Available Opportunities Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mx-auto px-4 sm:px-6 lg:px-8 w-[90vw] py-12 mb-20"
      >
        {/* Heading and Count */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Available opportunities
          </h2>
          <span className="text-md font-medium text-gray-500">
            {jobs.length} vacancies available
          </span>
        </motion.div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <JobCard
                title={job.title}
                description={job.description}
                imageUrl={job.imageUrl}
                slug={job.slug}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default CareerPage;
