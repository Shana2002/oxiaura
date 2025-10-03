import React from 'react';

const PlantCard = ({ name, price, location, description, imageUrl }) => (
  <div className="bg-white border-2 border-green-200 rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
    <img 
      src={imageUrl} 
      alt={name} 
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-2 text-center">{name}</h2>
      <p className="text-gray-600 mb-4 text-center">{description}</p>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-500">Price per Plant:</span>
          <span className="font-semibold text-green-700">LKR {price.toLocaleString()}</span>
        </div>
      </div>
      <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
        Contact Us
      </button>
    </div>
  </div>
);

const PlantSellingPlatform = () => {
  const plants = [
    {
      name: 'Agarwood Plant',
      price: 1500,
      description: 'Premium Agarwood saplings for aromatic resin production. High-value investment after 7-10 years.',
      imageUrl: '/images/plants/agarwood.png'
    },
    {
      name: 'Sandalwood Plant',
      price: 1500,
      description: 'Quality Sandalwood plants for valuable heartwood. Sustainable cultivation with growth support.',
      imageUrl: '/images/plants/agarwood.png'
    },
    {
      name: 'TJC Mango Plant',
      price: 1850,
      description: 'Superior TJC mango saplings for juicy, sweet fruits. Fast-growing with high orchard yield.High return on investment.',
      imageUrl: '/images/plants/agarwood.png'
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Premium Plant Marketplace</h1>
          <p className="text-xl text-gray-600">Discover high-quality agarwood, sandalwood, and mango plants with guaranteed pricing and delivery.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant, index) => (
            <PlantCard key={index} {...plant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantSellingPlatform;