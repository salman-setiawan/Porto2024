import React, { useState, useEffect } from 'react';
import dataAssets from '../data/assets';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Tabs from '../components/Tabs';
import Fade from '../components/motion/Fade';
import SlideNumber from '../components/SlideNumber';
import ImageLabel from '../components/ImageLabel';
import ShowcaseContent from '../data/showcase';
import BGVid from '../components/motion/BGVid';


const CollectionPages = () => {
  useEffect(() => {
    const loadImage = async (src) => {
      const filename = src.split('/').pop();
      try {
        const cachedStatus = sessionStorage.getItem(filename); // Periksa status cache
        if (cachedStatus === 'loaded') {
          console.log('Cached image found for:', filename);
          return; // Jika sudah dimuat sebelumnya, lewati proses memuat
        }

        const image = new Image();
        image.onload = () => {
          console.log('dataImage from:', '\n', filename, '\nSuccessfully Loaded');
          sessionStorage.setItem(filename, 'loaded'); // Tandai sebagai sudah dimuat dan simpan di cache
        };
        image.onerror = (err) => console.error('Error loading image:', filename, err);
        image.src = src;
      } catch (error) {
        console.error('Error loading image:', filename, error);
      }
    };

    const loadVideo = async (src) => {
      const filename = src.split('/').pop();
      try {
        const cachedStatus = sessionStorage.getItem(filename); // Periksa status cache
        if (cachedStatus === 'loaded') {
          console.log('Cached video found for:', filename);
          return; // Jika sudah dimuat sebelumnya, lewati proses memuat
        }

        const video = document.createElement('video');
        video.oncanplaythrough = () => {
          console.log('dataVideo from:', '\n', filename, '\nSuccessfully Loaded');
          sessionStorage.setItem(filename, 'loaded'); // Tandai sebagai sudah dimuat dan simpan di cache
        };
        video.onerror = (err) => console.error('Error loading video:', filename, err);
        video.src = src;
        video.load();
      } catch (error) {
        console.error('Error loading video:', filename, error);
      }
    };

    const loadAssets = async () => {
      for (const asset of dataAssets.Content) {
        if (asset.endsWith('.webm')) {
          await loadVideo(asset);
        } else {
          await loadImage(asset);
        }
      }
    };

    loadAssets();
  }, []);

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
              url3='mailto:salmansetiawan88@gmail.com'
							text3='hire me'
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
              desc3={ShowcaseContent[activeTab][currentSlide - 1].desc3}
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
