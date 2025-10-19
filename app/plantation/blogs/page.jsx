"use client";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import StorySecion from "@/components/ui/StorySecion";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import StatusPage from "@/components/common/Status";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");

        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  if (loading) {
    return (
      <StatusPage title={"loading blogs"} />
    );}
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="overflow-hidden h-[70vh] flex items-center justify-center flex-col"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-[90vw] h-[50vh] rounded-4xl flex items-center"
          style={{
            backgroundImage: `url(${blogs[0].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black opacity-40 rounded-4xl "></div>

          {/* Hero Text */}
          <div className="px-[5vw] z-30 text-white">
            <h1 className="text-3xl md:text-4xl font-bold">
              {blogs[0].title}
            </h1>
            <p className="mt-3 max-w-2xl line-clamp-2">
              {blogs[0].content[0].text}
            </p>

            <Link
              href={`/plantation/blogs/${blogs[0].slug}`}
              className="inline-block mt-10 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
            >
              Read full article
            </Link>
          </div>
        </motion.div>
      </motion.section>

      {/* Story Section with fade-up animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <StorySecion
          title="Top rated stories"
          stories={blogs.slice(1, 4)}
        />
      </motion.div>

      <Footer />
    </div>
  );
}
