import Navbar from "@/components/common/Navbar";
import React from "react";
import InvestmentImg from "@/assets/images/investment.png";
import Image from "next/image";
import Footer from "@/components/common/Footer";
import InvestmentPlans from "@/components/common/InvestmentPlans";
import PlantSellingPlatform from "@/components/common/PlantSellingPlatform";
import Investment1 from "@/assets/images/bg/handshake.png";
import Link from "next/link";
import GetInTouch from "@/components/common/GetInTouch";

const page = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      {/* hero section */}
      <section className="h-screen py-10 relative">
        <div className="w-[100vw] opacity-20 h-[100vh] absolute bottom-0">
          <Image
            src={InvestmentImg}
            fill
            alt="investment"
            className="object-cover"
          />
        </div>
        <div className="ml-[5vw] mt-[20vh] z-50">
          <h2 className="text-4xl text-black mb-3">
            Invest Smart. Reap Green.
          </h2>
          <h1 className="text-7xl font-bold text-green-600">
            Secure Your Future.
          </h1>
        </div>
      </section>
      {/* Investment about */}
      <section className="flex flex-col items-center gap-3 lg:flex-row mx-[5vw] my-[5vh] justify-center">
        <div className="relative h-[40vh] w-full lg:w-1/3">
          <Image
            src={Investment1}
            alt="investment"
            fill
            className="object-contain rounded-2xl"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start w-2/3 justify-center gap-4 text-center lg:text-start">
          <h1 className="text-6xl font-bold text-green-500">Sustainable Growth Partnerships</h1>
          <h2 className="text-5xl font-bold text-black">Cultivating the Future Together</h2>
          <p className="justify-start text-black text-1xl">Partner with Oxiaura Plantation to shape a greener tomorrow.We collaborate with farmers, environmental innovators, and organizations committed to sustainable agriculture and eco-friendly development. Together, we nurture growth, empower communities, and create lasting environmental impact.</p>
          <Link href={"#contact"} className="bg-black px-6 py-2 rounded-2xl mt-5">Contact us</Link>
        </div>
      </section>

      <InvestmentPlans />
      <PlantSellingPlatform />
      <GetInTouch link={"contact"}/>
      <Footer />
    </div>
  );
};

export default page;
