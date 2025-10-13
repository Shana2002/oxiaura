"use client";
import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { useParams } from "next/navigation";
import { jobs } from "@/assets/data.js";

const CareerDetailsPage = () => {
  const { details } = useParams();
  const jobData = jobs.find(
    (item) =>
      item.slug.toLowerCase().replace(/\s+/g, "-") === details.toLowerCase()
  );
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <main className="mx-auto py-8 px-[5vw]">
        {/* Career Hero Banner */}
        <div className=" h-[50vh] mt-[15vh] relative rounded-lg mb-10 overflow-hidden flex items-end bg-[url('/images/bussiness_administrator.png')] bg-center">
          <div className="bg-black absolute top-0 left-0 w-full h-full opacity-65 rounded-lg"></div>
          <div className="relative z-10 p-8 text-white">
            <h1 className="text-5xl font-bold mb-1">{jobData.title}</h1>
            <p className="text-2xl font-light">{jobData.level}</p>
          </div>
        </div>

        {/* Job Content Section */}
        <div className="p-8">
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Job Description
            </h2>
            <p className="text-black leading-relaxed">{jobData.description}</p>
          </section>

          {/* Separator Line */}
          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Education & Qualifications
            </h2>
            <ul className="list-disc ml-6 text-black space-y-2">
              {jobData.qualifications.map((q, index) => (
                <li key={index}>{q}</li>
              ))}
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Work Experience
            </h2>
            <ul className="list-disc ml-6 text-black space-y-2">
              {jobData.experience.map((e, index) => (
                <li key={index}>{e}</li>
              ))}
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-black mb-4">
              What OxiAura Offers
            </h2>
            <ul className="list-disc ml-6 text-black space-y-2">
              {jobData.offers.map((o, index) => (
                <li key={index}>{o}</li>
              ))}
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-black mb-4">Salary</h2>
            <p className="text-black leading-relaxed mb-4">{jobData.salary}</p>
            <button
              onClick={() => {
                window.location.href =
                  "mailto:info@oxiaura.com?subject=Job%20Application&body=Hello%2C%0D%0A%0D%0AI%20would%20like%20to%20apply%20for%20a%20position%20at%20Oxiaura.%0D%0A%0D%0AThank%20you.";
              }}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              Send CV to info@oxiaura.com
            </button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareerDetailsPage;
