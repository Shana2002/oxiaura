import React from 'react'
import {
  Twitter,
  Linkedin,
  Facebook,
  Leaf,
  TrendingUp,
  Cpu,
} from "lucide-react";

const ExpertCard = ({ name, title, bio, imageUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-green-100">
      
      {/* Profile Image */}
      <div className="h-[50vh] mx-auto mb-4  overflow-hidden  flex-shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/112x112/A5D6A7/004D40?text=Expert";
          }}
        />
      </div>

      {/* Name and Title */}
      <h3 className="text-xl font-bold text-green-800">{name}</h3>
      <p className="text-sm font-semibold text-green-600 mb-3">{title}</p>

      {/* Bio (Full Text) */}
      <div className="flex-grow">
        <p className="text-gray-600 text-sm mb-4 px-2">{bio}</p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-3 text-green-700 mt-auto">
        <a href="#" aria-label={`Follow ${name} on Facebook`} className="hover:text-green-500 transition">
          <Facebook size={18} />
        </a>
        <a href="#" aria-label={`Follow ${name} on Twitter`} className="hover:text-green-500 transition">
          <Twitter size={18} />
        </a>
        <a href="#" aria-label={`Follow ${name} on LinkedIn`} className="hover:text-green-500 transition">
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  );
};


export default ExpertCard