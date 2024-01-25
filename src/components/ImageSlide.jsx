import React from 'react'

const ImageSlide = ({ img }) => {
  return (
    <div className='flex justify-center'>
      <img src={img} alt="" className='md:h-[480px] md:pt-20 lg:pt-0' />
    </div>
  )
}

export default ImageSlide