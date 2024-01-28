// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ImageSlide from './ImageSlide';
import ImageLabel from './ImageLabel';
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper/modules';

const Works = () => {
  return (
    <Swiper
      pagination={true} 
      modules={[Pagination]}
    	className='h-[520px] 2xl:h-[675px]'
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Link to="/content/eduwork/galleryview" className='flex justify-center'>
          <div className="space-y-6 2xl:space-y-[58px]">
            <ImageSlide img='/assets/showcase/showcase3.webp' />
            <ImageLabel 
              title='Eduwork Opportunity Page' 
              desc1='PT. Talenta Sinergi Group (Internship)' 
              desc2='Collaboration Works' 
            />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/content/edufams/articleview" className='flex justify-center'>
          <div className="space-y-6 2xl:space-y-[58px]">
            <ImageSlide img='/assets/showcase/showcase4.webp' />
            <ImageLabel 
              title='EduFams' 
              desc1='PT. Media Kreasi Abadi (Internship)' 
              desc2='Personal Works' 
              chipdesc='With UX Case' 
            />
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

const Crafts = () => {
  return (
    <Swiper
      pagination={true} 
      modules={[Pagination]}
    	className='h-[520px] 2xl:h-[675px]'
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Link to="/content/mobtoon/articleview" className='flex justify-center'>
          <div className="space-y-6 2xl:space-y-[58px]">          
            <ImageSlide img='/assets/showcase/showcase1.webp' />
            <ImageLabel 
              title='mobtoon' 
              desc1='June 2023' 
              desc2='Comic App' 
              chipdesc='With UX Case' 
            />
          </div>        
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/content/anotherisland/articleview" className='flex justify-center'>
          <div className="space-y-6 2xl:space-y-[58px]">          
            <ImageSlide img='/assets/showcase/showcase2.webp' />
            <ImageLabel 
              title='Another Day in the Island' 
              desc1='November 2023' 
              desc2='Desktop Arcade Game' 
              chipdesc='With UX Case' 
            />
          </div>       
        </Link>
      </SwiperSlide>

    </Swiper>
  );
}

const Showcase = {
  Works,
  Crafts,
};

export default Showcase;