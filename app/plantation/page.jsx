import AboutUs from "@/components/common/AboutUs";
import AboutUs2 from "@/components/common/AboutUs2";
import Footer from "@/components/common/Footer";
import GetInTouch from "@/components/common/GetInTouch";
import Hero from "@/components/common/Hero";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";

// export const metadata = {
//   title: "Oxiaura Plantation | Oxiaura Group Sri Lanka",
//   description:
//     "Oxiaura Plantation, part of Oxiaura Group, focuses on sustainable agriculture and premium plantation products in Sri Lanka.",

//   keywords: [
//     "Oxiaura Plantation",
//     "Oxiaura Group",
//     "Sri Lanka Plantation",
//     "Agarwood",
//     "Vanilla",
//     "TJC Mango",
//     "Scotch Bonnet",
//     "Sustainable Agriculture",
//     "Premium Plantation Products",
//     "Sri Lanka Agriculture",
//     "Oxiaura Sustainability",
//     "sandlwood plantaion",
//     "passion fruit plantation",
//     "watermelon plantation",
//   ],

//   openGraph: {
//     title: "Oxiaura Plantation | Oxiaura Group",
//     description:
//       "Discover sustainable plantation excellence with Oxiaura Plantation in Sri Lanka.",
//     url: "https://oxiaura.com",
//     siteName: "Oxiaura Plantation",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Oxiaura Plantation",
//       },
//     ],
//     locale: "en_LK",
//     type: "website",
//   },
// };


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <AboutUs2 />
      <GetInTouch />
      <Footer />
    </div>
  );
}
