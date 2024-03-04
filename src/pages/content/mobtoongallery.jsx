import React from 'react'
import Navbar from '../../components/Navbar'
import FAB from '../../components/FloatButton'
import Copyright from '../../components/Copyright'

const MobtoonGallery = () => {
  return (
    <div className="bg111 text-[#d3d3d3]">
      <div className="fixed top-0 w-full">
        <Navbar 
          url1='/collection'
          icon1='/assets/home.svg'
        />
      </div>
      <div className="flex justify-center max-h-screen pt-[70px] pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:w-[1240px] items-center gap-8 px-4 overflow-y-auto">
          <img src="/assets/mobtoon/gallery/screen1.webp" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen2.webp" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen3.webp" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen4.webp" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen5.webp" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen6.webp" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen7.webp" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen8.webp" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen9.webp" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen10.webp" alt="" className="" />
          <img src="/assets/mobtoon/gallery/screen11.webp" alt="" className="" />
        </div>
        <div className="pb-12"></div>
      </div>
      <FAB
        url='/content/mobtoon/articleview'
        text='See Process Design'
      />
      <div className="fixed bottom-0 w-full">
        <Copyright />
      </div>
    </div>
  )
}

export default MobtoonGallery