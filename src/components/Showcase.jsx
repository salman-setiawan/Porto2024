// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ImageSlide from './ImageSlide';
import ShowcaseContent from '../data/showcase';
import { Link } from 'react-router-dom';


const Works = ({ onSlideChange }) => {
  const [bgImage, setBgImage] = useState('bg-case2');
  const [, setCurrentSlide] = useState(1);
  const [, setTotalSlides] = useState(3);

  const handleSlideChange = (swiper) => {
    const currentSlideIndex = swiper.realIndex;
    setCurrentSlide(currentSlideIndex + 1);
    setTotalSlides(swiper.slides.length);
    if (currentSlideIndex === 0) {
      setBgImage('bg-case2');
    } else if (currentSlideIndex === 1) {
      setBgImage('bg-case2');
    } else if (currentSlideIndex === 2) {
      setBgImage('bg-case2'); 
    } else {
      setBgImage('bg-case2');
    }
    onSlideChange({ 
      currentSlide: currentSlideIndex + 1, 
      totalSlides: swiper.slides.length 
    });
  };

  return (
    <Swiper
      className={`h-screen ${bgImage}`}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => handleSlideChange(swiper)}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {ShowcaseContent.Works.sort((a, b) => a.id - b.id).map((slide, index) => (
        <SwiperSlide key={index}>
          <Link to={slide.url} className='flex flex-col justify-center carousel'>
            <ImageSlide img={slide.img} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Crafts = ({ onSlideChange }) => {
  const [bgImage, setBgImage] = useState('bg-case2');
  const [, setCurrentSlide] = useState(1);
  const [, setTotalSlides] = useState(3);

  const handleSlideChange = (swiper) => {
    const currentSlideIndex = swiper.realIndex;
    setCurrentSlide(currentSlideIndex + 1);
    setTotalSlides(swiper.slides.length);
    if (currentSlideIndex === 0) {
      setBgImage('bg-case2');
    } else if (currentSlideIndex === 1) {
      setBgImage('bg-case2');
    } else if (currentSlideIndex === 2) {
      setBgImage('bg-case2'); 
    } else {
      setBgImage('bg-black');
    }
    onSlideChange({ 
      currentSlide: currentSlideIndex + 1, 
      totalSlides: swiper.slides.length 
    });
  };

  return (
    <Swiper
      className={`h-screen ${bgImage}`}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => handleSlideChange(swiper)}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {ShowcaseContent.Crafts.sort((a, b) => a.id - b.id).map((slide, index) => (
        <SwiperSlide key={index}>
          <Link to={slide.url} className='flex flex-col justify-center carousel'>
            <ImageSlide img={slide.img} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const Showcase = {
  Works,
  Crafts,
};

export default Showcase;