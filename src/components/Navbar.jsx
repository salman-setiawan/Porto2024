import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title, subtitle, url1, url2, url4, icon1, icon2, icon3, icon4 }) => {
  const [showSocialMenu, setShowSocialMenu] = useState(false);

  const handleIcon3Click = () => {
    setShowSocialMenu(!showSocialMenu);
  };

  return (
    <div className="w-full flex items-center justify-end px-4 py-4 text-white bg-[#111111] bg-opacity-90">
      {/* Bagian kiri */}
      {/* <div className='space-y-[-1px]'>
        <p className="text-[14px] font-semibold">{title}</p>
        <p className="text-[12px] text-[#9F9F9F]">{subtitle}</p>
      </div> */}
      {/* Bagian kanan */}
      <div className="flex">
        <Link to={url1}>
          {icon1 &&           
            <button className="p-2 bg-[#2b2b45] rounded-md">
              <img src={icon1} className='w-[20px]' />
            </button>
          }
        </Link>
        <Link to={url2}>
          {icon2 &&           
            <div className="pl-1.5">
              <button className="p-2 bg-[#2b2b45] rounded-md">
                <img src={icon2} className='w-[20px]' />
              </button>
            </div>
          }
        </Link>
        {icon3 &&        
          <div className="pl-1.5">
            <button
              className={`p-2 bg-[#2b2b45] rounded-md ${showSocialMenu ? 'border-[#00f7ff]' : ''}`}
              onClick={handleIcon3Click}
            >
              <img src={icon3} className='w-[20px]' />
            </button>
            {showSocialMenu && (
              <div className="absolute right-4 flex mt-1.5 bg-[#2b2b45] rounded-md px-1 py-0.5">
                <Link to='https://www.linkedin.com/in/salman-setiawan/' target="_blank" rel="noopener noreferrer" className="p-1.5">
                  <img src="/assets/linkedin.svg" alt="" className="w-[20px]" />
                </Link>
                <Link to='https://www.instagram.com/eisenflux/' target="_blank" rel="noopener noreferrer" className="p-1.5">
                  <img src="/assets/instagram.svg" alt="" className="w-[20px]" />
                </Link>
              </div>
            )}
          </div>
        }
        <Link to={url4}>
          {icon4 &&           
            <div className="pl-1.5">
            <button className="p-2 bg-[#494949] rounded-md">
              <img src={icon4} className='w-[20px]' />
            </button>
          </div>
          }
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
