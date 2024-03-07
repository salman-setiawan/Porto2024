import React from 'react'
import Navbar from '../../components/Navbar'
import Paragraph from '../../components/Paragraph'
import CardStandard from '../../components/cardcontent/CardStandard'
import FAB from '../../components/FloatButton'
import Quote from '../../components/Quote'
import CTAGallery from '../../components/CTAGallery'
import DocumentLink from '../../components/DocumentLink'
import Copyright from '../../components/Copyright'
import Slider from '../../components/Slider'



const EdufamsArticle = () => {
  return (
    <div>
      <div className="text-[#d3d3d3] bg111">
        <div className="fixed top-0 w-full">
          <Navbar 
            url1='/collection'
            text1='go back'
            url2='mailto:salmansetiawan88@gmail.com'
            text2='hire me'
          />
        </div>
        <div className="flex justify-center max-h-screen pt-[70px] pb-8">
          <div className="flex flex-col space-y-8 px-4 md:w-[720px] overflow-y-auto">
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
            <Slider>
              <CardStandard 
                title1='Problem 1'
                desc1='During the COVID-19 pandemic, children in Indonesia spent more time at home with gadgets for playing and socializing. Based on data from the Central Statistics Agency in 2021, 88.99% of children aged 5 and above have accessed the internet for social media, and 63.08% for entertainment such as games. This can lead to gadget addiction in children if not handled properly.'
              />
              <CardStandard  
                title1='Problem 2'
                desc1="During the COVID-19 pandemic, according to the National Commission on Violence Against Women (Komnas Perempuan) in 2022, there were 64,211 cases of child marriage dispensation in 2011, which is three times higher than the previous year's 23,126 cases. This highlights the urgent need for parenting education."
              />
              <CardStandard  
                title1='Problem 3'
                desc1='Based on an interview with a 43-year-old mother, it can be concluded that during the COVID-19 pandemic, many workers were laid off, leading to economic collapse for lower-middle-class families. In this case, buying necessities for children and families has become difficult.'
              />
            </Slider>
            <Paragraph
              title='Define.' 
              desc1='From the issues identified in the Empathize stage, the next step is to conduct an analysis to determine the problem statement for the research. The statements obtained are as follows.'
            />
            <Slider>
              <CardStandard 
                title1='Opinion 1'
                desc1='Children are at risk of becoming addicted to gadgets if they are not provided with proper parenting education.'
              />
              <CardStandard  
                title1='Opinion 2'
                desc1='The need for parenting education is crucial, especially for couples with children.'
              />
              <CardStandard  
                title1='Opinion 3'
                desc1='Many families need funds for their living expenses.'
              />
            </Slider>
            <Paragraph
              title='Ideate.' 
              desc1='After determining the problem statement in the research, the next step is to conduct a brainstorming process to find ideas or solutions to the existing problem. The solutions obtained are as follows.'
            />
            <Quote 
              text='Creating a family education platform to provide parenting education through informational media such as articles and videos, as well as classes and training. It also provides facilities in the form of donation services to help alleviate the burden of lower-middle-class families in meeting their current needs.'
            />
            <Paragraph
              desc1='The solution was successfully obtained and then continued to the planning process by creating an information architecture presented in the form of a mind map to outline what information is needed to realize the solution. Here is a screenshot of the mind map using the Miro web-based application.'
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
            <Paragraph 
              title="Pitching Day."
              desc1="This stage is the final stage carried out with all team members. Here, we pitch to the mentor acting as an investor about the EduFams project that has been developed over the past few months."  
            />
            <img src="/assets/edufams/article/pitch.jpg" alt="" className="" />
            <Paragraph 
              desc1="The pitching activity is conducted alternately at the MKA office with other teams. This activity is also quite an interesting and challenging experience for me because it requires good communication and selling skills to make the mentors interested in the product I have developed."
            />
            <div className="pb-6 md:pb-1"></div>
          </div>
        </div>
        <FAB
          url='/content/edufams/galleryview'
          text='See Gallery Design'
        />
        <div className="fixed bottom-0 w-full">
          <Copyright />
        </div>
      </div>
    </div>
  )
}

export default EdufamsArticle