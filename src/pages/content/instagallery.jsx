import React from 'react'
import Navbar from '../../components/Navbar'
import Copyright from '../../components/Copyright'

const InstaGallery = () => {
  return (
    <div className="bg-[#111111] min-h-screen text-[#d3d3d3]">
      <div className="fixed top-0 w-full">
        <Navbar 
          url1='/collection'
          icon1='/assets/home.svg'
        />
      </div>
      <div className="flex justify-center max-h-screen pt-[70px] pb-8">
        <div className="grid jusitfy-start gap-4 px-4 pb-4 overflow-y-auto">
          <img src="/assets/uigallery/screen1.webp" alt="" className="" />
          <img src="/assets/uigallery/screen2.webp" alt="" className="" />
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Copyright />
      </div>
    </div>
  )
}

export default InstaGallery