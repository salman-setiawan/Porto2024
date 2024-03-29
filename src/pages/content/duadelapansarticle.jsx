import React from 'react'
import Navbar from '../../components/Navbar'
import Paragraph from '../../components/Paragraph'
import DocumentLink from '../../components/DocumentLink'
import Copyright from '../../components/Copyright'
import Quote from '../../components/Quote'
import FAI from '../../components/FloatButtonTwo'
import ArticleData from '../../data/article'

const DuaDelapansArticle = () => {
  const selectedArticle = ArticleData.find(article => article.id === 3);

  const { 
    dataParagraph1, dataParagraph2, dataParagraph3, dataParagraph4, dataParagraph5, dataParagraph6, dataParagraph7, dataParagraph8, dataParagraph9, dataParagraph10, dataParagraph11, dataParagraph12, dataParagraph13,
  } = selectedArticle;
  

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
            desc1={dataParagraph1}
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
            desc1={dataParagraph2}
            desc2={dataParagraph3}
            desc3={dataParagraph4}
          />
          <img src="/assets/duadelapans/article/mindmap.webp" alt="" className="w-full" />
          <Paragraph
            desc1={dataParagraph5}
            desc2={dataParagraph6}
          />
          <div className="flex flex-col space-y-2">
            <Quote 
              text={(
                <>
                  <p>{dataParagraph7}</p>
                  <p className='mt-2'>{dataParagraph8}</p>
                  <img src="/assets/duadelapans/article/ui1.webp" alt="" className="w-full py-4" />
                  <img src="/assets/duadelapans/article/ui2.webp" alt="" className="w-full pb-4" />
                  <p>{dataParagraph9}</p>
                </>
              )}
            />
            <Quote 
              text={(
                <>
                  <img src="/assets/duadelapans/article/ui3.webp" alt="" className="w-full py-4" />
                  <p>{dataParagraph10}</p>
                </>
              )}
            />
            <Quote 
              text={(
                <>
                  <p>{dataParagraph11}</p>
                </>
              )}
            />
          </div>
          <Paragraph
            desc1={dataParagraph12}
            desc2={dataParagraph13}
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