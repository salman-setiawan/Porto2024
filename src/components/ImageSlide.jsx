import React from 'react'

const ImageSlide = ({ img }) => {
  return (
    <div className='flex justify-center'>
      <img src={img} alt="showcase-img" className='h-[380px] 2xl:h-[500px]' />
    </div>
  )
}

export default ImageSlide