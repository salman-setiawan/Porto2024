import React, { useState } from 'react';

const Tabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('Works');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className='w-full md:w-[440px]'>
      <div className="flex justify-between p-1 bg-[#2b2b45] rounded-lg space-x-2 font-medium">
        <p
          className={`w-full flex justify-center py-1.5 px-4 rounded-md text-[14px] select ${
            activeTab === 'Works' ? 'bg-[#464672]' : 'bg-[#2b2b45]'
          }`}
          onClick={() => handleTabClick('Works')}
        >
          Works
        </p>
        <p
          className={`w-full flex justify-center py-1.5 px-4 rounded-md text-[14px] select ${
            activeTab === 'Crafts' ? 'bg-[#464672]' : 'bg-[#2b2b45]'
          }`}
          onClick={() => handleTabClick('Crafts')}
        >
          Crafts
        </p>
      </div>
    </div>
  );
};

export default Tabs;
