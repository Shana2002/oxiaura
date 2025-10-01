import Image from "next/image";
import Link from "next/link";
import Mountain from '@/assets/images/mountain.png'
import LogoLarge from '@/assets/images/logo_large.png'

export default function AboutUs() {
  return (
    <section className="relative bg-gradient-to-r from-[#CDFFB7] to-white min-h-screen overflow-hidden py-8 md:py-2">
      
      {/* Bottom Background Image - Adjusted for better mobile visibility */}
      <Image
        src={Mountain}
        alt="about_us"
        // Use a smaller height on small screens, adjust bottom position responsively
        className="absolute bottom-[-7vh] md:bottom-[-40vh] w-screen md:h-[80vh] object-cover -z-0"
      />

      {/* Content Container - Flex direction changes on mobile */}
      <div className="flex flex-col md:flex-row justify-center items-center h-full md:min-h-[70vh] px-6 lg:px-16 pt-2 md:pt-0">
      
        {/* Logo Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0">
          <Image
            src={LogoLarge}
            alt="logo"
            // Set max-width for control, and a responsive width
            className="w-4/5 max-w-sm md:max-w-md lg:max-w-xl"
          />
        </div>

        {/* About Text Section - Text alignment changes responsively */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:mt-[0.5vh] md:text-left mt-[-10vh]">
          
          {/* Responsive Heading Sizes */}
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Growing Sustainability,
          </h2>
          <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] text-green-700 leading-none mt-1">
            Creating Value
          </h1>
          
          {/* Responsive Paragraph Width */}
          <p className="mt-4 text-gray-700 max-w-xl md:max-w-xl lg:max-w-xl px-2 md:px-0">
            Oxiaura Plantation Pvt. Ltd. leads the way in sustainable plantation
            management and eco-friendly product innovation. We transform land
            into thriving, responsible ecosystems that benefit both nature and
            local communities. By combining quality products with profitable
            investment opportunities, we create lasting value through
            sustainability, technology, and strong partnerships.
          </p>
          
          {/* Link */}
          <Link
            href="#"
            className="mt-6 bg-black text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300 shadow-lg"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}