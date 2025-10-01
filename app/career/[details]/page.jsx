"use client"
import React from 'react';
import { Search, User, Mail, Phone, MapPin } from 'lucide-react';

// Mock Data for the Job Posting (directly from the image content)
const jobData = {
  title: 'Business Administrator',
  level: 'Senior',
  description: "At OxiAura Plantation Pvt. Ltd., we combine eco-friendly practices with modern innovation to deliver high-quality agricultural products that shape a greener, better-fed world. This role is crucial to coordinating daily operations, managing project timelines, and ensuring seamless communication across departments. This position is ideal for someone who is highly organized, detail-oriented, and passionate about driving efficiency within a growing, sustainability-focused organization.",
  qualifications: [
    "Bachelor's degree in Business Administration, Management, Finance, or related field (Master's degree is an added advantage).",
    "Strong knowledge of business operations, budgeting, and reporting tools.",
    "Excellent communication and leadership skills.",
    "Strong computer skills, with proficiency in MS Office Suite and business management software."
  ],
  experience: [
    "Minimum of 3 years of experience in business administration, office management, or operations coordination.",
    "Proven track record of managing administrative functions, vendor relations, and business reporting.",
    "Experience in agriculture, FMCG, or manufacturing sectors is an advantage but not mandatory."
  ],
  offers: [
    "Competitive salary package with performance-based bonuses.",
    "Opportunities for career growth and professional development.",
    "A supportive, team-oriented and collaborative environment.",
    "Exposure to international markets and innovative plantation projects.",
    "Employee welfare benefits, including healthcare coverage and training programs."
  ],
  salary: "LKR 90,000 - 120,000 per month (based on qualifications and experience)."
};

// --- Sub-Components ---

// Replicating the distinct header/navigation bar
const Header = () => (
  <header className="bg-white border-b shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
      {/* Logo/Brand */}
      <div className="text-3xl font-bold text-green-800 tracking-wider">
        <span className="text-4xl">O</span>XIAURA
      </div>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden lg:flex space-x-8 text-gray-700 font-medium">
        {['Home', 'About Us', 'Products', 'Investment Plans', 'Blog', 'Contact'].map(item => (
          <a key={item} href="#" className="hover:text-green-700 transition duration-150">
            {item}
          </a>
        ))}
      </nav>

      {/* Search & Profile Icons */}
      <div className="flex items-center space-x-4">
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full py-1 pl-4 pr-10 text-sm focus:ring-green-500 focus:border-green-500"
          />
          <Search className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <button className="p-2 rounded-full bg-green-800 text-white">
          <User className="h-5 w-5" />
        </button>
      </div>
    </div>
  </header>
);

// Replicating the dark green footer
const Footer = () => (
  <footer className="bg-green-800 text-white mt-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b pb-8 border-green-700">
        {/* Logo and Contact Info */}
        <div className="col-span-2 md:col-span-2">
          <div className="text-3xl font-bold tracking-wider mb-4">
            <span className="text-4xl text-green-400">O</span>XIAURA
          </div>
          <p className="text-sm mb-4">OxiAura Plantation (pvt) Ltd</p>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>No. 99, 1st Floor, Main Road, Colombo, Sri Lanka 10300.</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
              <span>info@oxiaura.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
              <span>+94 11 234 5678</span>
            </div>
          </div>
          <div className="flex space-x-3 mt-4">
            {/* Mock Social Icons */}
            <div className="w-8 h-8 rounded-full bg-white text-green-800 flex items-center justify-center text-lg font-bold">f</div>
            <div className="w-8 h-8 rounded-full bg-white text-green-800 flex items-center justify-center text-lg font-bold">t</div>
            <div className="w-8 h-8 rounded-full bg-white text-green-800 flex items-center justify-center text-lg font-bold">in</div>
          </div>
        </div>

        {/* Navigation Columns */}
        {['Welcome', 'Products', 'Company', 'About'].map((section, index) => (
          <div key={section} className="text-sm">
            <h4 className="font-semibold text-green-300 mb-4">{section}</h4>
            <ul className="space-y-2 text-gray-300">
              {[`Item 0${index + 1}`, `Item 0${index + 2}`, `Item 0${index + 3}`, `Item 0${index + 4}`].map(link => (
                <li key={link}><a href="#" className="hover:text-white">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center pt-6 text-sm text-gray-400">
        Copyright © 2023 OxiAura. All rights reserved.
      </div>
    </div>
  </footer>
);

// --- Main Component ---

const CareerDetailsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        /* Custom styles to match the image's hero background and overlay */
        .hero-banner {
          background-image: url('https://placehold.co/1200x350/223d24/ffffff?text=Professional+Office+Setting');
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .hero-overlay {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.45); /* Darker overlay */
          border-radius: 0.5rem;
        }
      `}</style>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Career Hero Banner */}
        <div className="hero-banner h-96 rounded-lg mb-10 overflow-hidden flex items-end">
          <div className="hero-overlay rounded-lg"></div>
          <div className="relative z-10 p-8 text-white">
            <h1 className="text-5xl font-bold mb-1">
              {jobData.title}
            </h1>
            <p className="text-2xl font-light">
              {jobData.level}
            </p>
          </div>
        </div>

        {/* Job Content Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Job Description</h2>
            <p className="text-gray-600 leading-relaxed">
              {jobData.description}
            </p>
          </section>

          {/* Separator Line */}
          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Education & Qualifications</h2>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              {jobData.qualifications.map((q, index) => (
                <li key={index}>{q}</li>
              ))}
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Work Experience</h2>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              {jobData.experience.map((e, index) => (
                <li key={index}>{e}</li>
              ))}
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">What OxiAura Offers</h2>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              {jobData.offers.map((o, index) => (
                <li key={index}>{o}</li>
              ))}
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Salary</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {jobData.salary}
            </p>
            <button
              onClick={() => console.log('Apply Now clicked!')}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              Apply now
            </button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareerDetailsPage;
