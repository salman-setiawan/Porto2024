import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Works');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='px-4 pb-10 w-full md:w-[720px]'>
      <div className="flex justify-between p-1.5 bg-[#252525] rounded-lg space-x-2">
        <p
          className={`w-full flex justify-center py-2 px-4 rounded-lg text-[14px] ${
            activeTab === 'Works' ? 'bg-[#494949]' : 'bg-[#252525]'
          }`}
          onClick={() => handleTabClick('Works')}
        >
          Works
        </p>
        <p
          className={`w-full flex justify-center py-2 px-4 rounded-lg text-[14px] ${
            activeTab === 'Crafts' ? 'bg-[#494949]' : 'bg-[#252525]'
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
