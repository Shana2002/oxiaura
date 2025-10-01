"use client"
import React from 'react';

// Reusable Job Card Component
const JobCard = ({ title, description, imageUrl }) => (
  <div className="relative w-full overflow-hidden rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
    {/* Background Image */}
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-80 object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://placehold.co/400x320/0f172a/ffffff?text=Image+Placeholder';
      }}
    />

    {/* Dark Overlay for Text Readability */}
    <div className="absolute inset-0 bg-gray-900/40" />

    {/* External Link Icon (Green Square with Arrow) */}
    <a href="#" className="absolute top-4 right-4 p-2 bg-green-500 rounded-lg shadow-xl hover:bg-green-400 transition-colors" aria-label={`Apply for ${title}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>

    {/* Text Content at the Bottom */}
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-gray-900/80 to-transparent">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-90 leading-relaxed">{description}</p>
    </div>
  </div>
);

// Main Application Component
const CareerPage = () => {
  const jobs = [
    {
      title: "Business Admin (Senior)",
      description: "From farm-to-fork our choices are responsible. This is about quality food and quality to every bite.",
      imageUrl: "https://placehold.co/400x320/0284c7/ffffff?text=Admin+Role"
    },
    {
      title: "IT Engineer (Software)",
      description: "From farm-to-fork our choices are responsible. This is about quality food and quality to every bite.",
      imageUrl: "https://placehold.co/400x320/0284c7/ffffff?text=IT+Role"
    },
    {
      title: "Sales Representative (Intern)",
      description: "From farm-to-fork our choices are responsible. This is about quality food and quality to every bite.",
      imageUrl: "https://placehold.co/400x320/0284c7/ffffff?text=Sales+Role"
    },
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter',_sans-serif]">
      {/* 1. Navigation Bar */}
      <nav className="sticky top-0 z-10 w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-emerald-600" fill="currentColor">
              <path d="M12 2L2 22h20L12 2zm0 13l4-8H8l4 8z" />
            </svg>
            <span className="text-xl font-extrabold text-gray-800">EXIAURA</span>
          </div>

          {/* Nav Links (Hidden on small screens for simplicity) */}
          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
            {['Home', 'About us', 'Products', 'Investment plans', 'Blog', 'Contact'].map((item) => (
              <a key={item} href="#" className="hover:text-emerald-600 transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Search and Profile */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-32 border border-gray-300 rounded-full px-4 py-1 text-sm focus:ring-emerald-500 focus:border-emerald-500 transition-all hidden sm:block"
              />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <svg className="h-7 w-7 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <img
          src="https://placehold.co/1200x500/10b981/ffffff?text=Diverse+Team"
          alt="Diverse team of professionals smiling"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/1200x500/10b981/ffffff?text=Team+Image';
          }}
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
      </header>

      {/* 3. Quote Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg italic text-gray-700 font-medium">
            "Be part of a company that blends innovation, sustainability, and opportunity."
          </p>
        </div>
      </section>

      {/* 4. Available Opportunities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Heading and Count */}
        <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Available opportunities
          </h2>
          <span className="text-md font-medium text-gray-500">
            {jobs.length} vacancies available
          </span>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              description={job.description}
              imageUrl={job.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
