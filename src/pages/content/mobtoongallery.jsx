import React from 'react'
import Navbar from '../../components/Navbar'
import FAB from '../../components/FloatButton'

const MobtoonGallery = () => {
  return (
    <div className="bg-[#111111] min-h-screen text-[#d3d3d3]">
      <div className="fixed top-0 w-full">
        <Navbar 
          url1='/collection'
          icon1='/assets/home.svg'
        />
      </div>
      <div className="flex justify-center max-h-screen pt-20 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:w-[1240px] items-center gap-8 px-4 overflow-y-auto">
          <img src="/assets/mobtoon/gallery/screen1.png" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen2.png" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen3.png" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen4.png" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen5.png" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen6.png" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen7.png" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen8.png" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen9.png" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen10.png" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen11.png" alt="" className="" />
        </div>
        <div className="pb-1"></div>
      </div>
      <FAB
        url='/content/mobtoon/articleview'
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

export default MobtoonGallery