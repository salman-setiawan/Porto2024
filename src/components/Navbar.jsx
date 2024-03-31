import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ url1, url2, url3, text1, text2, text3 }) => {
  return (
    <div>
      {url1 &&
        <div className="w-full flex items-center justify-end p-4 text-white">
          <Link to={url1} aria-label="Link 1">
            <p className='integral text-[16px] font-semibold p-1'>{text1}</p>
          </Link>
          {url2 &&           
            <div className="pl-2">
              <Link to={url2} target="_blank" rel="noopener noreferrer" aria-label="Link 2">
                <p className='integral text-[16px] font-semibold p-1'>{text2}</p>
              </Link>
            </div>
          }
          {url3 &&           
            <div className="pl-2">
              <Link to={url3} aria-label="Link 3">
                <p className='integral text-[16px] font-semibold p-1'>{text3}</p>
              </Link>
            </div>
          }
        </div>
      }
    </div>
  );
};

export default Navbar;
