"use client"
import React from 'react';
import { Search, User, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

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


const CareerDetailsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="mx-auto py-8 px-[5vw]">
        {/* Career Hero Banner */}
        <div className=" h-[50vh] mt-[15vh] relative rounded-lg mb-10 overflow-hidden flex items-end bg-[url('/images/bussiness_administrator.png')] bg-center">
          <div className="bg-black absolute top-0 left-0 w-full h-full opacity-65 rounded-lg"></div>
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
        <div className="p-8">
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-black mb-4">Job Description</h2>
            <p className="text-black leading-relaxed">
              {jobData.description}
            </p>
          </section>

          {/* Separator Line */}
          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-black mb-4">Education & Qualifications</h2>
            <ul className="list-disc ml-6 text-black space-y-2">
              {jobData.qualifications.map((q, index) => (
                <li key={index}>{q}</li>
              ))}
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-black mb-4">Work Experience</h2>
            <ul className="list-disc ml-6 text-black space-y-2">
              {jobData.experience.map((e, index) => (
                <li key={index}>{e}</li>
              ))}
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-black mb-4">What OxiAura Offers</h2>
            <ul className="list-disc ml-6 text-black space-y-2">
              {jobData.offers.map((o, index) => (
                <li key={index}>{o}</li>
              ))}
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-black mb-4">Salary</h2>
            <p className="text-black leading-relaxed mb-4">
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
