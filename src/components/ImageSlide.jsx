import React from 'react'

const ImageSlide = ({ img }) => {
  return (
    <div className="flex justify-center px-4 pt-36 pb-48 md:pt-32 md:pb-52 h-screen">
      <img src={img} alt="showcase-img" className='object-contain floating-element' />
    </div>
  )
}

export default ImageSlide