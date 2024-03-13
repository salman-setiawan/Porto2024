import React from 'react'

const SlideNumber = ({current, totalCurrent}) => {
  return (
    <div className='fixed top-0 pt-[64px]'>
      <div className="md:hidden">
        <div className="w-screen justify-end items-center flex space-x-2 px-6">
          <p className='text-[#B5B5B5] text-[12px]'>Slide</p>
          <p className='text-white text-[12px] font-semibold'>{current}</p>
          <p className='text-[#B5B5B5] text-[12px]'>of</p>
          <p className='text-white text-[12px] font-semibold'>{totalCurrent}</p>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="w-screen justify-center items-center flex space-x-2">
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