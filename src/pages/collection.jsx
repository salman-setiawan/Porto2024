import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Tabs from '../components/Tabs';
import Fade from '../components/motion/Fade';
import SlideNumber from '../components/SlideNumber';


const CollectionPages = () => {
	const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(3);

	const [activeTab, setActiveTab] = useState('Works');

	const handleSlideChange = ({ currentSlide, totalSlides }) => {
    setCurrentSlide(currentSlide);
    setTotalSlides(totalSlides);
  };

	const handleTabChange = (tab) => {
		setActiveTab(tab);
	};

	const slideInfo = {
		Works: [
			{
				img: '/assets/showcase/showcase3.webp',
				title: 'Eduwork Mentor Page',
				desc1: 'PT. Talenta Sinergi Group (Internship)',
				desc2: 'Collaboration Works',
			},
			{
				img: '/assets/showcase/showcase4.webp',
				title: 'EduFams',
				desc1: 'PT. Media Kreasi Abadi (Internship)',
				desc2: 'Personal Works',
			},
			{
				img: '/assets/showcase/showcase6.webp',
				title: 'Catalog Book Website',
				desc1: 'CV. Dua Delapan September (Freelance)',
				desc2: 'Personal Work',
			},
		],
		Crafts: [
			{
				img: '/assets/showcase/showcase2.webp',
				title: 'Another Day in the Island',
				desc1: 'November 2023',
				desc2: 'Desktop Arcade Game',
			},
			{
				img: '/assets/showcase/showcase5.webp',
				title: 'My UI Collection',
				desc1: 'March 2024',
				desc2: 'Instagram Showcase',
			},
			{
				img: '/assets/showcase/showcase1.webp',
				title: 'mobtoon',
				desc1: 'January 2024',
				desc2: 'Comic App',
			},
		],
	};
	
	return (
		<div className="bg-[#111111] min-h-screen text-white flex flex-col">
			<Fade>
				<div className='flex none'>
					<div className="fixed top-0 w-full" style={{ zIndex: 2 }}>
						<Navbar 
							url1='/bio'
							text1='about me'
							url2='https://read.cv/eisenflux'
							text2='read.cv'
						/>
						<SlideNumber
							current={currentSlide}
							totalCurrent={totalSlides}
						/>
					</div>
				</div>
				<div className="">
					{activeTab === 'Works' && (
						<Showcase.Works onSlideChange={handleSlideChange} />
					)}
					{activeTab === 'Crafts' && (
						<Showcase.Crafts onSlideChange={handleSlideChange} />
					)}
				</div>
				<div className="fixed bottom-0 w-full none" style={{ zIndex: 1 }}>
					<div className="flex justify-center">
						<Tabs onTabChange={handleTabChange} />
					</div>
				</div>
			</Fade>
			<div className="fixed bottom-0 w-full" style={{ zIndex: 1 }}>
				<div className="flex justify-center pt-2">
					<p className="text-[11px] text-[#B5B5B5] mb-3 cursonone">copyright @ 2024</p>
				</div>
			</div>
		</div>
	);
};

export default CollectionPages;