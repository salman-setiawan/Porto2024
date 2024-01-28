import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Tabs from '../components/Tabs';

const CollectionPages = () => {
	const [activeTab, setActiveTab] = useState('Works');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
	return (
		<div className="bg-[#111111] min-h-screen text-white flex flex-col">
			<div className='flex none'>
				<div className="fixed top-0 w-full" style={{ zIndex: 2 }}>
					<Navbar 
						url1='/bio'
						icon1='/assets/person.svg'
					/>
				</div>
			</div>
			<div className="fixed bottom-0 w-full flex items-center pb-24">
				{activeTab === 'Works' && (
          <Showcase.Works />
        )}
        {activeTab === 'Crafts' && (
          <Showcase.Crafts />
        )}
			</div>
			<div className="fixed bottom-0 w-full flex flex-col none">
				<div className="flex justify-center">
					<Tabs onTabChange={handleTabChange} />
				</div>
				<div className="fixed bottom-0 w-full" style={{ zIndex: 1 }}>
					<div className="flex justify-center pt-2 bg-[#111111] bg-opacity-90">
						<p className="text-[10px] text-[#9F9F9F] mb-3">copyright @ 2024</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CollectionPages;