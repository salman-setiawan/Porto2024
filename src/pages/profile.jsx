import React from 'react'
import Navbar from '../components/Navbar';
import CardSatu from '../components/cardprofil/CardSatu';
import CardDua from '../components/cardprofil/CardDua';
import CardTiga from '../components/cardprofil/CardTiga';

const Profile = () => {
  return (
    <div className="bg-[#111111] h-full text-white">
      <div className="fixed top-0 w-full">
          <Navbar title='Salman Setiawan' subtitle='UI Designer' icon1='/assets/home.svg' icon2='/assets/person.svg' icon3='/assets/contact_page.svg' />
      </div>
      <div className="flex justify-center pt-20">
        <div className="flex flex-col px-4 md:w-[720px] space-y-3">
          <img src="/assets/avatar.png" alt="" className="sm:h-[240px] rounded-md object-cover" />
          <CardSatu
            title='About Me'
            desc='An UI Designer with experience in conducting research, designing low-fidelity interfaces, developing design systems, creating hi-fidelity designs, and prototyping. My objective is to deliver exceptional user experiences by blending innovative design principles with a profound comprehension of user needs. With a solid foundation in visual design and interaction, my goal is to become a versatile designer with an agile mindset and a broad knowledge base in various technologies.'
          />
          <CardDua
            title='My Skills'
            chip1='User Interface Design'
            chip2='User Experience Design'
            chip3='Visual Communication'
            chip4='Interaction Design'
            bg1='[#006BCE]'
            bg2='[#006BCE]'
            bg3='[#006BCE]'
            bg4='[#006BCE]'
          />
          <CardDua
            title='Work Approach'
            chip1='Systematic design'
            chip2='Value right problem'
            chip3='User-centered design'
            chip4='Unique style'
            bg1='[#006BCE]'
            bg2='[#006BCE]'
            bg3='[#006BCE]'
            bg4='[#006BCE]'
          />
          <CardTiga
            title='My Picture'
            img='/assets/gallery1.jpg'
          />
          <CardDua
            title='Tools I Used'
            chip1='Figma'
            chip2='Notion'
            bg1='[#006BCE]'
            bg2='[#006BCE]'
          />
          <div className="flex flex-col p-4 bg-[#252525] rounded-lg">
            <div className="text-white space-y-2">
              <p className="font-medium text-lg">
                My Music
              </p>
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/5fplYr3ZzQv9lvXfIrENAz?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <CardDua
            title='Contact'
            chip1='LinkedIn'
            chip2='Instagram'
            bg1='[#006BCE]'
            bg2='[#006BCE]'
          />
            <div className="bottom-0 w-full">
              <div className="flex justify-center pt-2 bg-[#111111] bg-opacity-90">
                  <p className="text-[10px] text-[#9F9F9F] mb-4">copyright @ 2024</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile