import React from 'react'
import Navbar from '../../components/Navbar'
import FAB from '../../components/FloatButton'

const EdufamsGallery = () => {
  return (
    <div className="bg-[#111111] min-h-screen text-[#d3d3d3]">
      <div className="fixed top-0 w-full">
        <Navbar 
          url1='/collection'
          icon1='/assets/home.svg'
        />
      </div>
      <div className="flex justify-center max-h-screen pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 jusitfy-start gap-4 px-4 overflow-y-auto">
          <img src="/assets/eduwork/gallery/screen1.png" alt="" className="" />
          <img src="/assets/eduwork/gallery/screen2.png" alt="" className="" />
          <img src="/assets/eduwork/gallery/screen3.png" alt="" className="" />
          <img src="/assets/eduwork/gallery/screen4.png" alt="" className="" />
          <img src="/assets/eduwork/gallery/screen5.png" alt="" className="" />
          <img src="/assets/eduwork/gallery/screen6.png" alt="" className="" />
          <div className="pb-16"></div>
        </div>
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

export default EdufamsGallery