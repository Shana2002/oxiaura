"use client"
import React, { useState } from 'react';
import { Search, ShoppingCart, User, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Hero = () => (
    <div
      className="relative h-[350px] sm:h-[450px] md:h-[550px] bg-cover bg-center flex items-center justify-center rounded-b-xl overflow-hidden shadow-2xl"
      style={{
        backgroundImage: 'url("https://placehold.co/1200x600/650000/ffffff?text=Product+Image+-+Scotch+Bonnet")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative text-center text-white p-4 sm:p-6">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
          Scotch bonnet
        </h1>
        <p className="text-md sm:text-xl md:text-2xl mt-1 sm:mt-2 font-light">
          Bold Heat, Naturally Grown
        </p>
      </div>
    </div>
  );

  const MetricBar = () => (
    <div className="relative max-w-7xl mx-auto mt-[-20px] sm:mt-[-30px] px-4 sm:px-6">
      <div className="bg-white p-4 sm:p-6 shadow-xl rounded-lg text-center border-t-4 border-[#006633]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#006633]">
          100K
        </h2>
        <p className="text-sm sm:text-lg text-gray-500 mt-1 mb-3">watching</p>
        <div className="mx-auto w-1/3 border-b-2 border-[#66cc33]"></div>
      </div>

      <a
        href="#"
        className="absolute top-0 right-4 sm:right-8 transform -translate-y-1/2 p-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition duration-300"
      >
        <MessageSquare size={20} className="sm:w-6 sm:h-6" />
      </a>
    </div>
  );

  const FeatureBlock = ({ title, content }) => (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border-l-4 border-[#006633] shadow-md hover:shadow-lg transition duration-300 h-full">
      <h3 className="text-xl sm:text-2xl font-semibold text-[#006633] mb-2 sm:mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{content}</p>
    </div>
  );

  const Timeline = () => {
    const steps = [
      { id: 1, title: 'Cultivation & Monitoring', detail: 'Our farms utilize sustainable practices, ensuring every crop meets strict quality and ethical standards from the very start.' },
      { id: 2, title: 'Harvest & Quality Processing', detail: 'We employ rigorous processing steps, including hand-selection, drying, and testing, to preserve the signature heat and flavor of the bonnet.' },
      { id: 3, title: 'Global Distribution', detail: 'Advanced logistics ensure freshness, delivering our bold-flavored product from our fields directly to your market or kitchen.' },
    ];

    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center text-gray-800 mb-4">Project Timeline</h2>
        <div className="w-1/4 mx-auto border-b-2 border-[#66cc33] mb-12"></div>

        <div className="relative mt-16 sm:mt-20">
          <svg className="absolute w-full h-full hidden sm:block" viewBox="0 0 1000 300" preserveAspectRatio="none">
            <path
              d="M 50 250 C 300 50, 700 50, 950 250"
              fill="none"
              stroke="#66cc33"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`absolute w-full sm:w-1/3 text-center transition-all duration-500`}
              style={{
                left: isMenuOpen ? '0%' : `${index * 35 + 5}%`,
                top: index === 0 ? '80px' : index === 1 ? '0px' : '80px',
              }}
            >
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-[#006633] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="w-4 h-4 rounded-full bg-[#66cc33] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white"></div>
                </div>
                <div className="mt-12">
                  <div className="text-5xl sm:text-6xl md:text-6xl font-black text-gray-200 opacity-70 mb-2 leading-none">{step.id}</div>
                  <div className="text-lg sm:text-xl font-bold text-[#006633] mb-2">{step.title}</div>
                  <p className="text-sm sm:text-base text-gray-600 max-w-xs mx-auto">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[250px] sm:h-[300px]"></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar/>
      <main>
        <Hero />
        <MetricBar />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
            <FeatureBlock
              title="Fiery Flavor, Pure Quality"
              content="Our Scotch bonnet chilies are meticulously selected to deliver an unparalleled kick of heat. Grown in rich, natural soil, they undergo rigorous quality checks, ensuring you receive a premium product that is both potent and pure. Perfect for authentic Caribbean and global cuisine, adding a signature fire to every dish."
            />
            <FeatureBlock
              title="Sustainably Cultivated"
              content="We prioritize ecological balance. By employing sustainable farming techniques, we not only protect the environment but also enhance the natural integrity and flavor profile of the chilies. This commitment to earth-friendly practices guarantees that every harvest is guilt-free and naturally exceptional."
            />
          </div>

          <div className="max-w-4xl mx-auto text-center py-6 sm:py-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">From Farm to Global Market</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Meticulous care is applied at every stage, from seed planting to final packaging. Our globally certified supply chain ensures that our chilies maintain peak freshness, flavor, and nutritional value, reaching your location quickly and efficiently while maintaining complete traceability.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <Timeline />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
