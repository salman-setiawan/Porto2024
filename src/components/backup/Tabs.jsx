import React, { useState } from 'react';
import worksActiveImg from '../../public/assets/bgshowcase/works-active.png';
import worksInactiveImg from '../../public/assets/bgshowcase/works-inactive.png';
import craftsActiveImg from '../../public/assets/bgshowcase/crafts-active.png';
import craftsInactiveImg from '../../public/assets/bgshowcase/crafts-inactive.png';

const Tabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('Works');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div>
      <div className="flex justify-center bg-[#261E16]">
        <img
          src={activeTab === 'Works' ? worksActiveImg : worksInactiveImg}
          alt="Works Tab"
          className="cursor-pointer h-[44px]"
          onClick={() => handleTabClick('Works')}
        />
        <img
          src={activeTab === 'Crafts' ? craftsActiveImg : craftsInactiveImg}
          alt="Crafts Tab"
          className="cursor-pointer h-[44px]"
          onClick={() => handleTabClick('Crafts')}
        />
      </div>
    </div>
  );
};

export default Tabs;
