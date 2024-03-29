import React, { useState, useEffect } from 'react';

const IntroPages = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handlePageClick = () => {
      if (!loading) {
        window.location.href = "/collection";
      }
    };

    document.addEventListener('click', handlePageClick);

    // Hitung kemajuan loading
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 1);
      } else {
        setLoading(false);
      }
    }, 50);

    return () => {
      document.removeEventListener('click', handlePageClick);
      clearInterval(interval);
    };
  }, [loading, progress]);

  return (
    <div className="bg-[#171616] min-h-screen flex flex-col justify-center items-center px-8 text-white">
      {loading ? (
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 items-center md:w-[640px]">
          <img src="/icon.svg" alt="" className="h-[64px] md:h-[80px] w-fit" />
          <p className='text-[14px] md:text-[16px]'>Loading {progress}%</p>
        </div>
      ) : (
        <div className='flex flex-col text-[16px] space-y-6 md:space-y-8 justify-center items-center md:w-[640px]'>
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
