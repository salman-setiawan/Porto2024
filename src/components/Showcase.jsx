// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ImageSlide from './ImageSlide';
import ImageLabel from './ImageLabel';
import { Link } from 'react-router-dom';

const slideInfo = {
  Works: [
    {
      url: '/content/eduwork/articleview',
      img: '/assets/showcase/showcase3.webp',
      title: 'Eduwork Mentor Page',
      desc1: 'PT. Talenta Sinergi Group (Internship)',
      desc2: 'Collaboration Works',
    },
    {
      url: '/content/edufams/articleview',
      img: '/assets/showcase/showcase4.webp',
      title: 'EduFams',
      desc1: 'PT. Media Kreasi Abadi (Internship)',
      desc2: 'Personal Works',
    },
    {
      url: '/content/duadelapans/articleview',
      img: '/assets/showcase/showcase6.webp',
      title: 'Catalog Book Website',
      desc1: 'CV. Dua Delapan September (Freelance)',
      desc2: 'Personal Work',
    },
  ],
  Crafts: [
    {
      url: '/content/anotherisland/articleview',
      img: '/assets/showcase/showcase2.webp',
      title: 'Another Day in the Island',
      desc1: 'November 2023',
      desc2: 'Desktop Arcade Game',
    },
    {
      url: '/content/uigallery/galleryview',
      img: '/assets/showcase/showcase5.webp',
      title: 'My UI Collection',
      desc1: 'March 2024',
      desc2: 'Instagram Showcase',
    },
    {
      url: '/content/mobtoon/articleview',
      img: '/assets/showcase/showcase1.webp',
      title: 'mobtoon',
      desc1: 'January 2024',
      desc2: 'Comic App',
    },
  ],
};

const Works = ({ onSlideChange }) => {
  const [bgImage, setBgImage] = useState('bg-case2');
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(3);

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
      {slideInfo.Works.map((slide, index) => (
        <SwiperSlide key={index}>
          <Link to={slide.url} className='flex flex-col justify-center carousel'>
            <ImageSlide img={slide.img} />
            <ImageLabel 
              title={slide.title}
              desc1={slide.desc1}
              desc2={slide.desc2}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Crafts = ({ onSlideChange }) => {
  const [bgImage, setBgImage] = useState('bg-case2');
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(3);

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
      {slideInfo.Crafts.map((slide, index) => (
        <SwiperSlide key={index}>
          <Link to={slide.url} className='flex flex-col justify-center carousel'>
            <ImageSlide img={slide.img} />
            <ImageLabel 
              title={slide.title}
              desc1={slide.desc1}
              desc2={slide.desc2}
            />
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