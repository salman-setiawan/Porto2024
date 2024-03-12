import React from 'react'

const SlideNumber = ({current, totalCurrent}) => {
  return (
    <div className="fixed top-0 pt-[64px] md:w-screen right-0 pr-6">
      <div className="w-full justify-center items-center flex space-x-2">
        <p className='text-[#B5B5B5] text-[12px]'>Slide</p>
        <p className='text-white text-[12px] font-semibold'>{current}</p>
        <p className='text-[#B5B5B5] text-[12px]'>of</p>
        <p className='text-white text-[12px] font-semibold'>{totalCurrent}</p>
      </div>
    </div>
  )
}

export default SlideNumber