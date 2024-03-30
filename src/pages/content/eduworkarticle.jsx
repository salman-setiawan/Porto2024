import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import FAB from '../../components/FloatButton';
import Copyright from '../../components/Copyright';
import Paragraph from '../../components/Paragraph';
import Slider from '../../components/Slider';
import CardStandard from '../../components/cardcontent/CardStandard';
import CTAGallery from '../../components/CTAGallery';
import DocumentLink from '../../components/DocumentLink';
import ArticleData from '../../data/article';

const EduworkArticle = () => {
  const selectedArticle = ArticleData.find(article => article.id === 1);
  
  const { 
    dataParagraph1, dataParagraph2, dataParagraph3, dataParagraph4, dataParagraph5, dataParagraph6, dataParagraph7, dataParagraph8, dataParagraph9, dataParagraph10, dataSlider1,
  } = selectedArticle;

  const sortedSliderData1 = [...dataSlider1].sort((a, b) => a.id - b.id);

  return (
    <div className='bg111 text-[#d3d3d3]'>
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
            desc1={dataParagraph1}
            desc2={dataParagraph2}
            disclaimer={dataParagraph3}
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
            desc1={dataParagraph4}
          />
          <img src="/assets/eduwork/article/teams.png" alt="" />
          <Paragraph 
            desc2={dataParagraph5}
          />
          <Paragraph 
            title="Design Process"
            desc1={dataParagraph6}
          />
          <img src="/assets/eduwork/article/flow.png" alt="" />
          <Paragraph 
            desc1={dataParagraph7}
          />
          <img src="/assets/eduwork/article/process1.png" alt="" />
          <Paragraph 
            desc1={dataParagraph8}
          />
          <img src="/assets/eduwork/article/process2.png" alt="" />
          <div className="w-full">
            <CTAGallery />
          </div>
          <Paragraph 
            desc1={dataParagraph9}
          />
          <Paragraph 
            title="Their Opinion"
            desc1={dataParagraph10}
          />
          <Slider>
            {sortedSliderData1.map(sliderItem => (
              <CardStandard 
                key={sliderItem.id}
                avatar='/assets/avatar.png' 
                title1={sliderItem.sliderTitle}
                desc1={sliderItem.sliderDesc1}
                desc2={(<p className='text-white'>{sliderItem.sliderDesc2}</p>)}
              />
            ))}
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