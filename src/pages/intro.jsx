import React, { useEffect } from 'react';

const IntroPages = () => {
  useEffect(() => {
    const handlePageClick = () => {
      window.location.href = "/collection";
    };

    document.addEventListener('click', handlePageClick);

    return () => {
      document.removeEventListener('click', handlePageClick);
    };
  });

  return (
    <div className="bg-[#111111] min-h-screen flex flex-col justify-center items-center px-8 text-white">
      <div className='text-[14px] space-y-16 md:w-[700px]'>
        <div className="space-y-8">
          <img src="/assets/mark.png" alt="" className="h-40" />
          <div className="space-y-1">
            <div className="flex space-x-2">
              <p>&lt;al1p&gt;</p>
              <p>Hello there, my name is Salman.</p>
            </div>
            <div className="flex space-x-2">
              <p>&lt;al1p&gt;</p>
              <p>I have experience in designing user experience, user interfaces, interaction design, design systems, and much more.</p>
            </div>
            <div className="flex space-x-2">
              <p>&lt;al1p&gt;</p>
              <p>I hope you enjoy your time exploring the portfolio I have created.</p>
            </div>
          </div>
          <p className='blinking-text'>Click anywhere to continue.</p>
          </div>
      </div>
    </div>
  );
};

export default IntroPages;
