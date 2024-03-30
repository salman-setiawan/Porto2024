import React from 'react'
import Navbar from '../../components/Navbar'
import Paragraph from '../../components/Paragraph'
import CardStandard from '../../components/cardcontent/CardStandard'
import FAB from '../../components/FloatButton'
import Quote from '../../components/Quote'
import CTAGallery from '../../components/CTAGallery'
import DocumentLink from '../../components/DocumentLink'
import Copyright from '../../components/Copyright'
import Slider from '../../components/Slider'
import ArticleData from '../../data/article'


const EdufamsArticle = () => {
  const selectedArticle = ArticleData.find(article => article.id === 2);

  const { 
    dataParagraph1, dataParagraph2, dataParagraph3, dataParagraph4, dataParagraph5, dataParagraph6, dataParagraph7, dataParagraph8, dataParagraph9, dataParagraph10, dataParagraph11, dataParagraph12, dataParagraph13, dataParagraph14, dataParagraph15, dataParagraph16, dataParagraph17, dataParagraph18, dataParagraph19, dataParagraph20, dataParagraph21, dataSlider1, dataSlider2,
  } = selectedArticle;
  
  const sortedSliderData1 = [...dataSlider1].sort((a, b) => a.id - b.id);
  const sortedSliderData2 = [...dataSlider2].sort((a, b) => a.id - b.id);

  return (
    <div>
      <div className="text-[#d3d3d3] bg111">
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
              disclaimer={dataParagraph2}
            />
            <Paragraph 
              title="Work Process."
              desc1={dataParagraph3}
            />
            <img src="/assets/edufams/article/team.jpg" alt="" />
            <Paragraph
              desc1={dataParagraph4}
            />
            <img src="/assets/edufams/article/system.jpg" alt="" />
            <Paragraph
              desc1={dataParagraph5}
            />
            <Paragraph 
              title="Emphatize."
              desc1={dataParagraph6}
            />
            <Slider>
              {sortedSliderData1.map(sliderItem => (
                <CardStandard 
                  key={sliderItem.id}
                  title1={sliderItem.sliderTitle}
                  desc1={sliderItem.sliderDesc}
                />
              ))}
            </Slider>
            <Paragraph
              title='Define.' 
              desc1={dataParagraph7}
            />
            <Slider>
              {sortedSliderData2.map(sliderItem => (
                <CardStandard 
                  key={sliderItem.id}
                  title1={sliderItem.sliderTitle}
                  desc1={sliderItem.sliderDesc}
                />
              ))}
            </Slider>
            <Paragraph
              title='Ideate.' 
              desc1={dataParagraph8}
            />
            <Quote 
              text={dataParagraph9}
            />
            <Paragraph
              desc1={dataParagraph10}
            />
            <img src="/assets/edufams/article/brand.png" alt="" />
            <Paragraph 
              desc1={dataParagraph11}
              desc2={dataParagraph12}
              desc3={dataParagraph13}
              desc4={dataParagraph14}
            />
            <Paragraph
              title='Prototype.' 
              desc1={dataParagraph15}
              desc2={dataParagraph16}
            />
            <div className="flex flex-col space-y-2">
              <img src="/assets/edufams/article/wire1.png" alt="" />
              <img src="/assets/edufams/article/wire2.png" alt="" />
            </div>
            <Paragraph
              desc1={dataParagraph17}
            />
            <div className="flex flex-col space-y-2">
              <img src="/assets/edufams/article/styleguide.png" alt="" />
              <img src="/assets/edufams/article/component.jpg" alt="" />
            </div>
            <Paragraph
              desc1={dataParagraph18}
            />
            <div className="w-full">
              <CTAGallery />
            </div>
            <Paragraph
              title='Test.' 
              desc1={dataParagraph19}
            />
            <div className="flex flex-col space-y-2 w-full">
              <div className="w-full py-2.5 px-3 bg-[#7070ca] bg-opacity-10">
                <DocumentLink
                  url='https://s.itk.ac.id/edufamsweb'
                  icon='/assets/document.svg'
                  text='Website Prototype'
                />
              </div>
              <div className="w-full py-2.5 px-3 bg-[#7070ca] bg-opacity-10">
                <DocumentLink
                  url='https://s.itk.ac.id/edufamsapp'
                  icon='/assets/document.svg'
                  text='Mobile App Prototype'
                />
              </div>
            </div>
            <Paragraph 
              title="Pitching Day."
              desc1={dataParagraph20}
            />
            <img src="/assets/edufams/article/pitch.jpg" alt="" />
            <Paragraph 
              desc1={dataParagraph21}
            />
            <div className="pb-6 md:pb-1"></div>
          </div>
        </div>
        <FAB
          url='/content/edufams/galleryview'
          text='See Gallery Design'
        />
        <div className="fixed bottom-0 w-full">
          <Copyright />
        </div>
      </div>
    </div>
  )
}

export default EdufamsArticle