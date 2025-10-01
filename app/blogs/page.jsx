import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import StorySecion from "@/components/ui/StorySecion";
import { plantationBlogs } from "@/assets/data.js";
import Link from "next/link";

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
        <div
          className={`relative w-[90vw] h-[50vh]  rounded-4xl flex items-center `}
          style={{
            backgroundImage: `url(${plantationBlogs[0].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute w-full h-full bg-black opacity-40 rounded-4xl "></div>
          <div className="px-[5vw] z-30">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {plantationBlogs[0].title}
            </h1>
            <p className="mt-3 max-w-2xl line-clamp-2">
              {plantationBlogs[0].description}
            </p>

            <Link
              href={`/blogs/${plantationBlogs[0].slug}`}
              className="inline-block mt-10 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
            >
              Read full article
            </Link>
          </div>
        </div>
      </section>
      <StorySecion
        title="Top rated stories"
        stories={plantationBlogs.slice(1, 4)}
      />
      {/* <StorySecion title="Posted by Oxiaura" stories={stories} />
      <StorySecion title="Everything Green" stories={stories} /> */}
      <Footer />
    </div>
  );
}
