"use client";
import React, { useEffect, useState } from "react";
import {
  MessageSquare,
} from "lucide-react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { useParams } from "next/navigation";
import Image from "next/image";
import StatusPage from "@/components/common/Status";

// Main App component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { product } = useParams(); // dynamic route param

  useEffect(() => {
    if (!product) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/products/${product}`);
        if (!res.ok) throw new Error("Failed to fetch product");

        const data = await res.json();
        setProductData(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [product]);

  if (error) return <StatusPage type="error" title={"Error"} subtitle={error} />

  if (loading) return <StatusPage title={"product loading....."} />

  const MetricBar = () => (
    <div className="relative px-[5vw] my-5 mx-auto mt-[-30px] sm:mt-[-40px] ">
      <div className="rounded-lg text-center ">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#006633]">
          {productData.watching}K
        </h2>
        <p className="text-lg text-gray-500 mt-1 mb-3">watching</p>
        <div className="mx-auto w-1/3 border-b-2 border-[#66cc33]"></div>
      </div>

      {/* WhatsApp Icon */}
      <a
        href="#"
        className="absolute top-0 right-8 transform -translate-y-1/2 p-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition duration-300"
      >
        <MessageSquare size={24} />
      </a>
    </div>
  );

  const FeatureBlock = ({ title, content }) => (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full lg:w-5/12">
      <h3 className="text-2xl font-semibold text-[#006633] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );

  const stepsData = [
    {
      id: "1",
      title: "Cultivation & Monitoring",
      detail:
        "Our farms utilize sustainable practices, ensuring every crop meets strict quality and ethical standards from the very start.",
    },
    {
      id: "2",
      title: "Harvest & Quality Processing",
      detail:
        "We employ rigorous processing steps, including hand-selection, drying, and testing, to preserve the signature heat and flavor of the bonnet.",
    },
    {
      id: "3",
      title: "Global Distribution",
      detail:
        "Advanced logistics ensure freshness, delivering our bold-flavored product from our fields directly to your market or kitchen.",
    },
    {
      id: "4",
      title: "Customer Feedback & Improvement",
      detail:
        "We collect feedback and refine processes continuously to maintain the highest quality standards.",
    },
  ];
  const Timeline = ({ steps }) => {
  const getY = (index, total) => {
    const amplitude = 120;
    const baseY = 100;
    const t = index / (total - 1);
    return baseY + Math.sin(t * Math.PI) * amplitude;
  };

  return (
    <div className="mx-auto px-4 py-[5vw]">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Project Timeline
      </h2>
      <div className="w-1/4 mx-auto border-b-2 border-[#66cc33] mb-12"></div>

      {/* --- Desktop View (Curved layout) --- */}
      <div className="relative hidden md:block w-full h-[400px] md:h-[500px]">
        {steps.map((step, index) => {
          const leftPercent = (index / (steps.length - 1)) * 90 + 5;
          const topPx = getY(index, steps.length);
          return (
            <div
              key={step.id}
              className="absolute w-1/3 text-center transform -translate-x-1/2"
              style={{
                left: `${leftPercent}%`,
                top: `${topPx}px`,
              }}
            >
              <div className="flex flex-col items-center">
                {/* Dots */}
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-[#006633] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="w-4 h-4 rounded-full bg-[#66cc33] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white"></div>
                </div>

                {/* Text */}
                <div className="mt-12">
                  <div className="text-6xl font-black text-gray-200 opacity-70 mb-2 leading-none">
                    {step.id}
                  </div>
                  <div className="text-lg font-bold text-[#006633] mb-2">
                    {step.title}
                  </div>
                  <p className="text-sm text-gray-600 max-w-xs mx-auto">
                    {step.detail}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- Mobile & Tablet View (Vertical stacked layout) --- */}
      <div className="flex flex-col space-y-8 md:hidden">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white shadow-md rounded-xl p-6 border border-green-100 flex flex-col items-center text-center"
          >
            <div className="w-10 h-10 rounded-full bg-[#006633] flex items-center justify-center mb-4">
              <div className="w-4 h-4 bg-[#66cc33] rounded-full border-2 border-white"></div>
            </div>
            <div className="text-3xl font-bold text-gray-200 opacity-70 leading-none">
              {step.id}
            </div>
            <h3 className="text-lg font-bold text-[#006633] mt-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{step.detail}</p>
          </div>
        ))}
      </div>

      <div className="h-[250px] sm:h-[300px]"></div> {/* Spacer for desktop */}
    </div>
  );
};


  // --- Main Render Function ---

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <main className="mx-auto py-8 px-[5vw]">
        {/* Career Hero Banner */}
        <div
          className={`h-[50vh] mt-[15vh] rounded-4xl relative mb-10 overflow-hidden flex items-center justify-center`}
          style={{
            backgroundImage: `url(${productData.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black absolute top-0 left-0 w-full h-full opacity-65 rounded-4xl"></div>
          <div className="relative z-10 p-8 text-white text-center">
            <h1 className="text-5xl font-bold mb-1">{productData.title}</h1>
            <p className="text-2xl font-light">{productData.subtitle}</p>
          </div>
        </div>
      </main>
      <main>
        <MetricBar />

        {/* Product Features Section */}
        <section className="mx-auto my-[10vh] px-[5vw]">
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 mx-[5vw]"> */}
          <div className="flex items-center justify-center flex-wrap gap-8 mb-16 mx-[5vw]">
            {productData.paragraphs.map((p, i) => (
              <FeatureBlock key={i} title={p.title} content={p.paragraph} />
            ))}
          </div>
        </section>
        {/* Another image section */}
        {productData.subImages && productData.subImages.length > 0 && (
          <section className="mx-auto my-[5vh] px-[5vw]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center">
              {productData.subImages.map((img, index) => (
                <div key={index} className="w-full aspect-square relative">
                  <Image
                    src={img}
                    alt={`Product Image ${index + 1}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Timeline Section */}
        <section className="bg-white">
          <Timeline  steps={stepsData}/>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
