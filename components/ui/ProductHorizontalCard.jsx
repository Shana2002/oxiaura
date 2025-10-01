import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const ProductHorizontalCard = ({ title, subtitle, desc,image,  link,side }) => {

    const col = side ? "flex-row-reverse" : "flex-row";
    const textSide = side ? "text-right":"text-left";
    return (
    <div className= {`flex ${col} items-center justify-center md:justify-between mb-16 gap-6`}>
      <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 mx-auto">
        <div className="relative w-full h-64 md:h-[60vh] rounded-lg overflow-hidden">
          <Image
            src={image}
            alt="Scotch Bonnet"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={`md:w-1/2 md:pl-12 text-center md:${textSide}`}>
        <h2 className="text-6xl font-bold text-green-700 mb-4">{title}</h2>
        <p className="text-gray-500 text-2xl font-semibold mb-2">
          {subtitle}
        </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {desc}
        </p>
        <Link
          href="#"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-green-800 transition duration-300"
        >
          Go to Product
        </Link>
      </div>
    </div>
  );
};

export default ProductHorizontalCard;
