import Link from "next/link";
import React from "react";

const ProductSection = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-4 px-[5vw] py-20 h-screen">
        <div className="grid grid-cols-[repeat(11,1fr)] grid-rows-[repeat(3,1fr)] gap-[17px] h-[80vh] py-[5vh] w-full">
          <div className="bg-white rounded-[20px] col-span-4 row-span-3 bg-[url('/images/agarwood.png')] bg-no-repeat bg-cover bg-center"></div>
          <div className="bg-white rounded-[20px] col-span-3 row-span-2 col-start-5 row-start-1 bg-[url('/images/vanila.png')] bg-no-repeat bg-cover bg-center"></div>
          <div className="bg-white rounded-[20px] col-span-3 col-start-5 row-start-3 bg-[url('/images/watermelon.png')] bg-no-repeat bg-cover bg-center"></div>
          <div className="bg-white rounded-[20px] col-span-4 row-span-3 col-start-8 row-start-1 bg-[url('/images/scotchbonnet.png')] bg-no-repeat bg-cover bg-center"></div>
        </div>

        <Link
          href="/products"
          className="px-6 py-2 mt-8 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          View More
        </Link>
      </div>
    </>
  );
};

export default ProductSection;
