import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import testimg from '../assets/img/clothing_img/shirt/cat_withshirt_small.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';


export default function App() {
  return (
    <>
      <div className="">
        <Swiper
          style={{
            '--swiper-navigation-color': '#000',
            '--swiper-pagination-color': '#000',
          }}
          zoom={true}
          spaceBetween={0}
          centeredSlides={true}
          navigation={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
        >
          {/* big slides */}
          <SwiperSlide className="swiper-zoom-container">
              <img src={testimg} alt="Slide 1" className="bg-[#fff]"/>
          </SwiperSlide>
          
          <SwiperSlide className="swiper-zoom-container">
              <img src={testimg} alt="Slide 1" className="bg-[#fff]"/>
          </SwiperSlide>

          <SwiperSlide className="swiper-zoom-container">
              <img src={testimg} alt="Slide 1" className="bg-[#fff]"/>
          </SwiperSlide>
          
          
        </Swiper>
      </div>
    </>
  );
}
