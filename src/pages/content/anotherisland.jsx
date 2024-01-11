import React from 'react'
import Navbar from '../../components/Navbar'
import CardUPersona from '../../components/cardcontent/CardUPersona'

const AnotherIsland = () => {
  return (
    <div className="bg-[#111111] min-h-screen text-[#d3d3d3]">
      <div className="fixed top-0 w-full">
          <Navbar title='Salman Setiawan' subtitle='UI Designer' icon1='/assets/home.svg' />
      </div>
      <div className="flex justify-center max-h-screen pt-20 pb-8">
        <div className="flex flex-col items-center space-y-6 px-4 md:w-[720px] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            <p className="text-[14px]">
              Project ini adalah permainan arcade sederhana dengan tema bertahan hidup bernama Another Day in the Island, yang saya rancang sebagai penelitian untuk tugas akhir saya sebagai mahasiswa informatika institut teknologi kalimantan. Pada permainan ini pemain akan memainkan karakter misterius dengan alias 'Unknown' yang memiliki objektif untuk mengumpulkan skor sebanyak-banyaknya dengan membunuh para monster yang tersebar diseluruh area.
            </p>
          </div>
          <video autoPlay muted loop className='w-full'>
            <source src="/assets/anotherisland/showcase.mp4" type="video/mp4" />
          </video>
          <div className="flex flex-col space-y-2">
            <p className="text-[16px] font-semibold text-white">
              Method
            </p>
            <p className="text-[14px]">
              Penelitian ini menggunakan pendekatan User-Centered Design, sebuah metode yang menempatkan pengguna sebagai fokus utama dalam proses desain produk, aplikasi, atau pengalaman. Dilansir dari usability.gov bahwa UCD memiliki life-cycle yang dapat dilihat pada gambar dibawah ini.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-[16px] font-semibold text-white">
              Identifikasi Kebutuhan.
            </p>
            <p className="text-[14px]">
              Tahap identifikasi kebutuhan merupakan tahap dimana peneliti akan melakukan identifikasi kebutuhan apa yang nantinya akan dibutuhkan oleh pengguna selama memainkan permainan arcade yang akan dirancang. Kuisioner dapat menjadi alat bantu peneliti untuk membantu proses identifikasi kebutuhan pengguna selama berlangsung.
            </p>
            <p className="text-[14px]">
              Pertanyaan-pertanyaan yang disajikan untuk para partisipan terdiri dari beberapa bagian. Bagian pertama merupakan pertanyaan mengenai profil dari partisipan seperti rentang umur, kesukaan partisipan terhadap permainan beserta alasannya dan pengalaman pemain dalam bermain permainan arcade. Bagian kedua merupakan pertanyaan dari sudut pandang partisipan pada permainan arcade dari segi gameplay, visual, secara keseluruhan dan terakhir ada keputusan untuk model permainan yang diinginkan untuk dibangun.
            </p>
            <div className="flex space-x-2 py-2">
              <CardUPersona 
                title1='Achmad Ripaldi'
                desc1='Mahasiswa'
                title2='Goals'
                desc2='Tampilan aplikasi yang sederhana dengan fungsionalitas yang mudah digunakan.'
                title3='Pain Points'
                desc3='warna background dengan list manhwa yang saling mencolok atau saling gelap (iluminasi warna tidak baik), dan untuk beberapa website mereka menggunakan akun terpisah untuk melakukan komentar pada manhwa yang dibaca sehingga cukup merepotkan.'
              />
              <CardUPersona 
                title1='Achmad Ripaldi'
                desc1='Mahasiswa'
                title2='Goals'
                desc2='Tampilan aplikasi yang sederhana dengan fungsionalitas yang mudah digunakan.'
                title3='Pain Points'
                desc3='warna background dengan list manhwa yang saling mencolok atau saling gelap (iluminasi warna tidak baik), dan untuk beberapa website mereka menggunakan akun terpisah untuk melakukan komentar pada manhwa yang dibaca sehingga cukup merepotkan.'
              />
              <CardUPersona 
                title1='Achmad Ripaldi'
                desc1='Mahasiswa'
                title2='Goals'
                desc2='Tampilan aplikasi yang sederhana dengan fungsionalitas yang mudah digunakan.'
                title3='Pain Points'
                desc3='warna background dengan list manhwa yang saling mencolok atau saling gelap (iluminasi warna tidak baik), dan untuk beberapa website mereka menggunakan akun terpisah untuk melakukan komentar pada manhwa yang dibaca sehingga cukup merepotkan.'
              />
            </div>
            <p className="text-[14px]">
              Untuk memahami partisipan secara lebih mendalam, selanjutnya masuk ke tahap perancangan user persona melalui beberapa partsipan kuisioner. User persona memiliki tujuan untuk mengetahui secara jelas apa masalah yang sedang dihadapi dan apa yang ingin dicapai oleh pengguna.
            </p>
            <div className="flex space-x-2 py-2">
              <CardUPersona 
                title1='Achmad Ripaldi'
                desc1='Mahasiswa'
                title2='Goals'
                desc2='Tampilan aplikasi yang sederhana dengan fungsionalitas yang mudah digunakan.'
                title3='Pain Points'
                desc3='warna background dengan list manhwa yang saling mencolok atau saling gelap (iluminasi warna tidak baik), dan untuk beberapa website mereka menggunakan akun terpisah untuk melakukan komentar pada manhwa yang dibaca sehingga cukup merepotkan.'
              />
              <CardUPersona 
                title1='Achmad Ripaldi'
                desc1='Mahasiswa'
                title2='Goals'
                desc2='Tampilan aplikasi yang sederhana dengan fungsionalitas yang mudah digunakan.'
                title3='Pain Points'
                desc3='warna background dengan list manhwa yang saling mencolok atau saling gelap (iluminasi warna tidak baik), dan untuk beberapa website mereka menggunakan akun terpisah untuk melakukan komentar pada manhwa yang dibaca sehingga cukup merepotkan.'
              />
            </div>
          </div>
          <img src="/assets/mobtoon/content1.png" alt="" className="" />
          <div className="flex flex-col space-y-2 pb-4">
            <p className="text-[16px] font-semibold text-white">
              Feedback.
            </p>
            <p className="text-[14px]">
              Before starting to design the application, as the designer, I conducted research on several individuals (in this case, manhwa readers) to understand their experiences as users in reading manhwa on websites or mobile applications.
            </p>
            <p className="text-[14px]">
              In this case, I conducted user persona research through random interviews with three of my friends, and then summarized their opinions into key points as references in designing the application.
            </p>
            <p className="text-[14px]">
              Here are their opinions on their experiences in reading manhwa so far.
            </p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
          <div className="flex justify-center pt-2 bg-[#111111] bg-opacity-90">
              <p className="text-[10px] text-[#9F9F9F] mb-3">copyright @ 2024</p>
          </div>
      </div>
    </div>
  )
}

export default AnotherIsland