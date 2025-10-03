import React from 'react'

export const VisionMissionCard = ({title,desc}) => {
  return (
    <div className='bg-white text-black w-full lg:w-[30vw] h-[50vh] flex items-center justify-center flex-col gap-5 rounded-3xl'>
        <h1 className='text-green-600 text-5xl font-bold'>{title}</h1>
        <p className='text-2xl px-5 font-medium text-center'>{desc}</p>
    </div>
  )
}
