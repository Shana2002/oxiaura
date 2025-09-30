import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import HeroImage from '@/assets/images/hero_image.png'
import HeroImage2 from '@/assets/images/hero_image2.png'

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-between px-[5vw] bg-gradient-to-r from-[#CDFFB7] to-white">
      {/* Left: Text Content */}
      <div className="flex flex-col max-w-[30vw] gap-4">
        <h2 className="text-[7vh] font-medium text-green-700 leading-none">
          Connecting
        </h2>
        <h1 className="text-[15vh] font-bold text-green-700 leading-tight">
          Nature
        </h1>
        <h3 className="text-[4.3vh] font-semibold leading-none">
          with <span className="text-green-700">Oxiaura Plantation</span>
        </h3>
        <p className="mt-6 mb-8 text-lg text-gray-700">
          From eco-conscious sourcing to worldwide delivery, Oxiaura is your
          bridge between nature and innovation.
        </p>

        <Link
          href="#"
          className="relative flex items-center justify-between bg-neutral-900 hover:bg-green-700 text-white rounded-full px-4 py-3 w-[15vw] transition duration-300"
        >
          <h4 className="px-2">Discover Sustainability</h4>
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black">
            <FaArrowRight  className="fa-solid fa-arrow-right"/>
          </span>
        </Link>
      </div>

      {/* Right: Images */}
      <div className="relative w-[60vw] h-screen">
        <Image
          src={HeroImage}
          alt="Plantation"
          width={1045}
          height={700}
          className="absolute right-0 top-10 rounded-lg"
        />
        <Image
          src={HeroImage2}
          alt="Plantation"
          width={500}
          height={400}
          className="absolute right-0 top-[66vh] rounded-lg"
        />
      </div>
    </section>
  );
}
