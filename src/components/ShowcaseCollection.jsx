// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ImageSlide from './ImageSlide';
import ImageLabel from './ImageLabel';
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper/modules';

const Showcase = () => {
  return (
    <Swiper
      pagination={true} 
      modules={[Pagination]}
    	className='h-[560px] md:h-[640px]'
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Link to="/content/mobtoon/articleview" className='space-y-8'>        
          <ImageSlide img='/assets/craft1.png' />
          <ImageLabel title='mobtoon' desc1='June 2023' desc2='Comic App' chipdesc='With UX Case' />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/content/anotherisland/articleview" className='space-y-8'>       
          <ImageSlide img='/assets/craft2.png' />
          <ImageLabel title='Another Day in the Island' desc1='November 2023' desc2='Desktop Arcade Game' chipdesc='With UX Case' />
        </Link>
      </SwiperSlide>
      {/* <SwiperSlide>
        <ImageSlide img='/assets/craft3.png' />
        <ImageLabel title='30 Days Design Challenge' desc1='February 2024' desc2='Design Challenge' chipdesc='Gallery Design' />
      </SwiperSlide> */}
      <SwiperSlide>
        <Link to="/x" className='space-y-8'>
          <ImageSlide img='/assets/craft4.png' />
          <ImageLabel title='Eduwork Opportunity Page' desc1='PT. Talenta Sinergi Group (Internship)' desc2='Collaboration Works' chipdesc='Website Available' />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/x" className='space-y-8'>
          <ImageSlide img='/assets/craft5.png' />
          <ImageLabel title='DEKAT Website Page' desc1='Ghazi Teknologi Indonesia' desc2='Personal Works' chipdesc='Website Available' />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/x" className='space-y-8'>
          <ImageSlide img='/assets/craft6.png' />
          <ImageLabel title='Torche Career Website Page' desc1='Torche Education (Internship)' desc2='Personal Works' chipdesc='Gallery Design' />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/x" className='space-y-8'>
          <ImageSlide img='/assets/craft7.png' />
          <ImageLabel title='EduFams' desc1='PT. Media Kreasi Abadi (Internship)' desc2='Personal Works' chipdesc='Gallery Design' />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default Showcase