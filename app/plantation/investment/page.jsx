import Navbar from "@/components/common/Navbar";
import React from "react";
import InvestmentImg from "@/assets/images/investment.png";
import Image from "next/image";
import Footer from "@/components/common/Footer";
import InvestmentPlans from "@/components/common/InvestmentPlans";
import PlantSellingPlatform from "@/components/common/PlantSellingPlatform";

const page = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      {/* hero section */}
      <section className="h-screen py-10 relative">
        <div className="w-[100vw] h-[100vh] absolute bottom-0">
          <Image src={InvestmentImg} fill alt="investment" />
        </div>
        <div className="ml-[5vw] mt-[20vh]">
          <h2 className="text-4xl text-black mb-3">
            Invest Smart. Reap Green.
          </h2>
          <h1 className="text-7xl font-bold text-green-600">
            Secure Your Future.
          </h1>
        </div>
      </section>
      <InvestmentPlans />
      <PlantSellingPlatform />
      <Footer />
    </div>
  );
};

export default page;
