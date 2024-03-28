import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Tabs from '../components/Tabs';
import Fade from '../components/motion/Fade';
import SlideNumber from '../components/SlideNumber';
import ImageLabel from '../components/ImageLabel';
import ShowcaseContent from '../data/showcase';
import BGVid from '../components/motion/BGVid';


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
    <div className="bg-[#171616] min-h-screen text-white flex flex-col">
      <Fade>
				<BGVid />
        <div>
					<div className="fixed top-0 w-full" style={{ zIndex: 2 }}>
						<Navbar
							url1='/bio'
							text1='about me'
							url2='https://read.cv/eisenflux'
							text2='read.cv'
						/>
					</div>
          <div className="fixed top-0 w-full cursonone" style={{ zIndex: 2 }}>
            <SlideNumber
              current={currentSlide}
              totalCurrent={totalSlides}
							subject={ShowcaseContent[activeTab][currentSlide - 1].title}
            />
						<ImageLabel
							title={ShowcaseContent[activeTab][currentSlide - 1].title}
							desc1={ShowcaseContent[activeTab][currentSlide - 1].desc1}
							desc2={ShowcaseContent[activeTab][currentSlide - 1].desc2}
						/>
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
        <div className="fixed bottom-0 w-full px-5 none pb-10" style={{ zIndex: 2 }}>
          <div className="flex justify-center">
            <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
          </div>
        </div>
      </Fade>
      <div className="fixed bottom-0 w-full" style={{ zIndex: 1 }}>
        <div className="flex justify-between pt-2 px-6">
          <p className="text-[11px] text-[#B5B5B5] mb-3 cursor-none">welcome to my uix showcase portfolio</p>
					<p className="text-[11px] text-[#B5B5B5] mb-3 cursor-none">copyright @ 2024</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionPages;
