import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Gallery from "@/components/ui/Gallery";


const images = [
  { src: "/images/aboutus2_bg.png", alt: "Tea garden" },
  { src: "/images/blog_header.png", alt: "Passion fruit" },
  { src: "/images/plant1.png", alt: "Green plants" },
  { src: "/images/plant2.png", alt: "Watermelon" },
  { src: "/images/sandalwood.jpg", alt: "Seedling" },
  { src: "/images/plantation_image2.png", alt: "Seedling" },
  { src: "/images/plantation_image3.webp", alt: "Seedling" },
  { src: "/images/scotchbonnet.webp", alt: "Seedling" },
  { src: "/images/vanila_flower.png", alt: "vanila flower" },
  { src: "/images/TJC_mango.webp", alt: "TJC mango" },
  { src: "/images/passion_fruit.jpg", alt: "passion fruit" },
  { src: "/images/plants/vanila.png", alt: "vanila plants" },
  { src: "/images/plants/vanila2.jpg", alt: "vaila plants1" },
  { src: "/images/plants/watermelon.png", alt: "agarwood" },
  { src: "/images/plants/tjcmango.jpg", alt: "agarwood" },
  { src: "/images/plants/scotchbonnet.png", alt: "agarwood" },
  { src: "/images/plants/agarwood.webp", alt: "agarwood" },

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
