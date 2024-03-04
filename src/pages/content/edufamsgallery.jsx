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
          icon1='/assets/home.svg'
        />
      </div>
      <div className="flex justify-center max-h-screen pt-[70px] pb-8">
        <div className="overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            <div className="hidden lg:block flex-col space-y-4">
              <img src="/assets/edufams/gallery/screen1.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen8.png" alt="" className="" />
            </div>
            <div className="hidden lg:block flex-col space-y-4">
              <img src="/assets/edufams/gallery/screen2.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen4.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen6.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen10.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen11.png" alt="" className="" />
            </div>
            <div className="hidden lg:block flex-col space-y-4">
              <img src="/assets/edufams/gallery/screen3.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen5.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen7.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen9.png" alt="" className="" />
            </div>
            <div className="hidden md:block lg:hidden flex-col space-y-4">
              <img src="/assets/edufams/gallery/screen1.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen3.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen5.png" alt="" className="" />
            </div>
            <div className="hidden md:block lg:hidden flex-col space-y-4">
              <img src="/assets/edufams/gallery/screen2.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen4.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen6.png" alt="" className="" />
            </div>
            <div className="md:hidden block flex-col space-y-4">
              <img src="/assets/edufams/gallery/screen1.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen2.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen3.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen4.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen5.png" alt="" className="" />
              <img src="/assets/edufams/gallery/screen6.png" alt="" className="" />
            </div>
            <div className="pb-4"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 px-4">
            <img src="/assets/edufams/gallery/screen12.png" alt="" className="" />
            <img src="/assets/edufams/gallery/screen13.png" alt="" className="" />
            <img src="/assets/edufams/gallery/screen14.png" alt="" className="" />
            <img src="/assets/edufams/gallery/screen15.png" alt="" className="" />
            <img src="/assets/edufams/gallery/screen16.png" alt="" className="" />
            <img src="/assets/edufams/gallery/screen17.png" alt="" className="" />
            <img src="/assets/edufams/gallery/screen18.png" alt="" className="" />
            <img src="/assets/edufams/gallery/screen19.png" alt="" className="" />
            <img src="/assets/edufams/gallery/screen20.png" alt="" className="" />
            <img src="/assets/edufams/gallery/screen21.png" alt="" className="" />
            <img src="/assets/edufams/gallery/screen22.png" alt="" className="" />
            <img src="/assets/edufams/gallery/screen23.png" alt="" className="" />
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