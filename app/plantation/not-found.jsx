// app/404.jsx
import Link from "next/link";
import Image from "next/image";
import Leaf from "@/assets/images/leaf.png";
import GroupNavbar from "@/components/common/GroupNavbar";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

const Custom404 = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center bg-white text-green-900 overflow-hidden">
        <Navbar/>
        {/* Floating Leaves */}
        <div className="absolute top-[15%] left-[10%] opacity-15 animate-float">
          <Image
            src={Leaf}
            alt="Leaf"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="absolute top-[40%] right-[12%] opacity-15 animate-float delay-2000">
          <Image
            src={Leaf}
            alt="Leaf"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-[10%] left-[25%] opacity-15 animate-float delay-4000">
          <Image
            src={Leaf}
            alt="Leaf"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Main Content */}
        <h1 className="text-[10rem] md:text-[15rem] font-bold text-green-800 leading-none">
          503
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          Something Beautiful is Growing
        </h1>
        <h2 className="text-lg md:text-2xl font-normal text-green-700 mt-2">
          Nurturing new beginnings in nature’s way 🌿
        </h2>
        <p className="text-green-600 mt-4 text-base md:text-lg">
          This page is under construction.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Back Home
        </Link>

        {/* Footer */}
      </div>
      <Footer />
    </>
  );
};

export default Custom404;
