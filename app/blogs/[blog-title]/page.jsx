"use client"

import React, { useState } from 'react';
import { Search, User, ChevronDown, Check, X, MessageSquare, ExternalLink } from 'lucide-react';

// Mock Data
const articleData = {
  title: 'Browns Acquires FLMC Investments Acquires FLMC Plantations',
  author: 'Browns one',
  uploaded: '20/09/2025',
  copiedBy: 'Oxiaura',
  views: '2K views',
  summary: 'Browns Investments PLC, a member of the LOLC Group, has acquired FLMC Plantations (Pvt) Ltd in a landmark deal worth LKR 4.8 billion. Through this acquisition, Browns now holds control over Pussellawa Plantations Ltd and Maturata Plantations Ltd, thus strengthening its footprint in Sri Lanka\'s plantation sector...',
  body: [
    "Sabaragamuwa, the estates are home to over 5,400 hectares of tea and 5,900 hectares of rubber. Together, these estates produce around 9.8 million kilograms of made tea and 2.5 million kilograms of rubber annually, making them a vital addition to Browns' growing agricultural portfolio.",
    "The acquisition underscores Browns' strategy to diversify and expand its plantation operations while enhancing Sri Lanka's global competitiveness in tea and rubber exports. With greater production capacity and access to an established distribution network, Browns is positioning itself as a key driver of sustainable growth within the industry. The move not only boosts Browns' share of the domestic and international markets in the country but also creates opportunities for higher efficiency, innovation, and operational synergies, expected to reinforce its long-term commitment to building value for stakeholders and contributing to Sri Lanka's economy."
  ],
  relatedArticles: [
    { id: 1, title: 'Red Chilli project', description: 'Browns is positioning itself as a key driver of sustainable growth within the industry.', imageUrl: 'https://placehold.co/400x250/166534/ffffff?text=Chilli+Farm' },
    { id: 2, title: 'Red Chilli project', description: 'Through this acquisition, Browns now holds control over Pussellawa Plantations Ltd...', imageUrl: 'https://placehold.co/400x250/166534/ffffff?text=Plant+Growth' },
    { id: 3, title: 'Red Chilli project', description: 'The move not only boosts Browns\' share of the domestic and international markets...', imageUrl: 'https://placehold.co/400x250/166534/ffffff?text=Leafy+Greens' },
  ]
};

// Custom colors based on the image
const primaryDark = 'rgb(0, 77, 64)'; // A deep, forest/teal green
const primaryLight = 'rgb(0, 105, 92)'; // A slightly lighter green for hover/accents
const accentGreen = 'rgb(118, 185, 0)'; // The vibrant green used for the share icon and border

// --- Sub Components ---

