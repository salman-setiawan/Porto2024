import React from 'react'
import Navbar from '../../components/Navbar'
import FAB from '../../components/FloatButton'
import Copyright from '../../components/Copyright'

const AnotherIslandGallery = () => {
  return (
    <div className="bg111 min-h-screen text-[#d3d3d3]">
      <div className="fixed top-0 w-full">
        <Navbar 
          url1='/collection'
          text1='go back'
          url2='mailto:salmansetiawan88@gmail.com'
          text2='hire me'
        />
      </div>
      <div className="flex justify-center max-h-screen pt-[64px] pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 px-4 overflow-y-auto">
          <img src="/assets/anotherisland/gallery/screen1.webp" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen2.webp" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen3.webp" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen4.webp" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen5.webp" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen6.webp" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen7.webp" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen8.webp" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen9.webp" alt="" className="" />
          <img src="/assets/anotherisland/gallery/screen10.webp" alt="" className="" />
        <div className="pb-12"></div>
        </div>
      </div>
      <FAB
        url='/content/anotherisland/articleview'
        text='See Process Design'
      />
      <div className="fixed bottom-0 w-full">
        <Copyright />
      </div>
    </div>
  )
}

export default AnotherIslandGallery