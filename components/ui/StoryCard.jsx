import React from 'react'

const StoryCard = ({image,title,desc}) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md relative">
      <img src={image} alt={title} className="w-full h-[50vh] object-cover" />
      <div className="absolute inset-0 bg-black/40 text-white p-4 flex flex-col justify-end">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  )
}

export default StoryCard