import React from 'react'
import Navbar from '../../components/Navbar'
import Copyright from '../../components/Copyright'
import ImageSkeleton from '../../components/ImageSkeleton'
import Slider from '../../components/Slider'
import CardStandard from '../../components/cardcontent/CardStandard'

const InstaGallery = () => {
  return (
    <div className="bg111 text-[#d3d3d3]">
      <div className="fixed top-0 w-full">
        <Navbar 
          url1='/collection'
          icon1='/assets/home.svg'
        />
      </div>
      <div className="flex justify-center max-h-screen pt-[70px] pb-8">
        <div className="px-4 overflow-y-auto">
          <div className="flex flex-col space-y-4 lg:hidden">
            <Slider>
              <img src="/assets/uigallery/screen1.webp" alt="" className='h-[640px] max-w-fit' />
            </Slider>
            <Slider>
              <img src="/assets/uigallery/screen2.webp" alt="" className='h-[640px] max-w-fit' />
            </Slider>
          </div>
          <div className="flex-col space-y-4 hidden lg:block">
            <img src="/assets/uigallery/screen1.webp" alt="" className='' />
            <img src="/assets/uigallery/screen2.webp" alt="" className='' />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Copyright />
      </div>
    </div>
  )
}

export default InstaGallery