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
            desc1='Here are the results of my project during my internship as a UI/UX Designer at PT. Media Kreasi Abadi (MKA). MKA itself is a company engaged in the creative industry such as application and game development located in Balikpapan, East Kalimantan.'
            disclaimer='This project is part of the Certified Internship Program organized by the Kampus Merdeka from the Ministry of Education, Culture, Research, and Technology of the Republic of Indonesia. EduFams itself is a collaborative project involving several students. The project is also assisted by a Product Manager and UI/UX Mentor as field supervisors.'
          />
          <Paragraph 
            title="Work Process."
            desc1='During the internship, I worked with three team members who had different roles to form a team and were given the challenge of creating a startup aimed at solving social and environmental problems in Indonesia, specifically in the East Kalimantan region.'
          />
          <img src="/assets/edufams/article/team.jpg" alt="" className="" />
          <Paragraph
            desc2='The process I went through with my team members in this program involved learning the necessary materials and skills to build a good and proper startup, such as teamwork, brainstorming, research, and startup development. All of these stages were guided by a mentor who also acted as a product manager every week to report the progress that had been made using the agile Kanban approach.'
          />
          <img src="/assets/edufams/article/system.png" alt="" className="" />
          <Paragraph
            desc3='As a UI/UX Designer, my job desk involved designing with a Design Thinking approach in problem-solving, including Empathize, Define, Ideate, Prototyping, and Design. After completing the Design Thinking phase, we proceeded to the Pitching stage as the outcome of the startup creation process developed during the internship.'
          />
          <Paragraph 
            title="Emphatize."
            desc1="In this stage, my team and I conducted a search for a problem based on the given theme by observing and using data obtained from the internet. During the observation process, we encountered the following problems, which we described as follows:"
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
            desc1='From the issues identified in the Empathize stage, the next step is to conduct an analysis to determine the problem statement for the research. The statements obtained are as follows.'
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
            desc1='After determining the problem statement in the research, the next step is to conduct a brainstorming process to find ideas or solutions to the existing problem. The solutions obtained are as follows.'
          />
          <Quote 
            text='Membuat sebuah platform edukasi keluarga untuk memberikan edukasi parenting lewat media informasi seperti artikel dan video, maupun kelas dan pelatihan. Dan juga sekaligus memberi fasilitas berupa layanan donasi untuk membantu meringankan keluarga dengan ekonomi menengah kebawah dalam memenuhi kebutuhannya saat ini.'
          />
          <Paragraph
            desc1='Solusi berhasil didapatkan kemudian lanjut ke proses perencanaan dengan membuat information architecture yang disajikan dalam bentuk mind map untuk menjabarkan apa saja informasi yang diperlukan untuk mewujudkan solusi tersebut. Berikut adalah tangkapan layar dari mind map dengan menggunakan aplikasi berbasis website Miro.'
          />
          <img src="/assets/edufams/article/brand.png" alt="" className="" />
          <Paragraph 
            desc1='The EduFams family education platform is created as a solution for families in need of education and information regarding harmonious and healthy family dynamics.'
            desc2='The main features offered include informational media such as articles and videos about various family-related topics such as parenting, symptoms or syndromes occurring in children, and others.'
            desc3='This platform also provides classes and training related to family matters in the form of both videos and text that can be accessed anytime. Additionally, there are premium features such as counseling via group chat to assist users in better understanding the classes they attend.'
            desc4='Lastly, there is a donation feature with topics related to family issues for users from financially disadvantaged families.'
          />
          <Paragraph
            title='Prototype.' 
            desc1='In this stage, the process of designing the EduFams family education platform begins, starting with wireframe design as the initial concept, followed by the creation of a design system, then the development of mockup designs by combining the wireframe and design system, and finally the prototyping process to make the mockups interactive. This entire process is carried out using the Figma application. The process is outlined as follows.'
            desc2='The process begins by designing wireframes of features and components according to the predetermined planning outcomes. The designs created include two applications: a web-based application and a mobile-based application.'
          />
          <div className="flex flex-col space-y-2">
            <img src="/assets/edufams/article/wire1.png" alt="" className="" />
            <img src="/assets/edufams/article/wire2.png" alt="" className="" />
          </div>
          <Paragraph
            desc1='Next, designing the Design System aims to manage all design elements in the EduFams application to make them appear more consistent and structured. The process of designing the EduFams Design System is divided into two parts: the style guide and the component library. Here are the results.'
          />
          <div className="flex flex-col space-y-2">
            <img src="/assets/edufams/article/styleguide.png" alt="" className="" />
            <img src="/assets/edufams/article/component.jpg" alt="" className="" />
          </div>
          <Paragraph
            desc1='Next, I begin to integrate the initial designs from the previous stage with guidance from the design system to create appealing, colorful, and uniform mockup designs.'
          />
          <div className="w-full">
            <CTAGallery />
          </div>
          <Paragraph
            title='Test.' 
            desc1='After completing all the designs in the prototype stage, we move on to the final stage in the design thinking process. Here, the UI/UX mentor as the user tries out the prepared prototype. You can also try out the built prototype by selecting the CTA below.'
          />
          <div className="flex flex-col space-y-2 w-full">
            <div className="w-full py-2.5 px-3 bg-[#7070ca] bg-opacity-10">
                <DocumentLink
                  url='https://s.itk.ac.id/edufamsweb'
                  icon='/assets/document.svg'
                  text='Website Prototype'
                />
              </div>
              <div className="w-full py-2.5 px-3 bg-[#7070ca] bg-opacity-10">
                <DocumentLink
                  url='https://s.itk.ac.id/edufamsapp'
                  icon='/assets/document.svg'
                  text='Mobile App Prototype'
                />
              </div>
          </div>
          {/* <Paragraph 
            desc1='Setelah menyelesaikan seluruh desain pada tahap prototype, masuk ke tahap terakhir dalam design thinking. Disini mentor ui/ux selaku pengguna mencoba prototype yang sudah dipersiapkan. Adapun beberapa feedback yang didapat saat melakukan testing dijabarkan sebagai berikut.'
          />
           <Quote 
            text='Margin horizontal pada aplikasi berbasis mobile masih terlalu kecil, sehingga dilakukan penambahan ukuran margin yang sebelumnya 16px menjadi 24px agar terlihat lebih lapang seperti pada gambar dibawah.'
          />
          <Quote 
            text='Pada halaman dashboard utama untuk aplikasi berbasis web desain yang ditawarkan terlalu sepi, sehingga diberikan peningkatan dengan menambahkan card pada tiap komponennya serta menambah satu level pada warna latar belakang seperti pada gambar dibawah.'
          /> */}
          {/* <Paragraph 
            title="Pitching Day."
            desc1="Tahap ini saya bersama tim melakukan pencarian suatu permasalahan berdasarkan tema yang didapat dengan melakukan observasi dengan data yang didapat dari internet, selama proses observasi kami mendapatkan permasalahan yang kami jabarkan sebagai berikut ini."
          /> */}
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