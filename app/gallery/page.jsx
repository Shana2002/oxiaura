import GroupNavbar from '@/components/common/GroupNavbar'
import Gallery from '@/components/ui/Gallery';
import React from 'react'

const images = [
  { src: "/images/aboutus2_bg.png", alt: "Tea garden" },
  { src: "/images/blog_header.png", alt: "Passion fruit" },
  { src: "/images/plant1.png", alt: "Green plants" },
  { src: "/images/plant2.png", alt: "Watermelon" },
  { src: "/images/sandalwood.jpg", alt: "Seedling" },
  { src: "/images/plants/Scotch_bonnet.png", alt: "Tree bark" },
  { src: "/images/plants/vanila.png", alt: "Chillies" },
  { src: "/images/aboutus2_bg.png", alt: "Tea garden" },
  { src: "/images/blog_header.png", alt: "Passion fruit" },
  { src: "/images/plants/plant1.png", alt: "Green plants" },
  { src: "/images/plants/plant2.png", alt: "Watermelon" },
  { src: "/images/plants/sandalwood.jpg", alt: "Seedling" },
  { src: "/images/plants/Scotch_bonnet.png", alt: "Tree bark" },
  { src: "/images/plants/vanila.png", alt: "Chillies" },
];

const page = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
        <GroupNavbar always={true} />
        <div className='min-h-screen'>
            <Gallery images={images} />
        </div>
    </div>
  )
}

export default page