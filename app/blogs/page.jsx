import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import React from 'react';

// --- Utility Components and Data (Simulating a Next.js environment) ---

// Placeholder Data
const featuredPost = {
  title: 'Browns Investments Acquires FLMC Plantations',
  subtitle: 'Browns Investments PLC is acquiring three plantation companies including FLMC Plantations Pvt Ltd for LKR 4.5 billion. This marks a major expansion...',
  image: 'https://placehold.co/1200x600/14402a/ffffff?text=FLMC+Plantations+Acquisition',
};

const topStories = [
  { id: 1, title: 'Red Chilli Project', description: 'From tiny seeds to robust trees, explore the complete journey of our Red Chilli plantation and how we ensure superior quality to every table.', image: 'https://placehold.co/400x400/D92F03/ffffff?text=Red+Chilli' },
  { id: 2, title: 'Red Chilli Project', description: 'From tiny seeds to robust trees, explore the complete journey of our Red Chilli plantation and how we ensure superior quality to every table.', image: 'https://placehold.co/400x400/D92F03/ffffff?text=Red+Chilli' },
  { id: 3, title: 'Red Chilli Project', description: 'From tiny seeds to robust trees, explore the complete journey of our Red Chilli plantation and how we ensure superior quality to every table.', image: 'https://placehold.co/400x400/D92F03/ffffff?text=Red+Chilli' },
];

const oxiauraPosts = [
  { id: 4, title: 'Agarwood project started!', description: 'Learn about our latest initiative to cultivate high-value Agarwood. This long-term project promises sustainable growth and ecological balance.', image: 'https://placehold.co/200x200/404040/ffffff?text=Agarwood' },
  { id: 5, title: 'Agarwood project started!', description: 'Learn about our latest initiative to cultivate high-value Agarwood. This long-term project promises sustainable growth and ecological balance.', image: 'https://placehold.co/200x200/784102/ffffff?text=Citrus' },
];

const everythingGreen = [
  { id: 6, title: 'Red Chilli Project', description: 'From tiny seeds to robust trees, explore the complete journey of our Red Chilli plantation and how we ensure superior quality to every table.', image: 'https://placehold.co/400x400/3A5D45/ffffff?text=Tea+Field' },
  { id: 7, title: 'Red Chilli Project', description: 'From tiny seeds to robust trees, explore the complete journey of our Red Chilli plantation and how we ensure superior quality to every table.', image: 'https://placehold.co/400x400/8EC954/14402a?text=Seedling' },
  { id: 8, title: 'Red Chilli Project', description: 'From tiny seeds to robust trees, explore the complete journey of our Red Chilli plantation and how we ensure superior quality to every table.', image: 'https://placehold.co/400x400/3A5D45/ffffff?text=Tea+Field' },
];

