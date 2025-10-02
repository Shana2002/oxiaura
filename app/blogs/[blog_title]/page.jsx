"use client"

import React, { useState } from 'react';
import { Search, User, ChevronDown, Check, X, MessageSquare, ExternalLink } from 'lucide-react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import StorySecion from '@/components/ui/StorySecion';
import {plantationBlogs} from '@/assets/data.js'
import { useParams } from 'next/navigation';



// const primaryDark = 'rgb(0, 77, 64)'; // A deep, forest/teal green


const MainArticle = ({ data }) => {
    // Determine the user's color for the metadata based on the image's style
    const metadataColor = 'text-green-700';
    const metadataStyle = 'text-xs text-gray-500 font-medium';
    
    return (
        <section className="px-[5vw] mx-auto py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Featured Image */}
                <div className="lg:col-span-2 relative rounded-lg overflow-hidden shadow-xl aspect-[16/9] lg:aspect-auto">
                    <img
                        src="/images/blog_header.png"
                        alt="Plantation acquisition landscape"
                        className="w-full h-full object-cover"
                        onError={(e) => e.target.src = "https://placehold.co/1200x675/16a34a/ffffff?text=Image+Not+Available"}
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
                            <span  className="hidden text-xs text-gray-500 font-medium">
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
                {data.description}
                {/* {data.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))} */}
            </div>

        </section>
    );
};

const Feedback = ({ onFeedback }) => (
    <section className="mx-[5vw] py-8 flex items-center justify-start border-t border-gray-200 mt-10">
        <span className="text-lg font-medium text-gray-700 mr-4">Is this news helpful?</span>
        <div className="flex space-x-3">
            <button
                className="flex items-center justify-center px-6 py-2 rounded-full text-white font-semibold transition-colors shadow-md hover:shadow-lg bg-green-600"
                onClick={() => onFeedback('YES')}
            >
                YES
            </button>
            <button
                className="flex items-center justify-center px-6 py-2 rounded-full text-gray-700 font-semibold border-2 border-gray-300 bg-white hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg"
                onClick={() => onFeedback('NO')}
            >
                NO
            </button>
        </div>
    </section>
);





// --- Main App Component ---
export default function App() {
  const [feedback, setFeedback] = useState(null);
  const {blog_title} = useParams();
  const blogData = plantationBlogs.find(
    (item) => item.slug.toLowerCase().replace(/\s+/g, "-") === blog_title.toLowerCase()
  ) 

  if(!blogData) return (
    <h1>Sorry</h1>
  ) 
  const otherBlogs = plantationBlogs.filter((item)=>{
    const itemslug = item.slug.toLowerCase().replace(/\s+/g, "-");
    return itemslug !== blog_title.toLowerCase();
  })

  const handleFeedback = (response) => {
    setFeedback(response);
    console.log('User feedback:', response);
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
        <StorySecion title="More Related articles" stories={otherBlogs.slice(0,3)} />
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Mock Feedback Message Box */}
      {feedback && (
        <div 
            className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-2xl z-50 transition-transform duration-300"
            style={{ transform: feedback ? 'translateY(0)' : 'translateY(100%)' }}
        >
          <div className='flex items-center justify-between'>
            <p className='font-semibold'>{`Thank you for your feedback! You marked the article as '${feedback}'.`}</p>
            <button 
                onClick={() => setFeedback(null)} 
                className='ml-4 p-1 rounded-full hover:bg-gray-700'
                aria-label='Close feedback message'
            >
                <X size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
