import React from 'react'
import Navbar from '../../components/Navbar'
import CardUPersona from '../../components/cardcontent/CardUPersona'

const Mobtoon = () => {
  return (
    <div className="bg-[#111111] min-h-screen text-[#d3d3d3]">
      <div className="fixed top-0 w-full">
          <Navbar title='Salman Setiawan' subtitle='UI Designer' icon1='/assets/home.svg' />
      </div>
      <div className="flex justify-center max-h-screen pt-20 pb-8">
        <div className="flex flex-col items-center space-y-6 px-4 md:w-[720px] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            <p className="text-[14px]">
              Lately I have been really enjoying reading manhwa (also known as webtoons, Korean comics) of any genre. From my love for manhwa, I thought to myself “why not I create my own manhwa app design”, and here are the results of the design I created.
            </p>
            <p className="text-[14px] text-[#FF8F8F]">
              The images used on this website are for illustrative purposes only. All images used are the property of their respective owners.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-[16px] font-semibold text-white">
              What's User Think?
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
          <div className="flex space-x-2">
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
          <div className="flex flex-col space-y-2">
            <p className="text-[16px] font-semibold text-white">
              Here's The Idea.
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

export default Mobtoon