// Reusable Vertical Post Card Component
const PostCard = ({ post, isFirst = false }) => {
  const isImageTop = isFirst && post.image.includes('D92F03'); // Check for chili color based on image
  const cardClasses = isImageTop
    ? 'bg-yellow-100 shadow-xl'
    : 'bg-white shadow-lg';
  const textClasses = isImageTop ? 'text-gray-900' : 'text-white';

  return (
    <div className={`relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] ${cardClasses}`}>
      {/* WhatsApp Floating Icon (only for Top Stories section in image) */}
      {isFirst && (
        <a href="#" className="absolute top-4 right-4 z-10 p-3 rounded-full bg-green-500 text-white shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.995l-1.396-.749c-1.314.933-2.88 1.488-4.526 1.488-3.078 0-5.584-2.506-5.584-5.584s2.506-5.584 5.584-5.584c1.687 0 3.256.702 4.414 1.839l1.171 1.258 1.171-1.258c1.158-1.137 2.727-1.839 4.414-1.839 3.078 0 5.584 2.506 5.584 5.584s-2.506 5.584-5.584 5.584c-1.646 0-3.212-.555-4.526-1.488l-1.396.749zm-5.584-7.411c-.566 0-1.025.459-1.025 1.025s.459 1.025 1.025 1.025 1.025-.459 1.025-1.025-.459-1.025-1.025-1.025zm11.168 0c-.566 0-1.025.459-1.025 1.025s.459 1.025 1.025 1.025 1.025-.459 1.025-1.025-.459-1.025-1.025-1.025z"/></svg>
        </a>
      )}

      {/* Image Container (uses object-cover) */}
      <div className={`h-64 ${isImageTop ? 'bg-yellow-500' : 'bg-gray-800'}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        {/* Green Bookmark Icon */}
        <div className="absolute top-4 left-4 p-2 bg-white rounded-full text-green-700 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </div>
      </div>

      {/* Text Content */}
      <div className={`p-6 ${isImageTop ? 'bg-white' : 'bg-black/20'}`}>
        <h3 className={`text-xl font-bold mb-2 ${textClasses}`}>{post.title}</h3>
        <p className={`text-sm ${isImageTop ? 'text-gray-600' : 'text-gray-300'}`}>{post.description}</p>
      </div>
    </div>
  );
};

// Reusable Horizontal Post Card Component (for Oxiaura section)
const HorizontalPostCard = ({ post }) => {
  // Base dark green/black card style
  const darkGreen = '#14402a';

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-gray-700">
      {/* Text Content */}
      <div className="p-6 flex flex-col justify-between w-full md:w-2/3">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
          <p className="text-sm text-gray-300">{post.description}</p>
        </div>
        <button className="mt-4 md:mt-0 px-4 py-2 bg-transparent text-white border-2 border-white text-sm font-semibold rounded-full w-40 hover:bg-white hover:text-gray-800 transition-colors">
          Read full article
        </button>
      </div>

      {/* Image Container */}
      <div className="w-full md:w-1/3 min-h-[150px] md:min-h-full">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const primaryDarkGreen = '#14402a';

  // --- Hero Section Component ---
  const HeroSection = ({ post }) => (
    <section className="relative h-[60vh] min-h-[350px] mb-12">
      {/* Background Image (Placeholder) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://placehold.co/1200x600/3A5D45/ffffff?text=Tea+Plantation+Background')` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl">
          {post.subtitle}
        </p>
        <button className="w-fit px-8 py-3 bg-white text-gray-800 font-bold rounded-full text-lg hover:bg-gray-100 transition-colors shadow-xl">
          Read full article
        </button>
      </div>
    </section>
  );

  // --- Section Wrapper Component ---
  const Section = ({ title, children, hasWhatsApp = false }) => (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">{title}</h2>
      {hasWhatsApp && (
         <a href="#" className="fixed right-4 bottom-24 z-30 p-3 rounded-full bg-green-500 text-white shadow-lg md:hidden">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.995l-1.396-.749c-1.314.933-2.88 1.488-4.526 1.488-3.078 0-5.584-2.506-5.584-5.584s2.506-5.584 5.584-5.584c1.687 0 3.256.702 4.414 1.839l1.171 1.258 1.171-1.258c1.158-1.137 2.727-1.839 4.414-1.839 3.078 0 5.584 2.506 5.584 5.584s-2.506 5.584-5.584 5.584c-1.646 0-3.212-.555-4.526-1.488l-1.396.749zm-5.584-7.411c-.566 0-1.025.459-1.025 1.025s.459 1.025 1.025 1.025 1.025-.459 1.025-1.025-.459-1.025-1.025-1.025zm11.168 0c-.566 0-1.025.459-1.025 1.025s.459 1.025 1.025 1.025 1.025-.459 1.025-1.025-.459-1.025-1.025-1.025z"/></svg>
        </a>
      )}
      {children}
    </section>
  );

  // --- Footer Component ---


  // --- Main Render ---
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <main>
        {/* Featured Post / Hero */}
        <HeroSection post={featuredPost} />

        {/* Top Rated Stories */}
        <Section title="Top rated stories" hasWhatsApp={true}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topStories.map((post, index) => (
              // The first card is given 'isFirst' to render the WhatsApp icon if necessary
              <PostCard key={post.id} post={post} isFirst={index === 0} />
            ))}
          </div>
        </Section>

        {/* Posted by Oxiaura */}
        <Section title="Posted by Oxiaura">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {oxiauraPosts.map((post) => (
              <HorizontalPostCard key={post.id} post={post} />
            ))}
          </div>
        </Section>

        {/* Everything Green */}
        <Section title="Everything Green">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {everythingGreen.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
