import React from 'react';

const Chips = ({ text, bg }) => {
  return (
    <div className={`bg-${bg} bg-opacity-[40%] py-[4px] px-[8px] rounded-lg flex items-center`}>
      <p className="text-white text-[10px]">{text}</p>
    </div>
  );
};

export default Chips;
