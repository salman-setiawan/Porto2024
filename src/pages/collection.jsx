import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Tabs from '../components/Tabs';
import Fade from '../components/motion/Fade';
import SlideNumber from '../components/SlideNumber';
import ImageLabel from '../components/ImageLabel';
import ShowcaseContent from '../data/showcase';


const CollectionPages = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(3);
  const [activeTab, setActiveTab] = useState('Works');

  const handleSlideChange = ({ currentSlide, totalSlides }) => {
    setCurrentSlide(currentSlide);
    setTotalSlides(totalSlides);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentSlide(1);
  };

  return (
    <div className="bg-[#111111] min-h-screen text-white flex flex-col">
      <Fade>
        <div className='flex none'>
          <div className="fixed top-0 w-full" style={{ zIndex: 2 }}>
            <Navbar
              url1='/bio'
              text1='about me'
              url2='https://read.cv/eisenflux'
              text2='read.cv'
            />
            <SlideNumber
              current={currentSlide}
              totalCurrent={totalSlides}
            />
            <div className="">
              <ImageLabel
                title={ShowcaseContent[activeTab][currentSlide - 1].title}
                desc1={ShowcaseContent[activeTab][currentSlide - 1].desc1}
                desc2={ShowcaseContent[activeTab][currentSlide - 1].desc2}
              />
            </div>
          </div>
        </div>
        <div className="">
          {activeTab === 'Works' && (
            <Showcase.Works
              onSlideChange={handleSlideChange}
            />
          )}
          {activeTab === 'Crafts' && (
            <Showcase.Crafts
              onSlideChange={handleSlideChange}
            />
          )}
        </div>
        <div className="fixed bottom-0 w-full none" style={{ zIndex: 2 }}>
          <div className="flex justify-center">
            <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
          </div>
        </div>
      </Fade>
      <div className="fixed bottom-0 w-full" style={{ zIndex: 1 }}>
        <div className="flex justify-center pt-2">
          <p className="text-[11px] text-[#B5B5B5] mb-3 cursor-none">copyright @ 2024</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionPages;
