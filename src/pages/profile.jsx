import React from 'react'
import Navbar from '../components/Navbar';
import CardProfile from '../components/cardcontent/CardProfile';
import ProfileImage from '../components/ProfileImage';
import DocumentLink from '../components/DocumentLink';
import { Link } from 'react-router-dom';

const Profile = () => {
  const images = [
    '/assets/gallery1.jpg',
    '/assets/gallery2.jpg',
    '/assets/gallery3.jpg',
    '/assets/gallery4.jpg',
  ];
  
  return (
    <div className="bg-[#111111] h-full text-white">
      <div className="fixed top-0 w-full">
        <Navbar 
          url1='/collection'
          icon1='/assets/home.svg'
        />
      </div>
      <div className="flex justify-center md:items-center max-h-screen md:min-h-screen pt-20 pb-4">
        <div className="flex flex-col items-center px-4 md:w-[1200px] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10">
            <div className="flex flex-col space-y-6">
              <ProfileImage
                images={images}
              />
              <CardProfile
                title='About Me'
                desc='An UI Designer with experience in conducting research, designing low-fidelity interfaces, developing design systems, creating hi-fidelity designs, and prototyping. My objective is to deliver exceptional user experiences by blending innovative design principles with a profound comprehension of user needs. With a solid foundation in visual design and interaction, my goal is to become a versatile designer with an agile mindset and a broad knowledge base in various technologies.'
              />
            </div>
            <div className="flex flex-col space-y-6">
              <CardProfile
                title='My Skills'
                chip1='User Interface Design'
                chip2='User Experience Design'
                chip3='Visual Communication'
                chip4='Interaction Design'
                bg1='bg-[#8C00CE]'
                bg2='bg-[#8C00CE]'
                bg3='bg-[#8C00CE]'
                bg4='bg-[#8C00CE]'
              />
              <CardProfile
                title='Work Approach'
                chip1='Systematic design'
                chip2='Value right problem'
                chip3='User-centered design'
                chip4='Unique style'
                chip5='Agile Thinking'
                bg1='bg-[#8C00CE]'
                bg2='bg-[#8C00CE]'
                bg3='bg-[#8C00CE]'
                bg4='bg-[#8C00CE]'
                bg5='bg-[#8C00CE]'
              />
              <CardProfile
                title='Tools I Used'
                chip1='Figma'
                chip2='Notion'
                chip3='Framer'
                bg1='bg-[#8C00CE]'
                bg2='bg-[#8C00CE]'
                bg3='bg-[#8C00CE]'
              />
            </div>
            <div className="flex flex-col space-y-6">
              <CardProfile
                desc='I can assist you in designing the user experience, interface, and interactions for the platform/application you desire. Please contact me via the email below.'
              />
              <Link to='mailto:salmansetiawan88@gmail.com' target="_blank" rel="noopener noreferrer" className='w-fit'>      
                <p className="text-[14px] font-semibold underline underline-offset-2">salmansetiawan88@gmail.com</p>
              </Link>
              <CardProfile
                desc='Or you can reach out to my social media for a more informal discussion.'
              />
              <div className="flex flex-col space-y-1">
                <Link to='https://www.linkedin.com/in/salman-setiawan/' target="_blank" rel="noopener noreferrer" className='w-fit'>      
                  <p className="text-[14px] font-semibold underline underline-offset-2">Linkedin</p>
                </Link>
                <Link to='https://www.instagram.com/eisenflux/' target="_blank" rel="noopener noreferrer" className='w-fit'>      
                  <p className="text-[14px] font-semibold underline underline-offset-2">Instagram</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="pb-1"></div>
        </div>
      </div>
    </div>
  )
}

export default Profile