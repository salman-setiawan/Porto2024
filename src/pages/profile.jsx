import React from 'react'
import Navbar from '../components/Navbar';
import CardProfile from '../components/cardcontent/CardProfile';
import ProfileImage from '../components/ProfileImage';
import { Link } from 'react-router-dom';
import Fade from '../components/motion/Fade';
import BGVid from '../components/motion/BGVid';

const Profile = () => {
  const images = [
    '/assets/bio/gallery1.webp',
    '/assets/bio/gallery2.webp',
    '/assets/bio/gallery3.webp',
    '/assets/bio/gallery4.webp',
    '/assets/bio/gallery5.webp',
  ];
  
  return (
    <div className="bg-[#111111] h-full text-white">
      <BGVid />
      <div className="fixed top-0 w-full">
        <Navbar 
          url1='/collection'
          text1='go back'
        />
      </div>
      <Fade>
        <div className="flex justify-center max-h-screen md:min-h-screen pt-20 pb-4">
          <div className="flex flex-col items-center px-4 md:px-8 w-[1360px] overflow-y-auto" style={{ zIndex: 1 }}>
            <div className="flex h-screen md:items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-10 gap-y-6 gap-x-10">
                <div className="flex flex-col space-y-6 xl:col-span-4">
                  <ProfileImage
                    images={images}
                  />
                  <CardProfile
                    title='About Me'
                    desc='An UI Designer with experience in conducting research, designing low-fidelity interfaces and hi-fidelity designs, developing design systems, and prototyping. My objective is to deliver exceptional user experiences by blending innovative design principles with a profound comprehension of user needs. With a solid foundation in visual design and interaction, my goal is to become a versatile designer with an agile mindset and a broad knowledge base in various technologies.'
                  />
                </div>
                <div className="flex flex-col space-y-6 xl:col-span-3">
                  <CardProfile
                    title='My Skills'
                    chip1='User Interface Design'
                    chip2='User Experience Design'
                    chip3='Visual Communication'
                    chip4='Interaction Design'
                    bg1='bg-[#30FFFC]'
                    bg2='bg-[#30FFFC]'
                    bg3='bg-[#30FFFC]'
                    bg4='bg-[#30FFFC]'
                  />
                  <CardProfile
                    title='Work Approach'
                    chip1='Systematic design'
                    chip2='Value right problem'
                    chip3='User-centered design'
                    chip4='Unique style'
                    chip5='Agile Thinking'
                    bg1='bg-[#30FFFC]'
                    bg2='bg-[#30FFFC]'
                    bg3='bg-[#30FFFC]'
                    bg4='bg-[#30FFFC]'
                    bg5='bg-[#30FFFC]'
                  />
                  <CardProfile
                    title='Tools I Used'
                    chip1='Figma'
                    chip2='Notion'
                    chip3='Framer'
                    chip4='Miro'
                    bg1='bg-[#30FFFC]'
                    bg2='bg-[#30FFFC]'
                    bg3='bg-[#30FFFC]'
                    bg4='bg-[#30FFFC]'
                  />
                </div>
                <div className="flex flex-col space-y-6 xl:col-span-3">
                  <CardProfile
                    desc='I can assist you in designing the user experience, interface, and interactions for the platform/application you desire. Please contact me via the email below.'
                  />
                  <Link to='mailto:salmansetiawan88@gmail.com' target="_blank" rel="noopener noreferrer" className='w-fit'>      
                    <p className="text-[16px] font-semibold underline underline-offset-2">salmansetiawan88@gmail.com</p>
                  </Link>
                  <CardProfile
                    desc='Or you can reach out to my social media for a more informal discussion.'
                  />
                  <div className="flex flex-col space-y-1">
                    <Link to='https://www.linkedin.com/in/salman-setiawan/' target="_blank" rel="noopener noreferrer" className='w-fit'>      
                      <p className="text-[16px] font-semibold underline underline-offset-2">Linkedin</p>
                    </Link>
                    <Link to='https://www.instagram.com/eisenflux/' target="_blank" rel="noopener noreferrer" className='w-fit'>      
                      <p className="text-[16px] font-semibold underline underline-offset-2">Instagram</p>
                    </Link>
                  </div>
                </div>
                <div className="pb-4 md:pb-1"></div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <div className="fixed bottom-0 w-full" style={{ zIndex: 1 }}>
        <div className="flex justify-center pt-2">
          <p className="text-[11px] text-[#9F9F9F] mb-3">copyright @ 2024</p>
        </div>
      </div>
    </div>
  )
}

export default Profile