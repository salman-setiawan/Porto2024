import React from 'react'
import Navbar from '../../components/Navbar'
import FAB from '../../components/FloatButton'
import Copyright from '../../components/Copyright'

const EdufamsGallery = () => {
  return (
    <div className="bg111 text-[#d3d3d3]">
      <div className="fixed top-0 w-full">
        <Navbar 
          url1='/collection'
          text1='go back'
          url2='mailto:salmansetiawan88@gmail.com'
          text2='hire me'
        />
      </div>
      <div className="flex justify-center max-h-screen pt-[64px] pb-8">
        <div className="overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            <div className="hidden lg:block flex-col space-y-4">
              <img src="/assets/edufams/gallery/screen1.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen8.webp" alt="" className="" />
            </div>
            <div className="hidden lg:block flex-col space-y-4">
              <img src="/assets/edufams/gallery/screen2.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen4.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen6.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen10.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen11.webp" alt="" className="" />
            </div>
            <div className="hidden lg:block flex-col space-y-4">
              <img src="/assets/edufams/gallery/screen3.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen5.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen7.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen9.webp" alt="" className="" />
            </div>
            <div className="hidden md:block lg:hidden flex-col space-y-4">
              <img src="/assets/edufams/gallery/screen1.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen3.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen5.webp" alt="" className="" />
            </div>
            <div className="hidden md:block lg:hidden flex-col space-y-4">
              <img src="/assets/edufams/gallery/screen2.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen4.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen6.webp" alt="" className="" />
            </div>
            <div className="md:hidden block flex-col space-y-4">
              <img src="/assets/edufams/gallery/screen1.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen2.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen3.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen4.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen5.webp" alt="" className="" />
              <img src="/assets/edufams/gallery/screen6.webp" alt="" className="" />
            </div>
            <div className="pb-4"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 px-4">
            <img src="/assets/edufams/gallery/screen12.webp" alt="" className="" />
            <img src="/assets/edufams/gallery/screen13.webp" alt="" className="" />
            <img src="/assets/edufams/gallery/screen14.webp" alt="" className="" />
            <img src="/assets/edufams/gallery/screen15.webp" alt="" className="" />
            <img src="/assets/edufams/gallery/screen16.webp" alt="" className="" />
            <img src="/assets/edufams/gallery/screen17.webp" alt="" className="" />
            <img src="/assets/edufams/gallery/screen18.webp" alt="" className="" />
            <img src="/assets/edufams/gallery/screen19.webp" alt="" className="" />
            <img src="/assets/edufams/gallery/screen20.webp" alt="" className="" />
            <img src="/assets/edufams/gallery/screen21.webp" alt="" className="" />
            <img src="/assets/edufams/gallery/screen22.webp" alt="" className="" />
            <img src="/assets/edufams/gallery/screen23.webp" alt="" className="" />
          </div>
          <div className="pb-16"></div>
        </div>
      </div>
      <FAB
        url='/content/edufams/articleview'
        text='See Process Design'
      />
      <div className="fixed bottom-0 w-full">
        <Copyright />
      </div>
    </div>
  )
}

export default EdufamsGallery