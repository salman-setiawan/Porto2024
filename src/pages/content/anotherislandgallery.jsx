import React from 'react'
import Navbar from '../../components/Navbar'
import FAB from '../../components/FloatButton'

const AnotherIslandGallery = () => {
  return (
    <div className="bg-[#111111] min-h-screen text-[#d3d3d3]">
      <div className="fixed top-0 w-full">
        <Navbar 
          url1='/collection'
          icon1='/assets/home.svg'
        />
      </div>
      <div className="flex justify-center max-h-screen pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 px-4 overflow-y-auto">
          <img src="/assets/anotherisland/gallery/screen1.jpg" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen2.jpg" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen3.jpg" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen4.jpg" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen5.jpg" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen6.jpg" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen7.jpg" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen8.jpg" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen9.jpg" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen10.jpg" alt="" className="" />
        </div>
        <div className="pb-1"></div>
      </div>
      <FAB
        url='/content/anotherisland/articleview'
        text='See Process Design'
      />
      <div className="fixed bottom-0 w-full">
          <div className="flex justify-center pt-2 bg-[#111111] bg-opacity-90">
              <p className="text-[10px] text-[#9F9F9F] mb-3">copyright @ 2024</p>
          </div>
      </div>
    </div>
  )
}

export default AnotherIslandGallery