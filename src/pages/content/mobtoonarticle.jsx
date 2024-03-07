import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../components/Navbar'
import Paragraph from '../../components/Paragraph'
import CardStandard from '../../components/cardcontent/CardStandard'
import FAB from '../../components/FloatButton'
import CardEvaluation from '../../components/cardcontent/CardEvaluation'
import CTAGallery from '../../components/CTAGallery'
import Copyright from '../../components/Copyright'
import Slider from '../../components/Slider'

const MobtoonArticle = () => {
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
            desc1='Lately I have been really enjoying reading manhwa (also known as webtoons, Korean comics) of any genre. From my love for manhwa, I thought to myself “why not I create my own manhwa app design”, and here are the results of the design I created.'
            disclaimer='The images used on this website are for illustrative purposes only. All images used are the property of their respective owners.'
          />
          <Paragraph 
            title="What's User Think"
            desc1='Lately I have been really enjoying reading manhwa (also known as webtoons, Korean comics) of any genre. From my love for manhwa, I thought to myself “why not I create my own manhwa app design”, and here are the results of the design I created.'
            desc2='In this case, I conducted user persona research through random interviews with three of my friends, and then summarized their opinions into key points as references in designing the application.'
            desc3='Here are their opinions on their experiences in reading manhwa so far'
          />
          <Slider>
            <CardStandard
              avatar='/assets/avatar.png' 
              title1='Achmad Rivaldo'
              desc1='Developer'
              title2='Goals'
              desc2='A simple application interface with easy-to-use functionality.'
              title3='Pain Points'
              desc3='A background color with a list of manhwa that contrasts or darkens each other (poor color illumination), and for some websites, they use separate accounts to comment on the manhwa being read, which is quite inconvenient.'
            />
            <CardStandard 
              avatar='/assets/avatar.png' 
              title1='Riski Kurniawan'
              desc1='Private Employee'
              title2='Goals'
              desc2='I want to find and read manhwa quickly and easily.'
              title3='Pain Points'
              desc3='Because I usually only read, I want to do it without having to register or authenticate an account first.'
            />
            <CardStandard 
              avatar='/assets/avatar.png' 
              title1='Zulfikar Badarudin'
              desc1='College Student'
              title2='Goals'
              desc2='I usually read manhwa to fill my spare time, for the display itself I like minimalist and easy-to-use.'
              title3='Pain Points'
              desc3='Sometimes, some reading providers have a strange flow when opening manhwa, it can immediately display the chapter (2 steps: opening manhwa, choosing chapter) or require additional steps (3 steps: opening manhwa, accessing the chapter list, choosing chapter). Then there are many popup ads and unnecessary parts.'
            />
          </Slider>
          <Paragraph 
            title="Here's The Idea"
            desc1="I am designing a brand called 'mobtoon', which is short for mobile cartoon. mobtoon is a mobile-based application for reading web comic. In this design, my objective is to create an engaging and intuitive user interface for its users."
          />
          <img src="/assets/mobtoon/content1.png" alt="" className="" />
          <Paragraph 
            desc2='I started by seeking inspiration and references through a moodboard. I leverage this to determine a comfortable user experience while using the application.'
            desc3="For the brand's color, I chose green because it has a psychologically calming and refreshing effect. The use of green in design can help create a more serene atmosphere, reduce stress, and enhance the reading."
            desc4="Lastly, to aid the reading experience, a font with good readability is necessary. Therefore, I chose the 'Plus Jakarta Sans' font, which has a modern look."
          />
          <div className="w-full">
            <CTAGallery />
          </div>
          <Paragraph 
            title="Feedback"
            desc1='Before initiating the application design process, as the designer, I conducted research by interviewing several individuals (in this case, readers of manhwa) to understand their experiences as users while reading manhwa on websites or mobile applications.'
            desc2='In this case, I conducted Moderated Usability Testing with the aim of gathering feedback and direct observations from users as they interacted with the product or system. Here, a moderator guided users through specific tasks while observing and noting their responses. The metrics evaluated included the time taken to complete tasks, success rate, error count, and user satisfaction.'
            disclaimer='For the results, they are still in the development stage.'
          />
          {/* <div className="grid grid-cols-2 gap-2 items-center">
            <CardEvaluation
              avatar='/assets/avatar.png' 
              title1='Achmad Rivaldo'
              desc1='Developer'
              metric1='Task Complete'
              result1='5 out of 6'
              metric2='Estimated Time'
              result2='10 minutes'
              title2='Review'
              desc2='Tampilan aplikasi yang sederhana dengan fungsionalitas yang mudah digunakan.'
              title3='Feedback'
              desc3='warna background dengan list manhwa yang saling mencolok atau saling gelap (iluminasi warna tidak baik), dan untuk beberapa website mereka menggunakan akun terpisah untuk melakukan komentar pada manhwa yang dibaca sehingga cukup merepotkan.'
            />
            <CardEvaluation
              avatar='/assets/avatar.png' 
              title1='Achmad Rivaldo'
              desc1='Developer'
              metric1='Task Complete'
              result1='5 out of 6'
              metric2='Estimated Time'
              result2='10 minutes'
              title2='Review'
              desc2='Tampilan aplikasi yang sederhana dengan fungsionalitas yang mudah digunakan.'
              title3='Feedback'
              desc3='warna background dengan list manhwa yang saling mencolok atau saling gelap (iluminasi warna tidak baik), dan untuk beberapa website mereka menggunakan akun terpisah untuk melakukan komentar pada manhwa yang dibaca sehingga cukup merepotkan.'
            />
            <CardEvaluation
              avatar='/assets/avatar.png' 
              title1='Achmad Rivaldo'
              desc1='Developer'
              metric1='Task Complete'
              result1='5 out of 6'
              metric2='Estimated Time'
              result2='10 minutes'
              title2='Review'
              desc2='Tampilan aplikasi yang sederhana dengan fungsionalitas yang mudah digunakan.'
              title3='Feedback'
              desc3='warna background dengan list manhwa yang saling mencolok atau saling gelap (iluminasi warna tidak baik), dan untuk beberapa website mereka menggunakan akun terpisah untuk melakukan komentar pada manhwa yang dibaca sehingga cukup merepotkan.'
            />
            <CardEvaluation
              avatar='/assets/avatar.png' 
              title1='Achmad Rivaldo'
              desc1='Developer'
              metric1='Task Complete'
              result1='5 out of 6'
              metric2='Estimated Time'
              result2='10 minutes'
              title2='Review'
              desc2='Tampilan aplikasi yang sederhana dengan fungsionalitas yang mudah digunakan.'
              title3='Feedback'
              desc3='warna background dengan list manhwa yang saling mencolok atau saling gelap (iluminasi warna tidak baik), dan untuk beberapa website mereka menggunakan akun terpisah untuk melakukan komentar pada manhwa yang dibaca sehingga cukup merepotkan.'
            />
          </div> */}
          <div className="pb-6 md:pb-1"></div>
        </div>
      </div>
      <FAB
        url='/content/mobtoon/galleryview'
        text='See Gallery Design'
      />
      <div className="fixed bottom-0 w-full">
        <Copyright />
      </div>
    </div>
  )
}

export default MobtoonArticle