import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import StorySecion from "@/components/ui/StorySecion";

export default function Home() {
  const stories = [
    {
      image: "/images/Chille.png",
      title: "Red Chilli project",
      desc: "From farm to flavor—our red chillies...",
    },
    {
      image: "/images/plant3.png",
      title: "Red Chilli project",
      desc: "From farm to flavor—our red chillies...",
    },
    {
      image: "/images/plant3.png",
      title: "Red Chilli project",
      desc: "From farm to flavor—our red chillies...",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      <section className="overflow-hidden h-[70vh] flex items-center justify-center flex-col">
        <div className="relative w-[90vw] h-[50vh] bg-[url('/images/blog_header.png')] bg-cover bg-center rounded-4xl flex items-center ">
          <div className="absolute w-full h-full bg-black opacity-20 "></div>
          <div className="px-[5vw] z-30">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Browns Investments Acquires FLMC Plantations
            </h1>
            <p className="mt-3 max-w-2xl">
              Browns Investments PLC (part of the LOLC Group) acquired FLMC
              Plantations Pvt Ltd for LKR 4.8 billion
            </p>
            <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
              Read full article
            </button>
          </div>
          
        </div>
      </section>
      <StorySecion title="Top rated stories" stories={stories} />
      <StorySecion title="Posted by Oxiaura" stories={stories} />
      <StorySecion title="Everything Green" stories={stories} />
      <Footer />
    </div>
  );
}
