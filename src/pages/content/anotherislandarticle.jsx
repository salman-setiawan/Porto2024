import React from 'react'
import Navbar from '../../components/Navbar'
import Paragraph from '../../components/Paragraph'
import CardStandard from '../../components/cardcontent/CardStandard'
import DocumentLink from '../../components/DocumentLink'
import FAB from '../../components/FloatButton'
import CardChart from '../../components/cardcontent/CardChart'
import CTAGallery from '../../components/CTAGallery'
import Copyright from '../../components/Copyright'
import Slider from '../../components/Slider'
import Quote from '../../components/Quote'

const AnotherIslandArticle = () => {
  return (
    <div className="bg111 text-[#d3d3d3]">
      <div className="fixed top-0 w-full">
        <Navbar 
          url1='/collection'
          icon1='/assets/home.svg'
        />
      </div>
      <div className="flex justify-center max-h-screen pt-[70px] pb-8">
        <div className="flex flex-col space-y-8 px-4 md:w-[720px] overflow-y-auto">
          <Paragraph 
            desc1="This project is a simple arcade game with a survival theme called Another Day in the Island, which I designed as research for my final project as a computer science student at the Kalimantan Institute of Technology. You can play this game on the link down below."
            disclaimer="This game can be play on PC only using mouse and keyboard for the controller."
          />
          <div className="w-full py-2.5 px-3 bg-[#7070ca] bg-opacity-10">
            <DocumentLink
              url='https://anotherisland.netlify.app'
              icon='/assets/document.svg'
              text='Play the game here'
            />
          </div>
          <Paragraph 
            desc2="In this game, players take on the role of a mysterious character with the alias 'Unknown,' whose objective is to gather as many points as possible by defeating monsters scattered throughout the area. Here's a brief preview of the game."
          />
          <video autoPlay muted loop className='w-full'>
            <source src="/assets/anotherisland/showcase.mp4" type="video/mp4" />
          </video>
          <Paragraph 
            title='Method'
            desc1="This research employs the User-Centered Design (UCD) approach, a method that places users as the primary focus in the product, application, or experience design process. According to usability.gov, UCD follows a life cycle, as illustrated in the image below."
          />
          <img src="/assets/anotherisland/article/content1.webp" alt="" className="" />
          <Paragraph 
            title='Identify Need.'
            desc1="The needs identification stage is where the researcher identifies the requirements that users will have while playing the designed arcade game. A questionnaire can serve as a tool to assist the researcher in the process of identifying user needs throughout the project."
            desc2="The questions presented to participants consist of several sections. The first part includes questions about the participants' profiles, such as age range, their preferences for games and reasons behind them, and the players' experiences with arcade games. The second part involves questions from the participants' perspective on arcade games in terms of gameplay, visuals, overall impressions, and finally, their preference for the desired game model to be developed."
            desc3="Here are the questionnaire results successfully collected as of February 4, 2023"
          />
          <div className="w-full grid md:grid-cols-2 gap-2 items-start">
            <CardChart 
              title1='Age Range'
              metric1='7-12'
              metric2='13-17'
              metric3='18-22'
              metric4='23-28'
              metric5='29-34'
              metric6='35-40'
              metric7='40 and above'
              result1='1%'
              result2='0%'
              result3='78,4%'
              result4='11,8%'
              result5='5,9%'
              result6='2%'
              result7='0%'
            />
            <CardChart 
              title1='Reasons for Playing Video Games'
              metric1='For entertainment purpose.'
              metric2='As a hobby.'
              metric3='Having career in Esports.'
              metric4='Finding bugs in games.'
              metric5='Others.'
              result1='57,1%'
              result2='30,6%'
              result3='8,2%'
              result4='2%'
              result5='2%'
            />
            <CardChart 
              title1='Pernah Bermain Permainan Arcade'
              metric1='Yes'
              metric2='No'
              result1='98%'
              result2='2%'
            />
            <div className="md:mt-[-22px]">
              <CardChart
                title1='Model Permainan Arcade yang Diinginkan'
                desc1='Multiple Choice Options'
                metric1='Platform Game'
                metric2='Tower Defense'
                metric3='Survival'
                metric4='3-Match'
                result1='57,1%'
                result2='30,6%'
                result3='8,2%'
                result4='2%'
              />
            </div>
          </div>
          <Paragraph 
            desc1="To understand the participants more deeply, the next stage is creating user personas to gain a clear understanding of what users are currently experiencing and needing. Here is an example of the user personas that have been created."
          />
          <div className="md:hidden">
            <Slider>
              <CardStandard
                avatar='/assets/avatar.png' 
                title1='Rudi'
                desc1='College Student, 21 Years Old'
                title2='Personality'
                desc2='Introvert, enjoys playing games of various genres, especially retro/classic games.'
                title3='Goals'
                desc3='Wants to explore more interesting games to play. Enjoys completing games by collecting achievements, achieving the highest possible score, and even reaching the top rank if possible.'
                title4='Frustation'
                desc4='Rudi sometimes gets easily bored, and he really wants to try games with classic concepts but with modern design and sensations.'
              />
              <CardStandard 
                avatar='/assets/avatar.png' 
                title1='Anna'
                desc1='Tutor, 24 Years Old'
                title2='Personality'
                desc2='Extrovert, currently working as a tutor on an educational platform. He also has other hobbies such as watching dramas and listening to music during his free time.'
                title3='Goals'
                desc3='Seeking entertainment to relieve fatigue from daily life as a tutor by playing casual games while enhancing skills and abilities in gaming.'
                title4='Frustation'
                desc4='Rudi sometimes gets easily bored, and he really wants to try a game with a classic concept but with a more modern design and sensation.'
              />
            </Slider>
          </div>
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-2 items-center">
              <CardStandard
                avatar='/assets/avatar.png' 
                title1='Rudi'
                desc1='College Student, 21 Years Old'
                title2='Personality'
                desc2='Introvert, enjoys playing games of various genres, especially retro/classic games.'
                title3='Goals'
                desc3='Wants to explore more interesting games to play. Enjoys completing games by collecting achievements, achieving the highest possible score, and even reaching the top rank if possible.'
                title4='Frustation'
                desc4='Rudi sometimes gets easily bored, and he really wants to try games with classic concepts but with modern design and sensations.'
              />
              <CardStandard 
                avatar='/assets/avatar.png' 
                title1='Anna'
                desc1='Tutor, 24 Years Old'
                title2='Personality'
                desc2='Extrovert, currently working as a tutor on an educational platform. He also has other hobbies such as watching dramas and listening to music during his free time.'
                title3='Goals'
                desc3='Seeking entertainment to relieve fatigue from daily life as a tutor by playing casual games while enhancing skills and abilities in gaming.'
                title4='Frustation'
                desc4='Rudi sometimes gets easily bored, and he really wants to try a game with a classic concept but with a more modern design and sensation.'
              />
            </div>
          </div>
          <Paragraph 
            title='Specify Context of Use.'
            desc1="The results obtained from the questionnaire participants will be used to identify user preferences in the game to be developed. This points will be used as references in the design of the Another Day in the Island arcade game. Here are the key points."
          />
          <Slider>
            <CardStandard 
              title1='Point 1'
              desc1='The majority of players want games that can entertain them.'
            />
            <CardStandard 
              title1='Point 2'
              desc1='The majority of players prefer games with a survival theme.'
            />
            <CardStandard 
              title1='Point 3'
              desc1='The majority of players have played arcade games before.'
            />
            <CardStandard 
              title1='Point 4'
              desc1="From the player's perspective, they want to play something engaging and simple games that reduce their fatigue."
            />
          </Slider>
          <Paragraph 
            title='Specify Requirement.'
            desc1="In this stage, the researcher will establish the necessary requirements for the game design by conducting research on competitors, such as similar or related games. The research is carried out to understand how their products function, identify areas for improvement, and create features that are more appealing than those of competitors."
            desc2="In this case, the researcher has selected a game with a similar mechanism, namely the arcade game series from Bandai Namco called Galaga."
          />
          <div className="flex flex-col space-y-2.5">
            <img src="/assets/anotherisland/article/content2.webp" alt="" className="w-full" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
              <CardStandard 
                title1='Game'
                desc1='ARCADE GAME SERIES: GALAGA'
                title2='Publisher'
                desc2='Bandai Namco Ent.'
                title3='Release Date'
                desc3='16 April 2016'
                title4='Platform'
                desc4='Desktop/PC'
                title5='Feature and Design'
                desc5='This game offers features such as simple and easy-to-understand controls, allowing players to focus on the shooting action. In terms of design, the game maintains a retro aesthetic with enhanced graphics to provide a more modern look.'
              />
              <CardStandard 
                title1='Review and Rating'
                desc1='This game has received highly positive reviews, with 90% out of 637 reviews on Steam. The majority of players enjoy the game but mostly for the sake of nostalgia.'
                title2='Strength and Weakness'
                desc2='The strengths of this game lie in its easy gameplay, a strong sense of nostalgia reminiscent of childhood games, and a variety of enemies with different levels of difficulty. The weakness of the game is that for those without memories of Galaga, the game may be less appealing due to its classic arcade design and mechanics. Player movement is limited, only to the right and left.'
              />
            </div>
          </div>
          <Paragraph 
            desc1='Based on the attached data, the design of the Another Day in the Island game can be done by creating a simple game with a more modern interface and characters. One advantage is that the player character can move freely, enhancing the gaming experience.'
          />
          <Paragraph 
            title='Product Design Solution.'
            desc1="This stage involves creating design solutions, starting from building rough concepts such as the Game Design Document (GDD), storyboard, and wireframe, to comprehensive designs like UI mockups."
            desc2='The creation of the GDD serves as the foundational structure for the game to be developed. The design outlined in the GDD may evolve with updates to the game. Here is the GDD that has been created. You can see the whole GDD that i create below.'
          />
          <div className="w-full py-2.5 px-3 bg-[#7070ca] bg-opacity-10">
            <DocumentLink
              url='https://s.itk.ac.id/gddaip'
              icon='/assets/document.svg'
              text='Game Design Document'
            />
          </div>
          <Paragraph 
            desc1="The GDD has been successfully designed, and the next step is the storyboard design phase. The goal of designing the storyboard is to provide a comprehensive understanding of what kind of game will be created. Here are the visual results of the designed storyboard."
          />
          <img src="/assets/anotherisland/article/content3.webp" alt="" className="w-full" />
          <Paragraph
            desc1="The image above is the result of a storyboard illustrating how the game will unfold. The storyboard's flow begins when the player opens the game until completing it."
            desc2="With the completion of the storyboard, the next step is entering the wireframe design process, aiming to visualize the designed concepts into the framework of the game's interface."
          />
          <img src="/assets/anotherisland/article/content4.webp" alt="" className="" />
          <Paragraph
            desc1="The image above displays the game's interface layout that will be designed according to the flow established in the Game Design Document (GDD) and the previously crafted storyboard. The next step involves designing the style guide and design components (this information can be accessed in the previously created GDD). The final step is creating the UI Mockup design as a visual representation closely resembling the desired product."
          />
          <div className="w-full">
            <CTAGallery />
          </div>
          <Paragraph 
            title='Evaluation Design.'
            desc1="The goal of this evaluation is to gather player opinions on the built game through prepared questions and understand what players feel while playing. This evaluation will be conducted iteratively to determine whether the conducted evaluations are satisfactory or not."
          />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            <img src="/assets/anotherisland/article/user1.webp" alt="" className="w-full" />
            <img src="/assets/anotherisland/article/user2.webp" alt="" className="w-full" />
          </div>
          <Paragraph
            desc2="The first stage involves collecting feedback using questions that will be included in the player usability questionnaire for the game. Parameters used for analysis include age, gender, and questions about Another Day in the Island. Age is used to analyze the level of understanding of game analysis. Gender is used as a comparative measure of the tendency to assess the game. Here's the result."
          />
          <div className="w-full grid md:grid-cols-2 gap-2">
            <CardChart 
              title1='Participant'
              metric1='Male'
              metric2='Female'
              metric3='Total Participant'
              result1='6'
              result2='4'
              result3='10'
            />
            <CardChart 
              title1='Range of Age Participant'
              metric1='7-12'
              metric2='13-17'
              metric3='18-22'
              metric4='23-28'
              result1='1'
              result2='1'
              result3='5'
              result4='3'
            />
          </div>
          <Paragraph 
            desc1="Next is the usability questions about the game are used to evaluate the user interface and user experience in the game. For the usability testing questions in the questionnaire, they will be presented with a rating scale ranging from 1 to 5. Here's the information about the question and scale as shown in the image below."
          />
          <div className="w-full grid md:grid-cols-2 gap-2 items-start">
            <CardStandard 
              title1='Satisfaction'
              desc1={(
                <>
                  <p>How much do you like this game?</p>
                  <p>Has this game met your expectations as a player?</p>
                  <p>How enjoyable is it to play this game?</p>
                  <p>Does this game motivate you to keep playing?</p>
                </>
              )}
            />
            <CardStandard 
              title1='Learnability'
              desc1='How easy is this game to play?'
            />
            <CardStandard 
              title1='Memorability'
              desc1='How easy is it to understand the flow of this game?'
            />
            <div className="md:mt-[-64px]">
              <CardStandard 
                title1='Efficiency'
                desc1="How easy is it to understand the information in this game?"
              />
            </div>
          </div>
          <Paragraph 
            desc1="Players will also be asked for reviews and feedback in the form of criticisms and suggestions that can contribute to the development of the user experience and user interface of this game. Here are the results of the evaluation for the arcade game 'Another Day in the Island' that I obtained."
          />
          <img src="/assets/anotherisland/article/ces1.webp" alt="" className="w-full" />
          <Paragraph 
            desc1="The image above illustrates the overall usability level of the game 'Another Day in the Island' with a score of 3.72, which is above average on a scale of 1 (very negative) to 5 (very positive), indicating a good level of usability. The graph shows customer effort scores (CES) on the y-axis (vertical) and usability criteria such as Satisfaction (3.675), Learnability (3.2), Efficiency (4), and Memorability (4.1) on the x-axis (horizontal)."
            desc2='The next stage is processing data from open-ended questions such as reviews and feedback from players. The results have been selected based on the similarity of opinions provided by players. Here are some examples of the feedback results that have been collected.'
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            <CardStandard 
              avatar='/assets/avatar.png' 
              title1='Rudi'
              desc1='College Student, 21 Years Old'
              title2='Review'
              desc2='From a visual and audio standpoint, the game feels very good for its genre, but there seem to be some hidden pixels on obstacles in the game, causing frequent glitches. In terms of gameplay experience, the game has very easy and engaging gameplay, but the objectives in the game are few (only avoiding and eliminating), making it feel monotonous, lacking exploration, and lacking the desire to continue playing.'
              title3='Feedback'
              desc3='Additional objectives beyond survival and elimination, such as power-ups, in-game currency, stage levels, etc., can be added to prevent monotony. Additionally, several warnings can be included when entering the game, such as flashes of light, scary images, etc.'
            />
            <CardStandard 
              avatar='/assets/avatar.png' 
              title1='Anna'
              desc1='Tutor, 24 Years Old'
              title2='Review'
              desc2='The game is interesting and exciting, and the difficulty in the gameplay is also thrilling. However, sometimes there are too many enemy spawns, limiting mobility.'
              title3='Feedback'
              desc3="When playing the game, I encountered several bugs, such as when entering the options menu, the existing enemies will reset, and the SFX and BGM options still don't work. Perhaps creating easier stage levels like a tutorial to facilitate players in getting to know the game."
            />
          </div>
          <Paragraph 
            desc1="From the evaluation results, the next step will focus on improving user experience and user interface. Here are the process and decision that I take on the design improvement."
            desc2="The results of the collected feedback will then be incorporated into the development of a tool to determine the prioritization of values versus efforts to assist designers in making better decisions."
          />
          <img src="/assets/anotherisland/article/ev.webp" alt="" className="w-full" />
          <CardStandard 
              title1='Description of the analysis'
              desc1="Improvements to be made include enhancing all features in the green area, as they impact player experience in the game and can be implemented quickly."
              desc2="Enhancements in the yellow area will include a tutorial stage to ease players into the game and improvements to the tutorial page created previously. Power-up buffs will be added to increase gameplay variety, and excessive enemy spawns in casual stages will be addressed to prevent the game from becoming overly challenging for players."
              desc3="Improvements that will not be made in the yellow area include the money currency due to the complexity of the feature and the game not yet needing it. The wide gap in difficulty between casual and hell levels will remain, as the hell levels are intentionally designed to be extremely challenging for players seeking extreme difficulty."
              desc4="No enhancements will be made in the red area due to low urgency and requiring significant resources for development."
            />
          <Paragraph 
            desc1="From the analysis above, the improvements to be made can be seen in the following points."
          />
          <div className="flex flex-col space-y-2">
            <Quote 
              text="Occasionally occurring bugs that disrupt players' comfort during gameplay have been identified. One bug occurs in the hell level where bullets continue to spawn at the position of a defeated monster. Additionally, there are issues with the background and sound effects settings not functioning properly during gameplay. To address these issues and ensure players can enjoy a smooth experience, adjustments will be made to the game's event sheet."
            />
            <Quote 
              text={(
                <>
                  <p>Improvement involves creating a specific stage dedicated to providing gameplay guidance in the game "Another Day in the Island," as depicted in the image below.</p>
                  <img src="/assets/anotherisland/article/fix1.webp" alt="" className="w-full py-4" />
                  <p>The image above shows the tutorial page accessible from the main menu. However, due to a lack of player interest in accessing this page, improvements have been made as depicted in the image below.</p>
                  <img src="/assets/anotherisland/article/fix2.webp" alt="" className="w-full py-4" />
                  <img src="/assets/anotherisland/article/fix3.webp" alt="" className="w-full py-4" />
                  <img src="/assets/anotherisland/article/fix4.webp" alt="" className="w-full py-4" />
                  <p>The two images above represent the improvement of the game guide from regular information to playable stages. These tutorial stages are intended for players who find the game challenging, allowing them to play these stages first. This feature also adds variation in difficulty levels, including easy, medium, and hard levels.</p>
                  <img src="/assets/anotherisland/article/fix5.webp" alt="" className="w-full py-4" />
                  <p>Changes have been made to the main menu layout by removing the guide button. Additionally, a few gameplay instructions have been incorporated into the casual stages for players who want to bypass the tutorial stage.</p>
                </>
              )}
            />
            <Quote 
              text={(
                <>
                  <p>Designing a power-up system involves incorporating buffs to enhance the game's variety, as illustrated in the image below.</p>
                  <img src="/assets/anotherisland/article/fix6.webp" alt="" className="w-full py-4" />
                  <p>The image above illustrates that after a player defeats a monster in an area, the monster will drop an orb with a small probability, as depicted. Once a player obtains this orb, they will receive a buff effect, as shown in the image below.</p>
                  <img src="/assets/anotherisland/article/fix7.webp" alt="" className="w-full py-4" />
                  <p>The image above depicts the player's condition upon receiving the shield buff, where the player will be protected by a large spherical shield for several seconds. This shield will destroy anything that comes into contact with it, such as monsters or bullets from monsters.</p>
                </>
              )}
            />
            <Quote 
              text={(
                <>
                  <p>Lastly, at the beginning of the game, a page is designed to display a warning about photosensitivity symptoms, allowing players with similar symptoms to choose to avoid the game. The interface can be seen in the image below.</p>
                  <img src="/assets/anotherisland/article/fix8.webp" alt="" className="w-full py-4" />
                </>
              )}
            />
          </div>
          <Paragraph 
            desc1="The final step is to report and discuss the decisions that have been made. The last stage involves direct interaction with players regarding the improvements that have been implemented. Below are the results obtained from this second evaluation."
          />
          <img src="/assets/anotherisland/article/ces2.webp" alt="" className="w-full" />
          <Paragraph 
            desc1="The above image compares the evaluation data 1 and 2 for the game 'Another Day in the Island,' showing a difference in overall usability. Evaluation 1 recorded a score of 3.72, while Evaluation 2 indicates an improvement with a score of 4.14. This evaluation suggests that the game has undergone improvements in usability between the two evaluations. In the comparison chart, it can be seen that usability criteria such as satisfaction, learnability, efficiency, and memorability also experienced overall improvement. Satisfaction increased from 3.68 to 4.03, learnability from 3.1 to 3.7, efficiency from 4.0 to 4.3, and memorability from 4.1 to 4.55. The column comparison chart visualizes this improvement clearly, highlighting the progress achieved in each usability aspect."
            desc2='The changes and improvements implemented between Evaluation 1 and 2 have successfully enhanced the usability level of each criterion, providing a better gaming experience for users of Another Day in the Island.'
            desc3='The next stage is processing data from open-ended questions such as reviews and feedback from players. The results have been selected based on the similarity of opinions provided by players. Here are some examples of the feedback results that have been collected.'
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            <CardStandard 
              avatar='/assets/avatar.png' 
              title1='Rudi'
              desc1='College Student, 21 Years Old'
              title2='Review'
              desc2="For the design aspect, it's already very good and easy to understand, and the tutorial updates are great and easy to comprehend, and the buffs are very helpful in gameplay."
              title3='Feedback'
              desc3='Additionally, adding a storyline like cutscenes at the beginning of the game, and varied enemy types and power-ups can enhance the experience.'
            />
            <CardStandard 
              avatar='/assets/avatar.png' 
              title1='Anna'
              desc1='Tutor, 24 Years Old'
              title2='Review'
              desc2="It's more easy to play because there are tutorial stages, perfect for filling leisure time, especially with the interesting buff feature."
              title3='Feedback'
              desc3="I don't have any suggestions for game development as it's already good, especially the bugs I've encountered have been fixed."
            />
          </div>
          <Paragraph 
            title='Aftermath.'
            desc1="The User Interface (UI) and User Experience (UX) design for the arcade game 'Another Days in the Island' has successfully provided an enjoyable gaming experience. The implementation of the User-Centered Design (UCD) principles in UI and UX development has enhanced user acceptance and engagement. Evaluation involving questionnaires and interviews ensures design alignment with user preferences, resulting in an optimal experience that meets user expectations."
            desc2="In addition, this game is still in the early stages, with many concepts, features, and designs that can be further developed beyond what has been created so far. Thank you for reading until the end."
          />
          <div className="pb-6 md:pb-1"></div>
        </div>
      </div>
      <FAB
        url='/content/anotherisland/galleryview'
        text='See Gallery Design'
      />
      <div className="fixed bottom-0 w-full">
        <Copyright />
      </div>
    </div>
  )
}

export default AnotherIslandArticle