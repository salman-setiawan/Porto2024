import React, { useState } from 'react';

const Tabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('Works');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className='w-full md:w-[440px]'>
      <div className="flex justify-between p-1 bg-[#32271B] rounded-lg space-x-1">
        <p
          className={`w-full flex py-2.5 px-5 rounded-md text-[14px] integral select ${
            activeTab === 'Works' ? 'bg-gradient-to-r from-orange-600 to-yellow-400' : 'bg-transparent'
          }`}
          onClick={() => handleTabClick('Works')}
        >
          WORKS
        </p>
        <p
          className={`w-full flex py-2.5 px-5 rounded-md text-[14px] integral select ${
            activeTab === 'Crafts' ? 'bg-gradient-to-r from-orange-600 to-yellow-400' : 'bg-transparent'
          }`}
          onClick={() => handleTabClick('Crafts')}
        >
          CRAFTS
        </p>
      </div>
    </div>
  );
};

export default Tabs;
