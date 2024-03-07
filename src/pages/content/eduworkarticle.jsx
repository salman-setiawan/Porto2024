import React from 'react'
import Navbar from '../../components/Navbar'
import FAB from '../../components/FloatButton'
import Copyright from '../../components/Copyright'
import Paragraph from '../../components/Paragraph'
import Slider from '../../components/Slider'
import CardStandard from '../../components/cardcontent/CardStandard'
import CTAGallery from '../../components/CTAGallery'
import DocumentLink from '../../components/DocumentLink'

const EduworkArticle = () => {
  return (
    <div className='bg111 text-[#d3d3d3]'>
      <div className="fixed top-0 w-full">
        <Navbar 
          url1='/collection'
          icon1='/assets/home.svg'
        />
      </div>
      <div className="flex justify-center max-h-screen pt-[70px] pb-8">
        <div className="flex flex-col space-y-8 px-4 md:w-[720px] overflow-y-auto">
          <Paragraph 
            desc1='In July, I had the opportunity to do an internship at Eduwork, a Yogyakarta-based education platform company.'
            desc2='Eduwork plans to develop a new platform, specifically a community-based website. As a UI/UX Designer, I had the opportunity to participate in this project.'
            disclaimer="This portfolio showcases the work and learning process during my internship at Eduwork. All UI/UX projects presented here are fully owned by the company. I am ready to share this portfolio as evidence of my progress during the internship, with full respect for Eduwork's ownership rights."
          />
          <div className="w-full py-2.5 px-3 bg-[#7070ca] bg-opacity-10">
            <DocumentLink
              url='https://eduwork.id/v2/mentor'
              icon='/assets/document.svg'
              text='Check the Result here'
            />
          </div>
          <Paragraph 
            title="Behind the Scene"
            desc1='So, during this internship, I was placed in the Unicorn team, which consists of 2 product managers, 2 UI/UX designers, and 1 copywriter. This team was tasked with creating the landing page for the Eduwork community website that will be launched in the future.'
          />
          <img src="/assets/eduwork/article/teams.png" alt="" className="w-full" />
          <Paragraph 
            desc2='The work environment itself was conducted remotely, with morning timeline meetings with the team for brainstorming sessions. Design sessions were conducted flexibly, following the contracted working hours. The day was concluded with an afternoon meeting with the CEO to present the design progress made that day.'
          />
          <Paragraph 
            title="Design Process"
            desc1="Here is the flow of the design process that I undertook with the team during this internship."
          />
          <img src="/assets/eduwork/article/flow.png" alt="" className="" />
          <Paragraph 
            desc1='The first thing we did was to conduct brainstorming sessions every morning with the entire team via Zoom meetings. The purpose of these brainstorming sessions was to generate ideas and concepts for the features and designs to be developed, such as creating mood boards.'
          />
          <img src="/assets/eduwork/article/process1.png" alt="" className="" />
          <Paragraph 
            desc1='Moving into the design phase, we primarily worked on creating low-fidelity or high-fidelity designs based on the brainstorming results. Since there were two UI/UX designers in the team, we typically divided the work so that each person could produce their own design. This approach allowed us to compare and provide additional reference points during presentation sessions.'
          />
          <img src="/assets/eduwork/article/process2.png" alt="" className="" />
          <div className="w-full">
            <CTAGallery />
          </div>
          <Paragraph 
            desc1='Entering the presenting phase, which was a session held by the entire team and division every afternoon to present the progress made each day. During these presentations, feedback would be provided by Mr. Dodi, the CEO, regarding any improvements needed or if we could proceed to the prototyping stage.'
          />
          <Paragraph 
            title="Their Opinion"
            desc1='So, during this internship, I was placed in the Unicorn team, which consists of 2 product managers, 2 UI/UX designers, and 1 copywriter. This team was tasked with creating the landing page for the Eduwork community website that will be launched in the future.'
          />
          <Slider>
            <CardStandard
              avatar='/assets/avatar.png' 
              title1='Pak Dodi'
              desc1='as a CEO Eduwork'
              desc2={(
                <p className='text-white'>Salman, thank you for your contribution to Eduwork. Your design results have been excellent, among the best compared to possibly 10 others. Your design taste is impeccable, and you're ready to go. You don't need much guidance; you can already capture what is expected. Good job! Thank you!</p>
              )}
            />
            <CardStandard 
              avatar='/assets/avatar.png' 
              title1='Agung'
              desc1='as a Product Manager'
              desc2={(
                <p className='text-white'>It's been a pleasure working with Salman. He has exceptional abilities in understanding user needs and designing intuitive solutions. Additionally, his strong communication skills make him a valuable asset to the team. I believe Salman has great potential to evolve into a reliable UI UX designer.</p>
              )}
            />
            <CardStandard
              avatar='/assets/avatar.png' 
              title1='Izzah'
              desc1='as an UI/UX Designer'
              desc2={(
                <p className='text-white'>Salman has been a valuable designer in our project. He has exceptional creativity in designing attractive and functional interfaces. Additionally, he is very responsive to feedback and has the ability to adapt to rapid changes.</p>
              )}
            />
          </Slider>
          <div className="pb-6 md:pb-1"></div>
        </div>
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