import React from 'react'
import Navbar from '../../components/Navbar'
import Copyright from '../../components/Copyright'
import FAB from '../../components/FloatButton'

const EduworkGallery = () => {
  return (
    <div className="bg111 text-[#d3d3d3]">
      <div className="fixed top-0 w-full">
        <Navbar 
          url1='/collection'
          icon1='/assets/home.svg'
        />
      </div>
      <div className="flex justify-center max-h-screen pt-[70px] pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 jusitfy-start gap-4 px-4 overflow-y-auto">
          <div className="hidden lg:block flex-col space-y-4">
            <img src="/assets/eduwork/gallery/screen1.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen4.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen7.webp" alt="" className="" />
          </div>
          <div className="hidden lg:block flex-col space-y-4">
            <img src="/assets/eduwork/gallery/screen2.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen5.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen8.webp" alt="" className="" />
          </div>
          <div className="hidden lg:block flex-col space-y-4">
            <img src="/assets/eduwork/gallery/screen3.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen10.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen11.webp" alt="" className="" />
          </div>
          <div className="hidden md:block lg:hidden flex-col space-y-4">
            <img src="/assets/eduwork/gallery/screen1.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen3.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen5.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen8.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen10.webp" alt="" className="" />
          </div>
          <div className="hidden md:block lg:hidden flex-col space-y-4">
            <img src="/assets/eduwork/gallery/screen2.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen4.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen7.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen11.webp" alt="" className="" />
          </div>
          <div className="md:hidden block flex-col space-y-4">
            <img src="/assets/eduwork/gallery/screen1.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen2.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen3.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen4.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen5.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen7.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen8.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen10.webp" alt="" className="" />
            <img src="/assets/eduwork/gallery/screen11.webp" alt="" className="" />
          </div>
        <div className="pb-12"></div>
        </div>
      </div>
      <FAB
        url='/content/eduwork/articleview'
        text='See Process Design'
      />
      <div className="fixed bottom-0 w-full">
        <Copyright />
      </div>
    </div>
  )
}

export default EduworkGallery