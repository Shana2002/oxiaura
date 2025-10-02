"use client";
import Image from "next/image";

export default function Gallery({ images }) {
  return (
    <section className="w-full px-6 py-12">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden rounded-2xl break-inside-avoid shadow-md group"
          >
            <Image
              src={img.src}
              alt={img.alt || "Gallery image"}
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
