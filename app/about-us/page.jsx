"use client"

import React from 'react';
import { Twitter, Linkedin, Facebook, Leaf, TrendingUp, Cpu } from 'lucide-react';

// Custom component for the Expert Card
const ExpertCard = ({ name, title, bio, imageUrl }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-green-100">
    {/* Profile Image Placeholder */}
    <div className="w-28 h-28 rounded-full bg-green-200 mb-4 overflow-hidden border-4 border-white shadow-md">
      {/* Using a placeholder for the expert image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/112x112/A5D6A7/004D40?text=Expert" }}
      />
    </div>
    
    <h3 className="text-xl font-bold text-green-800">{name}</h3>
    <p className="text-sm font-semibold text-green-600 mb-3">{title}</p>
    
    <p className="text-gray-600 text-sm mb-4 line-clamp-4">
      {bio}
    </p>

    {/* Social Links */}
    <div className="flex space-x-3 text-green-700">
      <a href="#" aria-label={`Follow ${name} on Facebook`} className="hover:text-green-500 transition"><Facebook size={18} /></a>
      <a href="#" aria-label={`Follow ${name} on Twitter`} className="hover:text-green-500 transition"><Twitter size={18} /></a>
      <a href="#" aria-label={`Follow ${name} on LinkedIn`} className="hover:text-green-500 transition"><Linkedin size={18} /></a>
    </div>
  </div>
);

// Custom component for the Service/Product Card
const ServiceCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start transition-all duration-300 hover:shadow-2xl hover:bg-green-50">
    <div className="p-3 mb-4 rounded-full bg-green-100 text-green-700">
      <Icon size={28} />
    </div>
    <h3 className="text-lg font-bold text-green-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const teamMembers = [
  { 
    name: "John Doe", 
    title: "Chief Investment Officer", 
    bio: "John leads our strategic planning and ensures all investments meet strict ecological and return standards.",
    imageUrl: "https://placehold.co/112x112/A5D6A7/004D40?text=JD"
  },
  { 
    name: "Jane Smith", 
    title: "Head of Sustainability", 
    bio: "Jane is responsible for vetting all partner projects to guarantee genuine environmental impact and compliance.",
    imageUrl: "https://placehold.co/112x112/B9F6CA/004D40?text=JS"
  },
  { 
    name: "Alex Lee", 
    title: "Lead R&D Scientist", 
    bio: "Alex manages our research into innovative eco-friendly technologies that drive our future investment opportunities.",
    imageUrl: "https://placehold.co/112x112/81C784/004D40?text=AL"
  }
];

const services = [
  { 
    title: "Sustainable Agriculture", 
    description: "Investments in vertical farming, organic production, and water conservation technologies.", 
    icon: Leaf 
  },
  { 
    title: "Renewable Energy", 
    description: "Funding solar, wind, and geothermal projects with high growth potential and low carbon footprint.", 
    icon: TrendingUp 
  },
  { 
    title: "AI & Eco-Tech", 
    description: "Developing intelligent systems for environmental monitoring and resource management.", 
    icon: Cpu 
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Load Tailwind CSS (essential for single-file HTML execution) */}
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Hero Section - Top Imagery and Headline */}
      <header className="bg-gradient-to-b from-green-900 to-green-700 text-white pt-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-extrabold tracking-tight">OXIAURA</h1>
            <div className="space-x-4">
              <a href="#" className="hover:text-green-200">Home</a>
              <a href="#" className="hover:text-green-200">Services</a>
              <a href="#" className="hover:text-green-200 border-b-2 border-green-500">About</a>
              <a href="#" className="hover:text-green-200">Contact</a>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-4">Nature-Powered Investments</h2>
            <p className="text-2xl font-light text-green-200">Guaranteed Return for a Greener Tomorrow</p>
          </div>
          
          {/* Mock Image Grid */}
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="h-64 rounded-xl shadow-2xl overflow-hidden">
              <img 
                src="https://placehold.co/600x400/004d40/ffffff?text=Eco+Investment+Soil" 
                alt="Hands holding a young plant in fertile soil" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/004d40/ffffff?text=Eco+Investment" }}
              />
            </div>
            <div className="h-64 rounded-xl shadow-2xl overflow-hidden">
              <img 
                src="https://placehold.co/600x400/4CAF50/ffffff?text=Sustainable+Growth+Field" 
                alt="Lush green tea or crop fields" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/4CAF50/ffffff?text=Sustainable+Growth" }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-10">
            We cultivate eco-friendly products and responsible investments for a better future.
          </h2>
          
          <div className="text-gray-600 mb-10 text-lg">
            Oxiaura is dedicated to bridging the gap between high-yield financial growth and environmental stewardship. We believe that the planet's health and financial prosperity are not mutually exclusive, but rather interconnected drivers of long-term value. Our investment strategies focus exclusively on projects and technologies that promote sustainability, offering our clients a guaranteed return with a positive global impact.
          </div>

          {/* Vision and Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8 text-left p-6 bg-green-50 rounded-xl border-t-4 border-green-400 shadow-inner">
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Our Vision</h3>
              <p className="text-gray-700">
                To be the world's leading platform for green investments, setting the standard for sustainable financial and ecological performance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To provide guaranteed, responsible financial returns by investing exclusively in nature-powered, scalable eco-technologies and products.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Do - Services Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-green-900 mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Oxiaura Section */}
      <section className="relative h-96 bg-green-900 overflow-hidden">
        {/* Background Overlay to simulate image/field background */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" 
             style={{ backgroundImage: `url('https://placehold.co/1920x400/004d40/ffffff?text=Nature+Background')` }}>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-4">Why Choose Oxiaura</h2>
          <p className="text-lg max-w-3xl font-light">
            We combine rigorous financial analysis with deep environmental expertise. Our commitment to transparency, coupled with our unique portfolio of vetted, high-impact green projects, ensures both your financial and ethical returns are maximized.
          </p>
        </div>
      </section>

      {/* Our Experts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-green-900 mb-12">Our Experts</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <ExpertCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-extrabold mb-4">OXIAURA</h3>
            <p className="text-sm text-green-200">Responsible Investments for a Greener Future.</p>
            <div className="flex space-x-3 mt-4 text-green-400">
              <a href="#" aria-label="Facebook" className="hover:text-white transition"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition"><Twitter size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-green-200">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Partnerships</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Products</h4>
              <ul className="space-y-2 text-sm text-green-200">
                <li><a href="#" className="hover:text-white">Agri Fund</a></li>
                <li><a href="#" className="hover:text-white">Tech Solutions</a></li>
                <li><a href="#" className="hover:text-white">Energy Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-green-200">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-green-800 text-center text-sm text-green-400">
          &copy; {new Date().getFullYear()} Oxiaura. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
