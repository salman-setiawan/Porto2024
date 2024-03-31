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
          className={`w-full flex justify-center py-2 px-4 rounded-md text-[14px] integral select ${
            activeTab === 'Works' ? 'bg-[#464672]' : 'bg-[#2b2b45]'
          }`}
          onClick={() => handleTabClick('Works')}
        >
          WORKS
        </p>
        <p
          className={`w-full flex justify-center py-2 px-4 rounded-md text-[14px] integral select ${
            activeTab === 'Crafts' ? 'bg-[#464672]' : 'bg-[#2b2b45]'
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
