// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title, subtitle, icon1, icon2, icon3 }) => {
  return (
    <div className="w-full flex justify-between px-4 py-4 text-white bg-[#111111] bg-opacity-90">
      {/* Bagian kiri */}
      <div className='space-y-[-1px]'>
        <p className="text-[16px] font-semibold">{title}</p>
        <p className="text-[12px] text-[#9F9F9F]">{subtitle}</p>
      </div>
      {/* Bagian kanan */}
      <div className="flex space-x-1.5">
        <Link to="/collection">
          <button className="p-2 bg-[#494949] rounded-md">
            <img src={icon1} />
          </button>
        </Link>
        <Link to="/bio">
          <button className="p-2 bg-[#494949] rounded-md">
            <img src={icon2} />
          </button>
        </Link>
        <Link to="/bio">
        <button className="p-2 bg-[#494949] rounded-md">
          <img src={icon3} />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
