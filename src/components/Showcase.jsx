// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ImageSlide from './ImageSlide';
import ImageLabel from './ImageLabel';
import { Link } from 'react-router-dom';
import SlideNumber from './SlideNumber';

const Works = () => {
  const [bgImage, setBgImage] = useState('bg-case1');
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(3);

  const handleSlideChange = (swiper) => {
    const currentSlideIndex = swiper.realIndex;
    setCurrentSlide(currentSlideIndex + 1);
    setTotalSlides(swiper.slides.length);
    if (currentSlideIndex === 0) {
      setBgImage('bg-case1');
    } else if (currentSlideIndex === 1) {
      setBgImage('bg-case2');
    } else if (currentSlideIndex === 2) {
      setBgImage('bg-case1'); 
    } else if (currentSlideIndex === 3) {
      setBgImage('bg-case2'); 
    } else {
      setBgImage('bg-black');
    }
  };

  return (
    <Swiper
      className={`h-screen ${bgImage}`}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => handleSlideChange(swiper)}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Link to="/content/eduwork/articleview" className='flex flex-col justify-center'>
          <SlideNumber
            current={currentSlide}
            totalCurrent={totalSlides}
          />
          <ImageSlide 
            img='/assets/showcase/showcase3.webp'
          />
          <ImageLabel 
            title='Eduwork Mentor Page' 
            desc1='PT. Talenta Sinergi Group (Internship)' 
            desc2='Collaboration Works'
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/content/edufams/articleview" className='flex flex-col justify-center'>
          <SlideNumber
            current={currentSlide}
            totalCurrent={totalSlides}
          />
          <ImageSlide 
            img='/assets/showcase/showcase4.webp'
          />          
          <ImageLabel 
            title='Eduwork Mentor Page' 
            desc1='PT. Talenta Sinergi Group (Internship)' 
            desc2='Collaboration Works'
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/content/duadelapans/articleview" className='flex flex-col justify-center'>
          <SlideNumber
            current={currentSlide}
            totalCurrent={totalSlides}
          />
          <ImageSlide 
            img='/assets/showcase/showcase6.webp'
          /> 
          <ImageLabel 
            title='Eduwork Mentor Page' 
            desc1='PT. Talenta Sinergi Group (Internship)' 
            desc2='Collaboration Works'
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

const Crafts = () => {
  const [bgImage, setBgImage] = useState('bg-case1');
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(3);

  const handleSlideChange = (swiper) => {
    const currentSlideIndex = swiper.realIndex;
    setCurrentSlide(currentSlideIndex + 1);
    setTotalSlides(swiper.slides.length);
    if (currentSlideIndex === 0) {
      setBgImage('bg-case1');
    } else if (currentSlideIndex === 1) {
      setBgImage('bg-case2');
    } else if (currentSlideIndex === 2) {
      setBgImage('bg-case1'); 
    } else if (currentSlideIndex === 3) {
      setBgImage('bg-case2'); 
    } else {
      setBgImage('bg-black');
    }
  };

  return (
    <Swiper
      className={`h-screen ${bgImage}`}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => handleSlideChange(swiper)}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Link to="/content/anotherisland/articleview" className='flex flex-col justify-center'>
          <SlideNumber
            current={currentSlide}
            totalCurrent={totalSlides}
          />
          <ImageSlide 
            img='/assets/showcase/showcase2.webp'
          />
          <ImageLabel 
            title='Another Day in the Island' 
            desc1='November 2023' 
            desc2='Desktop Arcade Game'
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/content/uigallery/galleryview" className='flex flex-col justify-center'>
          <SlideNumber
            current={currentSlide}
            totalCurrent={totalSlides}
          />
          <ImageSlide 
            img='/assets/showcase/showcase5.webp'
          />
          <ImageLabel 
            title='My UI Collection' 
            desc1='March 2024' 
            desc2='Instagram Showcase' 
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/content/mobtoon/articleview" className='flex flex-col justify-center'>
          <SlideNumber
            current={currentSlide}
            totalCurrent={totalSlides}
          />
          <ImageSlide 
            img='/assets/showcase/showcase1.webp'
          />
          <ImageLabel 
            title='mobtoon' 
            desc1='January 2024' 
            desc2='Comic App'
          />
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