import Image from "next/image";
import Link from "next/link";
import Plant from "@/assets/images/plant_img.png";
import ProductSection from "../ui/ProductSection";
import Testimonial from "../ui/Testimonial";

export default function AboutUs2() {
  return (
    <section className="relative h-[300vh] bg-[#0D893F] bg-[url('/images/aboutus2_bg.png')] bg-no-repeat bg-cover bg-center">
      {/* Dark overlay and gradients */}
      <div class="absolute top-0 w-screen h-[300vh] bg-black/40"></div>
      <div class="absolute w-screen h-[20vh] -top-[10vh] bg-gradient-to-b from-[rgba(37,75,73,0)] via-[rgba(12,57,60,0.81)] to-[rgba(12,57,60,1)]"></div>
      <div class="absolute w-screen h-[30vh] top-[10vh] bg-gradient-to-t from-[rgba(37,75,73,0)] via-[rgba(12,57,60,0.82)] to-[rgba(12,57,60,1)]"></div>

      {/* Content container */}
      <div className="relative z-30">
        {/* Green Roots Section */}
        <div className="flex flex-col md:flex-row items-center justify-center h-screen px-[5vw] gap-8">
          {/* Text */}
          <div className="md:w-1/3 flex flex-col gap-4">
            <h3 className="text-3xl font-semibold">Green Roots</h3>
            <h1 className="text-6xl font-bold">Strong Futures</h1>
            <p className="text-gray-200">
              Oxiaura Plantation Pvt. Ltd. is more than just a plantation
              company—we are a forward-thinking enterprise that blends
              innovation with sustainable, eco-friendly practices at every stage
              of our operations. By embracing modern agricultural techniques,
              renewable energy, and responsible resource management, we ensure
              that our products not only meet but exceed the highest standards
              of quality and environmental stewardship.
              <br />
              Our commitment goes beyond production; it is about creating a
              positive impact on communities, ecosystems, and future
              generations. From cultivating with care to adopting green
              technologies, we strive to preserve biodiversity, reduce our
              carbon footprint, and foster a culture of responsibility across
              the industry.
              <br />
              At Oxiaura, we believe sustainability is not an option—it’s the
              foundation of long-term success. With every product we deliver, we
              aim to inspire trust, promote well-being, and shape a greener,
              more resilient future for the world.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-2/3 relative">
            <Image
              src={Plant}
              alt="plant_img"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Products Section */}
        <ProductSection />

        {/* Client Comments Section */}
        <Testimonial />
      </div>
    </section>
  );
}
