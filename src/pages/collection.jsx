import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Tabs from '../components/Tabs';
import Copyright from '../components/Copyright';
import Popup from '../components/Popup';
import Fade from '../components/motion/Fade';

const CollectionPages = () => {
	const [activeTab, setActiveTab] = useState('Works');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
	return (
		<div className="bg-[#111111] min-h-screen text-white flex flex-col">
			<video autoPlay muted loop className='absolute min-h-screen max-h-full w-full object-cover opacity-[5%]'>
        <source src="/assets/bio/sea.webm" type="video/mp4" />
      </video>
			<Fade>
				<div className='flex none'>
					<div className="fixed top-0 w-full" style={{ zIndex: 2 }}>
						<Navbar 
							url1='/bio'
							icon1='/assets/person.svg'
						/>
					</div>
					<div className="fixed w-full" style={{ zIndex: 3 }}>
						<Popup />
					</div>
				</div>
				<div className="fixed bottom-0 w-full flex items-center pb-[92px]">
					{activeTab === 'Works' && (
						<Showcase.Works />
					)}
					{activeTab === 'Crafts' && (
						<Showcase.Crafts />
					)}
				</div>
				<div className="fixed bottom-0 w-full flex flex-col none">
					<div className="flex justify-center select">
						<Tabs onTabChange={handleTabChange} />
					</div>
				</div>
			</Fade>
			<div className="fixed bottom-0 w-full" style={{ zIndex: 1 }}>
				<div className="flex justify-center pt-2">
					<p className="text-[11px] text-[#9F9F9F] mb-3">copyright @ 2024</p>
				</div>
			</div>
		</div>
	);
};

export default CollectionPages;