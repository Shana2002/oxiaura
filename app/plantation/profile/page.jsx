import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import NotFound from "@/components/common/NotFound";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center bg-white text-green-900 overflow-hidden">
        
        <NotFound navigate={"/plantation"} />
      </div>
      <Footer />
    </>
  );
};

export default page;
