import React from 'react'
import Navbar from '../../components/Navbar'
import Paragraph from '../../components/Paragraph'
import DocumentLink from '../../components/DocumentLink'
import Copyright from '../../components/Copyright'
import CardStandard from '../../components/cardcontent/CardStandard'
import Quote from '../../components/Quote'
import FAI from '../../components/FloatButtonTwo'

const DuaDelapansArticle = () => {
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
        <div className="flex flex-col space-y-8 px-4 md:w-[720px] overflow-y-auto">
          <Paragraph 
            desc1="This is a freelance project undertaken by me as a UI/UX designer and one of my colleagues as a full-stack developer. The client requested the design and development of a website for their company's book catalog."
          />
          <div className="w-full py-2.5 px-3 bg-[#7070ca] bg-opacity-10">
            <DocumentLink
              url='https://duadelapans.com'
              icon='/assets/document.svg'
              text='Check the result here.'
            />
          </div>
          <Paragraph
            title='The Process' 
            desc1="At the outset, the client introduced us to their company and what they desired during an online meeting. They wanted a website showcasing their collection of books as publishers from several of their authors. On this website, users would be able to select their preferred books, view general information about them, and then be directed to their online store to make a purchase."
            desc2="In addition to the book catalog, they also wanted a page to manage the books they upload to the website, and a page containing their company profile, including the company's address, social media, and their subsidiaries."
            desc3="To facilitate clearer information, I created a map by organizing the information obtained from the client and then developing it with several references I found on the internet. Here are the results."
          />
          <img src="/assets/duadelapans/article/mindmap.webp" alt="" className="w-full" />
          <Paragraph
            desc1="The image above depicts the overall structure of the website to be designed, with dualapans.com as the domain. The website consists of a homepage and subpages containing website features such as a book catalog and information about the company. Additionally, each page will be filled with various content as shown in the image. Each page also includes a navigation bar and footer component containing content as depicted in the image."
            desc2="With the information I gathered, I immediately worked on the UI mockup according to the client's request for faster results. The mockup process itself took 2 days, here is the design process."
          />
          <div className="flex flex-col space-y-2">
            <Quote 
              text={(
                <>
                  <p>First, I design the style of the website based on what the client wants. From there, I can determine what kind of website will be created, starting from colors, typography, and others.</p>
                  <p>From the information I gathered, the client wants the colors blue and pink to be present on their website. I then tried to blend both colors as the background color on the website by creating a gradient. To make it more engaging, I added texture to the background as shown below.</p>
                  <img src="/assets/duadelapans/article/ui1.webp" alt="" className="w-full py-4" />
                  <img src="/assets/duadelapans/article/ui2.webp" alt="" className="w-full pb-4" />
                  <p>Then I tried to expand the blue color into the call-to-action color, as can be seen in the image below.</p>
                </>
              )}
            />
            <Quote 
              text={(
                <>
                  <img src="/assets/duadelapans/article/ui3.webp" alt="" className="w-full py-4" />
                  <p>Next, for the typography, I am using the font from Roboto Slab, which was requested by the client after discussing various font options that I found on Google Fonts.</p>
                </>
              )}
            />
            <Quote 
              text={(
                <>
                  <p>Then, for the website layout, I created it based on the mapping I made earlier and some design references I found on platforms like Dribbble and Gramedia as the main examples. You can see the overall result by clicking the "See Website" button.</p>
                </>
              )}
            />
          </div>
          <Paragraph
            desc1="After completing the mockup process, we immediately scheduled an online meeting to discuss whether the concept of the designed mockup met the client's expectations before proceeding to the website development stage."
            desc2="During the meeting, there were certainly some revisions made on the process. This way, the design continued to be refined until it met the client's expectations. Once the client was satisfied with the final outcome of the mockup, we proceeded to the website development stage, which was carried out by the full-stack developer."
          />
          <div className="pb-6 md:pb-1"></div>
        </div>
      </div>
      <FAI
        url='https://duadelapans.com'
        text='See Website'
      />
      <div className="fixed bottom-0 w-full">
        <Copyright />
      </div>
    </div>
  )
}

export default DuaDelapansArticle