const Header = () => (
  <header className="bg-white shadow-md sticky top-0 z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold" style={{ color: primaryDark }}>OXI<span className="text-green-600">AURA</span></span>
      </div>

      {/* Navigation Links (Hidden on small screens) */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        {['Home', 'Blog', 'Services', 'Media', 'Careers', 'FAQ', 'Contact'].map(item => (
          <a key={item} href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            {item}
          </a>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <button aria-label="Search" className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-100">
          <Search size={20} />
        </button>
        <button aria-label="User Account" className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-100">
          <User size={20} />
        </button>
        <button className="flex items-center text-sm font-medium text-white px-3 py-1 rounded-full shadow-md transition-shadow" style={{ backgroundColor: primaryDark }}>
            Sign In
        </button>
      </div>
    </div>
  </header>
);

const MainArticle = ({ data }) => {
    // Determine the user's color for the metadata based on the image's style
    const metadataColor = 'text-green-700';
    const metadataStyle = 'text-xs text-gray-500 font-medium';
    
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Featured Image */}
                <div className="lg:col-span-2 relative rounded-lg overflow-hidden shadow-xl aspect-[16/9] lg:aspect-auto">
                    <img
                        src="https://placehold.co/1200x675/16a34a/ffffff?text=Browns+Acquires+Plantations"
                        alt="Plantation acquisition landscape"
                        className="w-full h-full object-cover"
                        onError={(e) => e.target.src = "https://placehold.co/1200x675/16a34a/ffffff?text=Image+Not+Available"}
                    />
                </div>

                {/* Article Info */}
                <div className="lg:col-span-1 space-y-4 relative">
                    {/* Metadata Box */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-lg">
                        <div className="flex justify-between items-center mb-2">
                            <span className={metadataStyle}>
                                Author: <span className={metadataColor}>{data.author}</span>
                            </span>
                            <span className={metadataStyle}>
                                <span className={metadataColor}>2K views</span>
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className={metadataStyle}>
                                Uploaded on: <span className={metadataColor}>{data.uploaded}</span>
                            </span>
                            <span className={metadataStyle}>
                                Copied by: <span className={metadataColor}>{data.copiedBy}</span>
                            </span>
                        </div>
                    </div>

                    {/* Title and Summary */}
                    <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900">
                        {data.title}
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed pt-2">
                        {data.summary}
                    </p>
                    
                    {/* Floating Share Icon (Styled like a WhatsApp button) */}
                    <button
                        className="absolute right-0 top-0 lg:right-[-20px] lg:top-[-20px] p-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
                        style={{ backgroundColor: accentGreen }}
                        aria-label="Share via WhatsApp"
                    >
                        {/* Mock WhatsApp/Share Icon */}
                        <MessageSquare size={24} className="text-white" /> 
                    </button>
                </div>
            </div>

            {/* Article Body */}
            <div className="max-w-4xl mx-auto mt-12 space-y-6 text-lg text-gray-800 leading-relaxed">
                {data.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

        </section>
    );
};

const Feedback = ({ onFeedback }) => (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-start border-t border-gray-200 mt-10">
        <span className="text-lg font-medium text-gray-700 mr-4">Is this news helpful?</span>
        <div className="flex space-x-3">
            <button
                className="flex items-center justify-center px-6 py-2 rounded-full text-white font-semibold transition-colors shadow-md hover:shadow-lg"
                style={{ backgroundColor: primaryDark }}
                onClick={() => onFeedback('YES')}
            >
                YES
            </button>
            <button
                className="flex items-center justify-center px-6 py-2 rounded-full text-gray-700 font-semibold border-2 border-gray-300 bg-white hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg"
                onClick={() => onFeedback('NO')}
            >
                NO
            </button>
        </div>
    </section>
);

const RelatedArticleCard = ({ article }) => (
    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100 cursor-pointer group">
        <div className="relative aspect-video">
            <img 
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                onError={(e) => e.target.src = "https://placehold.co/400x250/166534/ffffff?text=Article+Image"}
            />
             {/* Small green box icon, like in the image */}
             <div className="absolute top-3 right-3 p-1 rounded-sm" style={{ backgroundColor: accentGreen }}>
                <ExternalLink size={16} className="text-white" />
            </div>
        </div>
        <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                {article.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                {article.description}
            </p>
        </div>
    </div>
);

const RelatedArticles = ({ articles }) => (
    <section className="bg-gray-50 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold mb-6 text-gray-800">More Related articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.map(article => (
                    <RelatedArticleCard key={article.id} article={article} />
                ))}
            </div>
        </div>
    </section>
);

const Footer = () => {
    const footerLinks = [
        { title: 'Corporate', links: ['Home', 'About Us', 'Services', 'Media', 'Careers'] },
        { title: 'Legal', links: ['Terms & Conditions', 'Privacy Policy', 'Cookie Policy'] },
        { title: 'Contact', links: ['FAQ', 'Sitemap', 'Contact Us'] },
    ];
    
    const socialIcons = [
        { icon: 'F', color: '#1877F2' }, // Facebook
        { icon: 'T', color: '#1DA1F2' }, // Twitter/X
        { icon: 'L', color: '#0A66C2' }, // LinkedIn
        { icon: 'I', color: '#C13584' }, // Instagram
    ];

    return (
        <footer style={{ backgroundColor: primaryDark }} className="text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
                    {/* Logo and Tagline */}
                    <div className="space-y-4">
                        <span className="text-3xl font-bold">OXI<span className="text-green-400">AURA</span></span>
                        <p className="text-gray-300 text-sm">
                            Plantation & Agriculture Management Company
                        </p>
                        <div className="flex space-x-3 pt-2">
                            {socialIcons.map((soc, index) => (
                                <div key={index} className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-md transition-opacity hover:opacity-80 cursor-pointer" style={{ backgroundColor: soc.color }}>
                                    {soc.icon}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    {footerLinks.map((col, colIndex) => (
                        <div key={colIndex}>
                            <h3 className="text-lg font-semibold mb-4 border-b-2 inline-block" style={{ borderBottomColor: accentGreen }}>
                                {col.title}
                            </h3>
                            <ul className="space-y-2 text-sm">
                                {col.links.map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    
                    {/* Mock Contact/Newsletter Signup Block (as seen in the image) */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-4 border-b-2 inline-block" style={{ borderBottomColor: accentGreen }}>
                            Stay Updated
                        </h3>
                        <div className='space-y-2'>
                            <div className="bg-gray-800 p-3 rounded-md">Placeholder 1</div>
                            <div className="bg-gray-800 p-3 rounded-md">Placeholder 2</div>
                            <div className="bg-gray-800 p-3 rounded-md">Placeholder 3</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-8 text-center text-gray-400 text-xs">
                    © 2025 OXI AURA. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};


// --- Main App Component ---
export default function App() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (response) => {
    setFeedback(response);
    console.log('User feedback:', response);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Load Inter font and ensure Tailwind is included */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Header (Top Navigation) */}
      <Header />

      <main>
        {/* Main Article Content */}
        <MainArticle data={articleData} />

        {/* Feedback Section */}
        <Feedback onFeedback={handleFeedback} />

        {/* Related Articles Section (Grey Background) */}
        <RelatedArticles articles={articleData.relatedArticles} />
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Mock Feedback Message Box */}
      {feedback && (
        <div 
            className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-2xl z-50 transition-transform duration-300"
            style={{ transform: feedback ? 'translateY(0)' : 'translateY(100%)' }}
        >
          <div className='flex items-center justify-between'>
            <p className='font-semibold'>{`Thank you for your feedback! You marked the article as '${feedback}'.`}</p>
            <button 
                onClick={() => setFeedback(null)} 
                className='ml-4 p-1 rounded-full hover:bg-gray-700'
                aria-label='Close feedback message'
            >
                <X size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
