import React from 'react'
import StoryCard from './StoryCard'

const StorySecion = ({ title, stories }) => {
  return (
    <section className="px-[5vw] my-12 text-black">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {stories.map((story, idx) => (
          <StoryCard key={idx} {...story} />
        ))}
      </div>
    </section>
  )
}

export default StorySecion