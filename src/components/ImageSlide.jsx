import React from 'react'

const ImageSlide = ({ img }) => {
  return (
    <div className="flex justify-center px-4 pt-32 pb-52 h-screen">
      <img src={img} alt="showcase-img" className='object-contain' />
    </div>
  )
}

export default ImageSlide