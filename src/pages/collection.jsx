import React from 'react';
import Navbar from '../components/Navbar';
import Showcase from '../components/ShowcaseCollection';
import Tabs from '../components/Tabs';
import Dots from '../components/Dots';

const CollectionPages = () => {
    return (
        <div className="bg-[#111111] min-h-screen text-white flex flex-col">
            <div className='flex none'>
                <div className="fixed top-0 w-full" style={{ zIndex: 2 }}>
                    <Navbar title='Salman Setiawan' subtitle='UI Designer' icon1='/assets/home.svg' icon2='/assets/person.svg' icon3='/assets/contact_page.svg' />
                </div>
            </div>
            <div className="fixed bottom-2 w-full flex items-center pb-36">
                <Showcase />
            </div>
            <div className="fixed bottom-1 w-full flex flex-col none">
                <div className="flex justify-center pb-6">
                    <Dots />
                </div>
                <div className="flex justify-center">
                    <Tabs />
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