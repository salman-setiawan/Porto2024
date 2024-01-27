import React from 'react'
import Navbar from '../../components/Navbar'
import Paragraph from '../../components/Paragraph'
import CardStandard from '../../components/cardcontent/CardStandard'
import FAB from '../../components/FloatButton'
import Quote from '../../components/Quote'
import CTAGallery from '../../components/CTAGallery'
import DocumentLink from '../../components/DocumentLink'

const EdufamsArticle = () => {
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
            desc1='Berikut adalah hasil proyek saya selama mengikuti kegiatan magang sebagai UI/UX Designer di PT. Media Kreasi Abadi (MKA). MKA sendiri merupakan sebuah perusahaan yang bergerak pada industri kreatif seperti pengembang aplikasi dan permainan yang berlokasi di Balikpapan, Kalimantan Timur.'
            disclaimer='Proyek ini merupakan bagian dari program Magang Bersertifikat yang diselenggarakan oleh Kampus Merdeka dari Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia. EduFams sendiri merupakan proyek kolaboratif bersama beberapa mahasiswa, proyek ini juga dibantu Product Manager dan Mentor UI/UX selaku pembimbing lapangan.'
          />
          <Paragraph 
            title="Work Process."
            desc1='Selama magang saya bersama 3 anggota dengan role yang berbeda membentuk sebuah tim dan diberikan tantangan untuk membuat suatu Startup yang bertujuan untuk memecahkan masalah sosial dan lingkungan di Indonesia khususnya daerah Kalimantan Timur.'
          />
          <img src="/assets/edufams/article/team.jpg" alt="" className="" />
          <Paragraph
            desc2='Proses yang saya lalui bersama anggota tim pada program ini adalah mempelajari materi dan keterampilan yang diperlukan untuk membangun Startup yang baik dan benar, seperti Teamwork, Brainstorming, Research, serta membangun Startup. Semua tahapan ini dipandu oleh seorang mentor sekaligus product manager setiap minggunya untuk melaporkan progress yang sudah dikerjakan dengan pedekatan metode agile Kanban.'
          />
          <img src="/assets/edufams/article/system.png" alt="" className="" />
          <Paragraph
            desc3='Jobdesk saya selaku UI/UX Designer yaitu dengan melakukan perancangan dengan pendekatan Design Thinking dalam pemecahan masalah, seperti Emphatize, Define, Ideate, Prototyping, dan Design. Setelah tahap Design Thinking selesai, kemudian dilanjutkan dengan tahap Pitching sebagai hasil dari proses pembuatan startup yang dibangun selama masa magang.'
          />
          <Paragraph 
            title="Emphatize."
            desc1="Tahap ini saya bersama tim melakukan pencarian suatu permasalahan berdasarkan tema yang didapat dengan melakukan observasi dengan data yang didapat dari internet, selama proses observasi kami mendapatkan permasalahan yang kami jabarkan sebagai berikut ini."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            <CardStandard 
              title1='Problem 1'
              desc1='Selama pandemi covid-19 membuat anak-anak di Indonesia lebih banyak menghabiskan waktunya dirumah dengan gadget untuk bermain dan bersosialisasi. Berdasarkan data Badan Pusat Statistik tahun 2021 sebanyak 88,99% anak berumur 5 tahun ke atas sudah mengakses internet 
              seperti sosial media dan 63,08% untuk hiburan seperti game. Hal ini bisa
              menyebabkan terjadinya kecanduan gadget pada anak jika tidak ditangani 
              dengan tepat.'
            />
            <div className="flex flex-col space-y-2">
              <CardStandard  
                title1='Problem 2'
                desc1='Selama pandemi covid-19 berdasarkan Komnas Perempuan tahun 2022 
                sebanyak 64.211 kasus dispensasi pernikahan anak terjadi selama tahun 
                2011 yang mana meningkat 3 kali lipat dari tahun sebelumnya yang hanya 
                sebesar 23.126 kasus. Yang menyebabkan urgensi kebutuhan edukasi 
                parenting sangatlah tinggi.'
              />
              <CardStandard  
                title1='Problem 3'
                desc1='Berdasarkan hasil wawancara dengan seorang ibu berumur 43 tahun. 
                Dapat disimpulkan bahwa selama pandemi covid-19 banyak pekerja yang 
                terkena PHK menyebabkan keruntuhan ekonomi bagi keluarga menengah 
                kebawah, dalam hal ini untuk membeli kebutuhan anak dan keluarga 
                menjadi hal yang sulit untuk dilakukan.'
              />
            </div>
          </div>
          <Paragraph
            title='Define.' 
            desc1='Dari permasalahan yang sudah didapatkan pada tahap emphatize selanjutnya dilakukan Analisa untuk menentukan pernyataan masalah pada penelitian. Adapun pernyataan yang didapat adalah sebagai berikut.'
          />
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
            <CardStandard 
              title1='Opinion 1'
              desc1=' Anak beresiko mengalami kecanduan gadget jika tidak diberikan edukasi parenting.'
            />
            <CardStandard  
              title1='Opinion 2'
              desc1='Perlunya edukasi parenting untuk orang tua khususnya pasangan usia anak.'
            />
            <CardStandard  
              title1='Opinion 3'
              desc1='anyak keluarga yang membutuhkan dana untuk kebutuhan hidup.'
            />
          </div>
          <Paragraph
            title='Ideate.' 
            desc1='Setelah menentukan pernyataan masalah pada penelitian, selanjutnya dilakukan proses brainstorming dengan mencari gagasan atau ide sebagai solusi dari masalah yang ada. Adapun solusi yang didapat adalah sebagai berikut.'
          />
          <Quote 
            text='Membuat sebuah platform edukasi keluarga untuk memberikan edukasi parenting lewat media informasi seperti artikel dan video, maupun kelas dan pelatihan. Dan juga sekaligus memberi fasilitas berupa layanan donasi untuk membantu meringankan keluarga dengan ekonomi menengah kebawah dalam memenuhi kebutuhannya saat ini.'
          />
          <Paragraph
            desc1='Solusi berhasil didapatkan kemudian lanjut ke proses perencanaan dengan membuat information architecture yang disajikan dalam bentuk mind map untuk menjabarkan apa saja informasi yang diperlukan untuk mewujudkan solusi tersebut. Berikut adalah tangkapan layar dari mind map dengan menggunakan aplikasi berbasis website Miro.'
          />
          <img src="/assets/edufams/article/brand.png" alt="" className="" />
          <Paragraph 
            desc1='Platform edukasi keluarga EduFams dibuat sebagai solusi masalah bagi keluarga yang membutuhkan edukasi dan informasi seputar keluarga yang harmonis dan baik.'
            desc2='Fitur utama yang ditawarkan antara lain media informasi berupa artikel maupun video mengenai informasi seputar keluarga seperti parenting anak, gejala atau sindrom yang terjadi pada anak, dan lain sebagainya.'
            desc3='Platform ini juga menyediakan kelas dan pelatihan terkait keluarga dalam berbentuk video maupun teks yang bisa diakses kapan saja. Ditambah fitur berbayar seperti konseling via group chat untuk membantu pengguna lebih memahami kelas yang diikuti.'
            desc4='Terakhir ada fitur donasi dengan topik seputar dunia keluarga untuk pengguna dari keluarga yang kekurangan secara finansial.'
          />
          <Paragraph
            title='Prototype.' 
            desc1='Pada tahap ini proses merancang platform edukasi keluarga EduFams dimulai, mulai dari desain wireframe sebagai rancangan awal, pembuatan design system, pembuatan mockup design dari penggabungan wireframe dan design system, terakhir proses prototyping agar mockup dapat berinteraksi. Proses ini sepenuhnya dikerjakan pada aplikasi Figma. Adapun proses tersebut dijabarkan sebagai berikut ini.'
            desc2='Proses dimulai dengan merancang wireframe dari fitur dan komponen sesuai dengan hasil planningyang sudah ditentukan. Adapun desain yang dibuat meliputi dua aplikasi yakni aplikasi berbasis website dan aplikasi berbasis mobile.'
          />
          <div className="flex flex-col space-y-2">
            <img src="/assets/edufams/article/wire1.png" alt="" className="" />
            <img src="/assets/edufams/article/wire2.png" alt="" className="" />
          </div>
          <Paragraph
            desc1='Selanjutnya merancang Design System yang bertujuan untuk mengelola seluruh elemen desain yang ada pada aplikasi EduFams sehingga terlihat lebih konsisten dan terstruktur. Proses perancangan Design System EduFams terbagi menjadi dua hal, styleguide dan component library. Berikut Hasilnya.'
          />
          <div className="flex flex-col space-y-2">
            <img src="/assets/edufams/article/styleguide.png" alt="" className="" />
            <img src="/assets/edufams/article/component.jpg" alt="" className="" />
          </div>
          <Paragraph
            desc1='Selanjutnya saya mulai memadukan rancangan awal pada tahap sebelumnya dengan panduan dari design system untuk menciptakan desain mockup yang menarik, berwarna, dan seragam.'
          />
          <div className="w-full">
            <CTAGallery />
          </div>
          <Paragraph
            title='Test.' 
            desc1='Setelah menyelesaikan seluruh desain pada tahap prototype, masuk ke tahap terakhir dalam design thinking. Disini mentor ui/ux selaku pengguna mencoba prototype yang sudah dipersiapkan. Adapun beberapa feedback yang didapat saat melakukan testing dijabarkan sebagai berikut.'
          />
          <div className="flex flex-col space-y-2 w-full">
            <div className="w-full py-2.5 px-3 bg-[#7070ca] bg-opacity-10">
                <DocumentLink
                  url='https://s.itk.ac.id/gddaip'
                  icon='/assets/document.svg'
                  text='Game Design Document'
                />
              </div>
              <div className="w-full py-2.5 px-3 bg-[#7070ca] bg-opacity-10">
                <DocumentLink
                  url='https://s.itk.ac.id/gddaip'
                  icon='/assets/document.svg'
                  text='Game Design Document'
                />
              </div>
          </div>
          <Paragraph 
            desc1='Setelah menyelesaikan seluruh desain pada tahap prototype, masuk ke tahap terakhir dalam design thinking. Disini mentor ui/ux selaku pengguna mencoba prototype yang sudah dipersiapkan. Adapun beberapa feedback yang didapat saat melakukan testing dijabarkan sebagai berikut.'
          />
           <Quote 
            text='Margin horizontal pada aplikasi berbasis mobile masih terlalu kecil, sehingga dilakukan penambahan ukuran margin yang sebelumnya 16px menjadi 24px agar terlihat lebih lapang seperti pada gambar dibawah.'
          />
          <Quote 
            text='Pada halaman dashboard utama untuk aplikasi berbasis web desain yang ditawarkan terlalu sepi, sehingga diberikan peningkatan dengan menambahkan card pada tiap komponennya serta menambah satu level pada warna latar belakang seperti pada gambar dibawah.'
          />
          <div className="pb-8"></div>
        </div>
      </div>
      <FAB
        url='/content/edufams/galleryview'
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

export default EdufamsArticle