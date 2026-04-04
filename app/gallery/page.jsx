import GroupNavbar from '@/components/common/GroupNavbar'
import Gallery from '@/components/ui/Gallery';
import React from 'react'

const images = [
  { src: "/images/kegalle.jpeg", alt: "Tea garden" },
  { src: "/images/synergyaward.JPG", alt: "Tea garden" },
  { src: "/images/award.jpg", alt: "Tea garden" },
  { src: "/images/award2.jpg", alt: "Tea garden" },
  { src: "/images/plantation_image2.png", alt: "Seedling" },
  { src: "/images/kegalle.jpeg", alt: "Tea garden" },
  { src: "/images/blog_header.png", alt: "Passion fruit" },
  { src: "/images/sandalwood.jpg", alt: "Seedling" },
  { src: "/images/kegalleteam.jpeg", alt: "Tea garden" },
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

const page = () => {
  return (
    <div className="min-h-screen bg-white mt-10 overflow-x-hidden">
        <GroupNavbar always={true} />
        <div className='min-h-screen'>
            <Gallery images={images} />
        </div>
    </div>
  )
}

export default page