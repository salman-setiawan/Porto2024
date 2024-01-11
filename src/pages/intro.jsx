import React, { useEffect } from 'react';

const IntroPages = () => {
  useEffect(() => {
    const handlePageClick = () => {
      // Ganti "/tujuan" dengan URL tujuanmu
      // redirectToPage('/collection');
      window.location.href = "/collection";
    };

    // Menambahkan event listener untuk mendeteksi klik di mana saja pada halaman
    document.addEventListener('click', handlePageClick);

    // Membersihkan event listener saat komponen unmount
    return () => {
      document.removeEventListener('click', handlePageClick);
    };
  }, []); // Efek hanya dijalankan sekali setelah komponen dipasang

  return (
    <div className="bg-[#111111] min-h-screen flex justify-center items-center px-16 text-white">
      <div className='text-lg space-y-4 md:w-[720px]'>
        <p>Hello, my name is Salman, and I have experience in designing user experience, user interfaces, interaction design, design systems, and much more.</p>
        <p>Click anywhere to explore.</p>
      </div>
    </div>
  );
};

export default IntroPages;
