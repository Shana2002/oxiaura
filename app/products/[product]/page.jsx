"use client"
import React, { useState } from 'react';
import { Search, ShoppingCart, User, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import {products} from "@/assets/data.js";
import { useParams } from 'next/navigation';

// Main App component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { product } = useParams(); // get dynamic route param
  const productData = products.find(
    (item) => item.slug.toLowerCase().replace(/\s+/g, "-") === product.toLowerCase()
  );

  if (!productData) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-5xl font-bold text-red-600">Product not available</h1>
          <p className="text-gray-600 mt-2">The product you are looking for doesn’t exist.</p>
        </main>
        <Footer />
      </div>
    );
  }

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
      <a href="#" className="absolute top-0 right-8 transform -translate-y-1/2 p-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition duration-300">
        <MessageSquare size={24} />
      </a>
    </div>
  );

  const FeatureBlock = ({ title, content }) => (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full w-5/12">
      <h3 className="text-2xl font-semibold text-[#006633] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {content}
      </p>
    </div>
  );

  // The Timeline is the most complex section, using SVG for the path.
  const Timeline = () => {
    const steps = [
      { id: 1, title: 'Cultivation & Monitoring', detail: 'Our farms utilize sustainable practices, ensuring every crop meets strict quality and ethical standards from the very start.' },
      { id: 2, title: 'Harvest & Quality Processing', detail: 'We employ rigorous processing steps, including hand-selection, drying, and testing, to preserve the signature heat and flavor of the bonnet.' },
      { id: 3, title: 'Global Distribution', detail: 'Advanced logistics ensure freshness, delivering our bold-flavored product from our fields directly to your market or kitchen.' },
    ];

    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Project Timeline</h2>
        <div className="w-1/4 mx-auto border-b-2 border-[#66cc33] mb-12"></div>

        <div className="relative mt-20">
          {/* SVG Path for Timeline */}
          <svg className="absolute w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
            <path
              d="M 50 250 C 300 50, 700 50, 950 250"
              fill="none"
              stroke="#66cc33"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Timeline Steps - Positioned absolutely relative to the path */}
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`absolute w-1/3 text-center transition-all duration-500`}
              // Custom positioning to mimic the curve
              style={{
                left: `${index * 35 + 5}%`, // Approximate X position
                top: index === 0 ? '100px' : index === 1 ? '0px' : '100px', // Approximate Y position (mimicking the curve)
              }}
            >
              {/* Point and Number */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-[#006633] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="w-4 h-4 rounded-full bg-[#66cc33] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white"></div>
                </div>
                
                <div className="mt-12">
                    <div className="text-6xl font-black text-gray-200 opacity-70 mb-2 leading-none">{step.id}</div>
                    <div className="text-lg font-bold text-[#006633] mb-2">{step.title}</div>
                    <p className="text-sm text-gray-600 max-w-xs mx-auto">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[250px] sm:h-[300px]"></div> {/* Spacer for timeline content */}
      </div>
    );
  };

  // --- Main Render Function ---

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar/>
      <main className="mx-auto py-8 px-[5vw]">
        {/* Career Hero Banner */}
        <div className={`h-[50vh] mt-[15vh] rounded-4xl relative mb-10 overflow-hidden flex items-center justify-center`}
        style={{
                    backgroundImage: `url(${productData.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}>
          <div className="bg-black absolute top-0 left-0 w-full h-full opacity-65 rounded-4xl"></div>
          <div className="relative z-10 p-8 text-white text-center">
            <h1 className="text-5xl font-bold mb-1">
              {productData.title}
            </h1>
            <p className="text-2xl font-light">
              {productData.subtitle}
            </p>
          </div>
        </div>

        
      </main>
      <main>
        <MetricBar />

        {/* Product Features Section */}
        <section className="mx-auto my-[10vh]">
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 mx-[5vw]"> */}
          <div className="flex items-center justify-center flex-wrap gap-8 mb-16 mx-[5vw]">
            {productData.paragraphs.map((p,i)=>(
              <FeatureBlock key={i} title={p.title} content={p.paragraph} />
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-white">
            <Timeline />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
