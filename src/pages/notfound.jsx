import React, { useEffect } from 'react'

const NotFound = () => {
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
      <div className='text-[16px] space-y-16 md:w-[700px]'>
        <div className="space-y-8">
          <img src="/assets/404.png" alt="" className="h-24" />
          <div className="space-y-1">
            <div className="flex space-x-2">
              <p>&lt;al1p&gt;</p>
              <p>Hello again, I apologize for any inconvenience.</p>
            </div>
            <div className="flex space-x-2">
              <p>&lt;al1p&gt;</p>
              <p>It seems the page you are currently trying to access cannot be found, or this page doesn't have accessible content and is currently under construction.</p>
            </div>
            <div className="flex space-x-2">
              <p>&lt;al1p&gt;</p>
              <p>But don't worry, you will be redirected back to the showcase page by clicking anywhere on the screen.</p>
            </div>
          </div>
          <p className='blinking-text'>Click anywhere to continue.</p>
          </div>
      </div>
    </div>
  );
}

export default NotFound