"use client";

import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import StatusPage from "@/components/common/Status";
import JobCard from "@/components/ui/JobCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CareerPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/careers");
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <StatusPage type="loading" title="Loading Careers..." />;
  if (error) return <StatusPage type="error" title="Failed to load jobs" subtitle={error} />;

  if (!jobs.length)
    return <StatusPage type="error" title="No Jobs Available" subtitle="Please check back later." />;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-[70vh] flex items-center justify-center flex-col "
      >
        <div className="relative mt-[10vh] px-[5vw] w-[90vw] rounded-4xl h-[40vh] overflow-hidden">
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

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto px-4 text-center mt-20"
        >
          <p className="text-2xl italic text-gray-700 font-medium">
            "Be part of a company that blends innovation, sustainability, and
            opportunity."
          </p>
        </motion.div>
      </motion.section>

      {/* Available Opportunities Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto px-4 sm:px-6 lg:px-8 w-[90vw] py-12 mb-20"
      >
        {/* Heading and Count */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Available opportunities
          </h2>
          <span className="text-md font-medium text-gray-500">
            {jobs.length} vacancies available
          </span>
        </motion.div>

        {/* Job Cards Grid with stagger animation */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <JobCard
                title={job.title}
                description={job.description}
                imageUrl={job.imageUrl}
                slug={job.slug}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CareerPage;
