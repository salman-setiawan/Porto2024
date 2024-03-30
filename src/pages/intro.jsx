import React, { useState, useEffect } from 'react';
import dataAssets from '../data/assets';

const IntroPages = () => {
  const [isAssetsLoading, setIsAssetsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentAsset, setCurrentAsset] = useState(null);

  useEffect(() => {
    const loadImage = (src) => {
      const filename = src.split('/').pop();
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
          console.log('dataImage from:', filename, 'Successfully Loaded'); // Tampilkan pesan log saat gambar dimuat
          resolve();
        };
        image.onerror = (err) => reject(err);
        image.src = src;
      });
    };

    const loadVideo = (src) => {
      return new Promise((resolve, reject) => {
        const filename = src.split('/').pop();
        const video = document.createElement('video');
        video.oncanplaythrough = () => {
          console.log('dataVideo from:', filename, 'Successfully Loaded'); // Tampilkan pesan log saat video dimuat
          resolve();
        };
        video.onerror = (err) => reject(err);
        video.src = src;
        video.load();
      });
    };

    const totalAssets = dataAssets.Intro.length;
    const totalProgressSteps = 100;
    const progressStep = totalProgressSteps / totalAssets;

    let loadedAssets = 0;

    const updateProgress = () => {
      loadedAssets++;
      const newProgress = Math.floor((loadedAssets / totalAssets) * 100);
      setProgress(newProgress);

      if (newProgress === totalProgressSteps) {
        setIsAssetsLoading(false);
      }
    };

    const loadAssets = async () => {
      for (const asset of dataAssets.Intro) {
        try {
          setCurrentAsset(asset.split('/').pop());
          if (asset.endsWith('.webm')) {
            await loadVideo(asset);
          } else {
            await loadImage(asset);
          }
          updateProgress();
        } catch (error) {
          console.error(`Error loading asset: ${asset}`, error);
          // Handle error loading asset
        }
      }
    };

    loadAssets();

    return () => {
      setIsAssetsLoading(true);
    };
  }, []);

  return (
    <div className="bg-[#171616] min-h-screen flex flex-col justify-center items-center px-8 text-white">
      {isAssetsLoading ? (
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 items-center md:w-[640px]">
          <img src="/icon.svg" alt="" className="h-[64px] md:h-[80px] w-fit" />
          <div className="flex flex-col justify-center items-center space-y-1">
            <p className='text-[14px] md:text-[16px]'>Loading {progress}%</p>
            {currentAsset && <p className='text-[10px] md:text-[12px]'>Currently Loading: {currentAsset}</p>}
          </div>
        </div>
      ) : (
        <div className='flex flex-col text-[16px] space-y-6 md:space-y-8 justify-center items-center md:w-[640px]' onClick={() => window.location.href = "/collection"}>
          <img src="/icon.svg" alt="" className="h-[64px] md:h-[80px] w-fit" />
          <p className='blinking-text text-[14px] md:text-[16px]'>Click anywhere to continue.</p>
        </div>
      )}
      <div className="fixed bottom-0 pb-10 text-center text-[13px] px-6">
        <p>Hello there, my name is Salman.</p>
        <p>I have experience in designing user experience, user interfaces, interaction design, design systems, and much more.</p>
        <p>I hope you enjoy your time exploring the portfolio I have created.</p>
      </div>
    </div>
  );
};

export default IntroPages;
