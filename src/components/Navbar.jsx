import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ url1, url2, url3, text1, text2, text3 }) => {
  return (
    <div>
      {url1 &&
        <div className="w-full flex items-center justify-end p-4">
          <Link to={url1} aria-label="Link 3">
            <p className='text-[14px] font-medium p-1'>{text1}</p>
          </Link>
          {url2 &&           
            <div className="pl-2">
              <Link to={url2} target="_blank" rel="noopener noreferrer" aria-label="Link 3">
                <p className='text-[14px] font-medium p-1'>{text2}</p>
              </Link>
            </div>
          }
        </div>
      }
    </div>
  );
};

export default Navbar;
