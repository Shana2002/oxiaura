import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Gallery from "@/components/ui/Gallery";


const images = [
  { src: "/images/aboutus2_bg.png", alt: "Tea garden" },
  { src: "/images/blog_header.png", alt: "Passion fruit" },
  { src: "/images/plant1.png", alt: "Green plants" },
  { src: "/images/plant2.png", alt: "Watermelon" },
  { src: "/images/sandalwood.jpg", alt: "Seedling" },
  { src: "/images/Scotch_bonnet.png", alt: "Tree bark" },
  { src: "/images/vanila.png", alt: "Chillies" },
  { src: "/images/aboutus2_bg.png", alt: "Tea garden" },
  { src: "/images/blog_header.png", alt: "Passion fruit" },
  { src: "/images/plant1.png", alt: "Green plants" },
  { src: "/images/plant2.png", alt: "Watermelon" },
  { src: "/images/sandalwood.jpg", alt: "Seedling" },
  { src: "/images/Scotch_bonnet.png", alt: "Tree bark" },
  { src: "/images/vanila.png", alt: "Chillies" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-[5vh] px-[5vw]">
        <Gallery images={images} />
      </div>
      <Footer />
    </div>
  );
}
