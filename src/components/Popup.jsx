import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isPopupShown = localStorage.getItem('isPopupShown');
    if (!isPopupShown) {
      setIsOpen(true);
      localStorage.setItem('isPopupShown', true);
    }

    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('isPopupShown');
    });

    return () => {
      window.removeEventListener('beforeunload', () => {
        localStorage.removeItem('isPopupShown');
      });
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center ${isOpen ? '' : 'hidden'}`}>
      <div className="fixed bottom-10 right-4 bg-[#2b2b45] p-4 rounded-lg w-[320px] md:w-[520px] flex flex-col items-end">
        <p className="text-[12px] md:text-[14px] mb-2 md:mb-4">Welcome to the showcase page, where you can see my design collection and the process behind the design.</p>
        <p className="text-[12px] md:text-[14px] mb-4 md:mb-8">You can interact and browse the collection of designs that have been made by swiping the image to the right or left using a mouse on a PC or touching the screen on a smartphone/tablet.</p>
        <button onClick={handleClose} className="py-2.5 px-3 bg-[#5454FF] text-white rounded-md text-[12px] md:text-[14px] font-semibold w-fit">Got it</button>
      </div>
    </div>
  );
};

export default Popup;
