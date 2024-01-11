// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import ImageSlide from './ImageSlide';
import ImageLabel from './ImageLabel';

const ShowcaseContent = () => {
  return (
    <Swiper
    	className=''
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='space-y-8'>
        <ImageSlide img='/assets/craft1.png' />
        <ImageLabel title='mobtoon' desc1='June 2023' desc2='Comic App' />
      </SwiperSlide>
      <SwiperSlide className='space-y-8'>
        <ImageSlide img='/assets/craft2.png' />
        <ImageLabel title='Another Day in the Island' desc1='November 2023' desc2='Desktop Arcade Game' />
      </SwiperSlide>
      <SwiperSlide className='space-y-8'>
        <ImageSlide img='/assets/craft3.png' />
        <ImageLabel title='mobtoon' desc1='February 2024' desc2='Design Challenge' />
      </SwiperSlide>
    </Swiper>
  );
};

export default ShowcaseContent