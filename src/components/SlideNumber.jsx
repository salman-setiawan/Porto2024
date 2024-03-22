import React from 'react'

const SlideNumber = ({current, totalCurrent}) => {
  return (
    <div className='fixed top-0 pt-[64px]'>
      <div className="w-screen flex justify-between px-6">
        <div className="flex flex-col">
          <p className='text-[12px]'>Drag left or right to change slide.</p>
          <p className='text-[12px]'>Click or tap to see content.</p>
        </div>
        <div className="flex space-x-2">
          <p className='text-[#B5B5B5] text-[12px]'>Slide</p>
          <p className='text-white text-[12px] font-semibold'>{current}</p>
          <p className='text-[#B5B5B5] text-[12px]'>of</p>
          <p className='text-white text-[12px] font-semibold'>{totalCurrent}</p>
        </div>
      </div>
    </div>
  )
}

export default SlideNumber