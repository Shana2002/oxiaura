import AboutUs from "@/components/common/AboutUs";
import AboutUs2 from "@/components/common/AboutUs2";
import Footer from "@/components/common/Footer";
import GetInTouch from "@/components/common/GetInTouch";
import Hero from "@/components/common/Hero";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <AboutUs2 />
      <GetInTouch />
      <Footer />
    </>
  );
}
