import React from 'react';

const ChipShowcase = ({ text, bg }) => {
  return (
    <div>
      {text &&
        <div className="pl-2">
          <div className={`${bg} bg-opacity-[30%] py-[4px] px-[8px] rounded-lg flex items-center`}>
            <p className="text-white text-[12px]">{text}</p>
          </div>
        </div>
      } 
    </div>
  );
};

export default ChipShowcase;
