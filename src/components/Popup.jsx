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
      <div className="fixed bottom-10 right-4 bg-[#2b2b45] p-4 rounded-lg md:w-[520px] flex flex-col items-end">
        <p className="text-[16px] mb-4">Selamat datang di halaman showcase, disini kamu dapat melihat koleksi dari hasil rancangan saya serta proses dibalik rancangan tersebut.</p>
        <p className="text-[16px] mb-8">Kamu dapat berinteraksi dan melihat-lihat koleksi rancangan yang sudah dibuat dengan menggeser gambar ke kanan atau ke kiri menggunakan mouse pada PC atau hand-gesture pada smartphone/tablet.</p>
        <button onClick={handleClose} className="py-2.5 px-3 bg-[#5454FF] text-white rounded-md text-[16px] font-semibold w-fit">Saya Mengerti</button>
      </div>
    </div>
  );
};

export default Popup;
