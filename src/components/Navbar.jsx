import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ url1, url2, url3, icon1, icon2, icon3 }) => {
  return (
    <div>
      {icon1 &&
        <div className="w-full flex items-center justify-end px-4 py-4 text-white bg-[#111111] bg-opacity-90">
          <Link to={url1} aria-label="Link 1">        
            <button aria-label="Button 1" className="p-2 bg-[#2b2b45] rounded-md">
              <img src={icon1} className='w-[20px]' alt='Icon 1' />
            </button>
          </Link>
          <Link to={url2} aria-label="Link 2">
            {icon2 &&           
              <div className="pl-1.5">
                <button aria-label="Button 2" className="p-2 bg-[#2b2b45] rounded-md">
                  <img src={icon2} className='w-[20px]' alt='Icon 2' />
                </button>
              </div>
            }
          </Link>
          <Link to={url3} aria-label="Link 3">
            {icon3 &&           
              <div className="pl-1.5">
                <button aria-label="Button 3" className="p-2 bg-[#494949] rounded-md">
                  <img src={icon3} className='w-[20px]' alt='Icon 3' />
                </button>
              </div>
            }
          </Link>
        </div>
      }
    </div>
  );
};

export default Navbar;
