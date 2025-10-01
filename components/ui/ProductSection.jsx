import Link from "next/link";
import React from "react";

const ProductSection = () => {
  return (
    // Outer container has flexible padding and minimum height
    <div className="flex flex-col justify-center items-center px-6 md:px-12 lg:px-16 py-16 md:py-24 min-h-screen">
      
      {/* Grid Container:
          - lg:h-[80vh] restores the necessary fixed height for the complex desktop grid layout.
          - Mobile (default): grid-cols-1 stacks items.
          - Tablet (sm): grid-cols-2 for a simple 2-column layout.
          - Desktop (lg): Transitions to the complex 11-column, 3-row grid.
      */}
      <div className="grid w-full h-auto lg:h-[80vh] gap-4 md:gap-6 lg:gap-[17px] 
                      grid-cols-1 sm:grid-cols-2 
                      lg:grid-cols-[repeat(11,1fr)] lg:grid-rows-[repeat(3,1fr)]">
        
        {/* Item 1: Agarwood (Main Large Block) */}
        <div className="bg-white rounded-[20px] h-60 sm:h-72 lg:h-auto 
                        lg:col-span-4 lg:row-span-3 
                        bg-[url('/images/agarwood.png')] bg-no-repeat bg-cover bg-center">
        </div>
        
        {/* Item 2: Vanilla (Top Middle Block) */}
        <div className="bg-white rounded-[20px] h-60 sm:h-72 lg:h-auto 
                        lg:col-span-3 lg:row-span-2 lg:col-start-5 lg:row-start-1
                        bg-[url('/images/vanila.png')] bg-no-repeat bg-cover bg-center"></div>
                        
        {/* Item 3: Watermelon (Bottom Middle Block) */}
        <div className="bg-white rounded-[20px] h-60 sm:h-72 lg:h-auto 
                        lg:col-span-3 lg:col-start-5 lg:row-start-3 
                        bg-[url('/images/watermelon.png')] bg-no-repeat bg-cover bg-center"></div>
                        
        {/* Item 4: Scotch Bonnet (Right Large Block) */}
        <div className="bg-white rounded-[20px] h-60 sm:h-72 lg:h-auto 
                        lg:col-span-4 lg:row-span-3 lg:col-start-8 lg:row-start-1
                        bg-[url('/images/scotchbonnet.png')] bg-no-repeat bg-cover bg-center"></div>
                        
      </div>

      {/* View More Link */}
      <Link
        href="/products"
        className="px-6 py-2 mt-12 md:mt-16 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        View More
      </Link>
    </div>
  );
};

export default ProductSection;