import React from 'react'
import Navbar from '../../components/Navbar'
import Paragraph from '../../components/Paragraph'
import CardStandard from '../../components/cardcontent/CardStandard'
import FAB from '../../components/FloatButton'
import CardEvaluation from '../../components/cardcontent/CardEvaluation'
import CTAGallery from '../../components/CTAGallery'

const MobtoonArticle = () => {
  return (
    <div className="bg-[#111111] min-h-screen text-[#d3d3d3]">
      <div className="fixed top-0 w-full">
        <Navbar 
          url1='/collection'
          icon1='/assets/home.svg'
        />
      </div>
      <div className="flex justify-center max-h-screen pt-[70px] pb-8">
        <div className="flex flex-col items-center space-y-8 px-4 md:w-[720px] overflow-y-auto">
          <Paragraph 
            desc1='Lately I have been really enjoying reading manhwa (also known as webtoons, Korean comics) of any genre. From my love for manhwa, I thought to myself “why not I create my own manhwa app design”, and here are the results of the design I created.'
            disclaimer='The images used on this website are for illustrative purposes only. All images used are the property of their respective owners.'
          />
          <Paragraph 
            title="What's User Think"
            desc1='Lately I have been really enjoying reading manhwa (also known as webtoons, Korean comics) of any genre. From my love for manhwa, I thought to myself “why not I create my own manhwa app design”, and here are the results of the design I created.'
            desc2='In this case, I conducted user persona research through random interviews with three of my friends, and then summarized their opinions into key points as references in designing the application.'
            desc3='Here are their opinions on their experiences in reading manhwa so far'
          />
          <div className="grid grid-cols-3 gap-2 items-center">
            <CardStandard
              avatar='/assets/avatar.png' 
              title1='Achmad Rivaldo'
              desc1='Developer'
              title2='Goals'
              desc2='Tampilan aplikasi yang sederhana dengan fungsionalitas yang mudah digunakan.'
              title3='Pain Points'
              desc3='warna background dengan list manhwa yang saling mencolok atau saling gelap (iluminasi warna tidak baik), dan untuk beberapa website mereka menggunakan akun terpisah untuk melakukan komentar pada manhwa yang dibaca sehingga cukup merepotkan.'
            />
            <CardStandard 
              avatar='/assets/avatar.png' 
              title1='Zulfikar Badarudin'
              desc1='Mahasiswa'
              title2='Goals'
              desc2='Saya membaca manhwa biasanya untuk mengisi waktu kosong, untuk tampilan sendiri saya suka yang minimalis dan mudah digunakan.'
              title3='Pain Points'
              desc3='Terkadang beberapa penyedia bacaan memiliki flow yang aneh saat membuka manhwa, bisa saja langsung menampilkan chapter (2 langkah: membuka manhwa, memilih chapter) atau memerlukan langkah tambahan (3 langkah: membuka manhwa, mengakses daftar chapter, memilih chapter). Kemudian banyak popup iklan dan bagian yang tidak diperlukan.'
            />
            <CardStandard 
              avatar='/assets/avatar.png' 
              title1='Riski Kurniawan'
              desc1='Karyawan Swasta'
              title2='Goals'
              desc2='Saya ingin mencari dan membaca manhwa secara cepat dan mudah.'
              title3='Pain Points'
              desc3='Karena biasanya saya hanya membaca, saya ingin melakukannya tanpa harus melakukan registrasi atau autentikasi akun terlebih dahulu.'
            />
          </div>
          <Paragraph 
            title="Here's The Idea"
            desc1="I am designing a brand called 'mobtoon', which is short for mobile cartoon. mobtoon is a mobile-based application for reading web comic. In this design, my objective is to create an engaging and intuitive user interface for its users."
          />
          <img src="/assets/mobtoon/content1.png" alt="" className="" />
          <Paragraph 
            desc2='I started by seeking inspiration and references through a moodboard. I leverage this to determine a comfortable user experience while using the application.'
            desc3="For the brand's color, I chose green because it has a psychologically calming and refreshing effect. The use of green in design can help create a more serene atmosphere, reduce stress, and enhance the reading."
            desc4="Lastly, to aid the reading experience, a font with good readability is necessary. Therefore, I chose the 'Plus Jakarta Sans' font, which has a modern look."
          />
          <div className="w-full">
            <CTAGallery />
          </div>
          <Paragraph 
            title="Feedback"
            desc1='Before initiating the application design process, as the designer, I conducted research by interviewing several individuals (in this case, readers of manhwa) to understand their experiences as users while reading manhwa on websites or mobile applications.'
            desc2='In this case, I conducted Moderated Usability Testing dengan tujuan mengumpulkan feedback dan observasi langsung dari pengguna saat mereka berinteraksi dengan produk atau sistem. Disini seorang moderator memandu pengguna melalui tugas-tugas tertentu, sementara mengamati dan mencatat respon mereka. Adapun metrics yang dinilai adalah waktu yang diperlukan untuk menyelesaikan tugas, tingkat keberhasilan, jumlah kesalahan, dan kepuasan pengguna.'
          />
          <div className="grid grid-cols-2 gap-2 items-center">
            <CardEvaluation
              avatar='/assets/avatar.png' 
              title1='Achmad Rivaldo'
              desc1='Developer'
              metric1='Task Complete'
              result1='5 out of 6'
              metric2='Estimated Time'
              result2='10 minutes'
              title2='Review'
              desc2='Tampilan aplikasi yang sederhana dengan fungsionalitas yang mudah digunakan.'
              title3='Feedback'
              desc3='warna background dengan list manhwa yang saling mencolok atau saling gelap (iluminasi warna tidak baik), dan untuk beberapa website mereka menggunakan akun terpisah untuk melakukan komentar pada manhwa yang dibaca sehingga cukup merepotkan.'
            />
            <CardEvaluation
              avatar='/assets/avatar.png' 
              title1='Achmad Rivaldo'
              desc1='Developer'
              metric1='Task Complete'
              result1='5 out of 6'
              metric2='Estimated Time'
              result2='10 minutes'
              title2='Review'
              desc2='Tampilan aplikasi yang sederhana dengan fungsionalitas yang mudah digunakan.'
              title3='Feedback'
              desc3='warna background dengan list manhwa yang saling mencolok atau saling gelap (iluminasi warna tidak baik), dan untuk beberapa website mereka menggunakan akun terpisah untuk melakukan komentar pada manhwa yang dibaca sehingga cukup merepotkan.'
            />
            <CardEvaluation
              avatar='/assets/avatar.png' 
              title1='Achmad Rivaldo'
              desc1='Developer'
              metric1='Task Complete'
              result1='5 out of 6'
              metric2='Estimated Time'
              result2='10 minutes'
              title2='Review'
              desc2='Tampilan aplikasi yang sederhana dengan fungsionalitas yang mudah digunakan.'
              title3='Feedback'
              desc3='warna background dengan list manhwa yang saling mencolok atau saling gelap (iluminasi warna tidak baik), dan untuk beberapa website mereka menggunakan akun terpisah untuk melakukan komentar pada manhwa yang dibaca sehingga cukup merepotkan.'
            />
            <CardEvaluation
              avatar='/assets/avatar.png' 
              title1='Achmad Rivaldo'
              desc1='Developer'
              metric1='Task Complete'
              result1='5 out of 6'
              metric2='Estimated Time'
              result2='10 minutes'
              title2='Review'
              desc2='Tampilan aplikasi yang sederhana dengan fungsionalitas yang mudah digunakan.'
              title3='Feedback'
              desc3='warna background dengan list manhwa yang saling mencolok atau saling gelap (iluminasi warna tidak baik), dan untuk beberapa website mereka menggunakan akun terpisah untuk melakukan komentar pada manhwa yang dibaca sehingga cukup merepotkan.'
            />
          </div>
          <div className="pb-1"></div>
        </div>
      </div>
      <FAB
        url='/content/mobtoon/galleryview'
        text='See Gallery Design'
      />
      <div className="fixed bottom-0 w-full">
          <div className="flex justify-center pt-2 bg-[#111111] bg-opacity-90">
              <p className="text-[10px] text-[#9F9F9F] mb-3">copyright @ 2024</p>
          </div>
      </div>
    </div>
  )
}

export default MobtoonArticle