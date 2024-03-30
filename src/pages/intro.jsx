import React, { useState, useEffect } from 'react';

const IntroPages = () => {
  const [isAssetsLoading, setIsAssetsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve();
        image.onerror = (err) => reject(err);
        image.src = src;
      });
    };

    const totalAssets = 6; // Total aset gambar yang akan dimuat
    let loadedAssets = 0;

    const updateProgress = () => {
      loadedAssets++;
      const progress = (loadedAssets / totalAssets) * 100;
      setLoadingProgress(progress);

      if (loadedAssets === totalAssets) {
        setIsAssetsLoading(false);
      }
    };

    const assetsToLoad = [
      '/assets/showcase/showcase1.webp',
      '/assets/showcase/showcase2.webp',
      '/assets/showcase/showcase3.webp',
      '/assets/showcase/showcase4.webp',
      '/assets/showcase/showcase5.webp',
      '/assets/showcase/showcase6.webp',
      '/assets/eduwork/article/teams.png',
      '/assets/eduwork/article/flow.png',
      '/assets/eduwork/article/process1.png',
      '/assets/eduwork/article/process2.png',
      '/assets/eduwork/gallery/screen1.webp',
      '/assets/eduwork/gallery/screen2.webp',
      '/assets/eduwork/gallery/screen3.webp',
      '/assets/eduwork/gallery/screen4.webp',
      '/assets/eduwork/gallery/screen5.webp',
      '/assets/eduwork/gallery/screen6.webp',
      '/assets/eduwork/gallery/screen7.webp',
      '/assets/eduwork/gallery/screen8.webp',
      '/assets/eduwork/gallery/screen9.webp',
      '/assets/eduwork/gallery/screen10.webp',
      '/assets/eduwork/gallery/screen11.webp',
      '/assets/avatar.png',
      '/assets/document.svg',
      '/assets/bgshowcase/showcase2.png',
      '/assets/bio/sea.mp4',
    ];

    const loadAssets = async () => {
      for (const asset of assetsToLoad) {
        await loadImage(asset);
        updateProgress();
      }
    };

    loadAssets();

    return () => {
      setIsAssetsLoading(true);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 1);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <div className="bg-[#171616] min-h-screen flex flex-col justify-center items-center px-8 text-white">
      {isAssetsLoading ? (
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 items-center md:w-[640px]">
          <img src="/icon.svg" alt="" className="h-[64px] md:h-[80px] w-fit" />
          <p className='text-[14px] md:text-[16px]'>Loading {loadingProgress}%</p>
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
