import React from 'react'
import Navbar from '../../components/Navbar'
import FAB from '../../components/FloatButton'
import Copyright from '../../components/Copyright'

const EduworkArticle = () => {
  return (
    <div className='bg111 text-[#d3d3d3]'>
      <div className="fixed top-0 w-full">
        <Navbar 
          url1='/collection'
          icon1='/assets/home.svg'
        />
      </div>
      <FAB
        url='/content/eduwork/galleryview'
        text='See Gallery Design'
      />
      <div className="fixed bottom-0 w-full">
        <Copyright />
      </div>
    </div>
  )
}

export default EduworkArticle