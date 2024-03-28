import React from 'react'

const SlideNumber = ({current, totalCurrent, subject}) => {
  return (
    <div className='fixed top-0 pt-[64px] md:pt-[72px]'>
      <div className="w-screen flex flex-col-reverse md:flex-row md:justify-between px-6">
        <div className="flex flex-col">
          <p className='text-[12px]'>Drag left or right the image to change slide.</p>
          <p className='text-[12px]'>Click or tap the image to see more details.</p>
        </div>
        <div className="flex flex-col md:items-end">
          <div className="flex space-x-2 text-[12px]">
            <p className='text-[#B5B5B5]'>Slide</p>
            <p className='text-white font-semibold'>{current}</p>
            <p className='text-[#B5B5B5]'>of</p>
            <p className='text-white font-semibold'>{totalCurrent}</p>
          </div>
          <p className="text-[12px] text-white font-semibold hidden md:block">{subject}</p>
        </div>
      </div>
    </div>
  )
}

export default SlideNumber