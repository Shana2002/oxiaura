"use client";

import React, { useEffect, useState } from "react";
import {
  Search,
  User,
  ChevronDown,
  Check,
  X,
  MessageSquare,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import StorySecion from "@/components/ui/StorySecion";
import { useParams } from "next/navigation";
import StatusPage from "@/components/common/Status";

// const primaryDark = 'rgb(0, 77, 64)'; // A deep, forest/teal green

const MainArticle = ({ data }) => {
  // Determine the user's color for the metadata based on the image's style
  const metadataColor = "text-green-700";
  const metadataStyle = "text-xs text-gray-500 font-medium";

  return (
    <section className="px-[5vw] mx-auto py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Image */}
        <div className="lg:col-span-2 relative rounded-lg overflow-hidden shadow-xl aspect-[16/9] lg:aspect-auto">
          <img
            src={data.image}
            alt="Plantation acquisition landscape"
            className="w-full h-full object-cover"
            onError={(e) =>
              (e.target.src =
                "https://placehold.co/1200x675/16a34a/ffffff?text=Image+Not+Available")
            }
          />
        </div>

        {/* Article Info */}
        <div className="lg:col-span-1 space-y-4 relative">
          {/* Metadata Box */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-500 font-medium">
                Author: <span className="text-green-700">oxiaura</span>
              </span>
              <span className="text-xs text-gray-500 font-medium">
                <span className="text-green-700">2K views</span>
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500 font-medium">
                Uploaded on: <span className="text-green-700">20/09/2025</span>
              </span>
              <span className="hidden text-xs text-gray-500 font-medium">
                Copied by: <span className="text-green-700"></span>
              </span>
            </div>
          </div>

          {/* Title and Summary */}
          <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900">
            {data.title}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed pt-2">
            {data.summary}
          </p>

          {/* Floating Share Icon (Styled like a WhatsApp button) */}
          <button
            className="absolute right-0 top-0 lg:right-[-20px] lg:top-[-20px] p-3 rounded-full shadow-lg transition-transform transform hover:scale-105 bg-['rgb(118, 185, 0)']"
            aria-label="Share via WhatsApp"
          >
            {/* Mock WhatsApp/Share Icon */}
            <MessageSquare size={24} className="text-white" />
          </button>
        </div>
      </div>

      {/* Article Body */}
      <div className="mx-auto mt-12 space-y-6 text-lg text-gray-800 leading-relaxed">
        {data.content?.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return <p key={index}>{block.text}</p>;
            case "image":
              return (
                <div key={index} className="my-6">
                  <img
                    src={block.url}
                    alt={block.caption || "Blog image"}
                    className="w-full rounded-lg"
                  />
                  {block.caption && (
                    <p className="text-sm text-gray-500 mt-1">
                      {block.caption}
                    </p>
                  )}
                </div>
              );
            case "quote":
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-green-500 pl-4 italic text-gray-700"
                >
                  {block.text}
                </blockquote>
              );
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
};

const Feedback = ({ onFeedback }) => (
  <section className="mx-[5vw] py-8 flex items-center justify-start border-t border-gray-200 mt-10">
    <span className="text-lg font-medium text-gray-700 mr-4">
      Is this news helpful?
    </span>
    <div className="flex space-x-3">
      <button
        className="flex items-center justify-center px-6 py-2 rounded-full text-white font-semibold transition-colors shadow-md hover:shadow-lg bg-green-600"
        onClick={() => onFeedback("YES")}
      >
        YES
      </button>
      <button
        className="flex items-center justify-center px-6 py-2 rounded-full text-gray-700 font-semibold border-2 border-gray-300 bg-white hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg"
        onClick={() => onFeedback("NO")}
      >
        NO
      </button>
    </div>
  </section>
);

// --- Main App Component ---
export default function App() {
  const [feedback, setFeedback] = useState(null);
  const { blog_title } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [otherBlogs, setOtherBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!blog_title) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);

        // Fetch the single blog by slug
        const res = await fetch(`/api/blogs/${blog_title}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const blog = await res.json();
        setBlogData(blog);

        // Fetch all blogs to get other blogs
        const resAll = await fetch("/api/blogs");
        if (!resAll.ok) throw new Error("Failed to fetch all blogs");
        const allBlogs = await resAll.json();

        const filtered = allBlogs.filter(
          (item) => item.slug.toLowerCase() !== blog_title.toLowerCase()
        );
        setOtherBlogs(filtered);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blog_title]);

  if (loading) return <StatusPage title={"loading blog"} />;
  if (error)
    return <StatusPage type="error" title={"Error"} subtitle={error} />;
  if (!blogData) return <h1>Blog not found</h1>;

  const handleFeedback = (response) => {
    setFeedback(response);
    console.log("User feedback:", response);
  };
  const stories = [
    {
      image: "/images/Chille.png",
      title: "Red Chilli project",
      desc: "From farm to flavor—our red chillies...",
    },
    {
      image: "/images/plant3.png",
      title: "Red Chilli project",
      desc: "From farm to flavor—our red chillies...",
    },
    {
      image: "/images/plant3.png",
      title: "Red Chilli project",
      desc: "From farm to flavor—our red chillies...",
    },
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      <main>
        {/* Main Article Content */}
        <MainArticle data={blogData} />

        {/* Feedback Section */}
        <Feedback onFeedback={handleFeedback} />

        {/* Related Articles Section (Grey Background) */}
        <StorySecion
          title="More Related articles"
          stories={otherBlogs.slice(0, 3)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mock Feedback Message Box */}
      {feedback && (
        <div
          className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-2xl z-50 transition-transform duration-300"
          style={{ transform: feedback ? "translateY(0)" : "translateY(100%)" }}
        >
          <div className="flex items-center justify-between">
            <p className="font-semibold">{`Thank you for your feedback! You marked the article as '${feedback}'.`}</p>
            <button
              onClick={() => setFeedback(null)}
              className="ml-4 p-1 rounded-full hover:bg-gray-700"
              aria-label="Close feedback message"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
