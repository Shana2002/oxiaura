import Image from "next/image";
import Link from "next/link";
import Mountain from '@/assets/images/mountain.png'
import LogoLarge from '@/assets/images/logo_large.png'


export default function AboutUs() {
  return (
    <section className="relative bg-gradient-to-r from-[#CDFFB7] h-screen to-white overflow-hidden">
      {/* Bottom Background Image */}
      <Image
        src={Mountain}
        alt="about_us"
        width={1920}
        height={600}
        className="absolute bottom-[-22vh] w-screen"
      />

      <div className="flex justify-center items-center h-[60vh] px-[5vw]">
        {/* Logo Section */}
        <div className="w-[45vw] flex items-center justify-center">
          <Image
            src={LogoLarge}
            alt="logo"
            width={600}
            height={400}
            className="w-[35vw]"
          />
        </div>

        {/* About Text Section */}
        <div className="w-[45vw] flex flex-col justify-center items-end text-right">
          <h2 className="font-bold text-[54px] leading-tight">
            Growing Sustainability,
          </h2>
          <h1 className="font-bold text-[100px] text-green-700 leading-none">
            Creating Value
          </h1>
          <p className="mt-4 text-gray-700 max-w-[40vw]">
            Oxiaura Plantation Pvt. Ltd. leads the way in sustainable plantation
            management and eco-friendly product innovation. We transform land
            into thriving, responsible ecosystems that benefit both nature and
            local communities. By combining quality products with profitable
            investment opportunities, we create lasting value through
            sustainability, technology, and strong partnerships.
          </p>
          <Link
            href="#"
            className="mt-6 bg-black text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
