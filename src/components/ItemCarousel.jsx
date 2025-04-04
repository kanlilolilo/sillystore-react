import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import testimg from '../assets/img/clothing_img/shirt/cat_withshirt.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Zoom, Pagination, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <div className="lg:pt-12">
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          zoom={true}
          spaceBetween={0}
          centeredSlides={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
        >
          {/* big slides */}
          <SwiperSlide className="swiper-zoom-container">
            <a href="" className="cursor-default">
              <img src={testimg} alt="Slide 1" className="w-auto sm:h-[480px] sm:w-auto bg-[#fff]"/>
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="swiper-zoom-container">
            <a href="https://www.rvspijker.nl/" className="cursor-default">
              <img src={testimg} alt="Slide 1" className="w-auto sm:h-[480px] sm:w-auto bg-[#fff]"/>
            </a>
          </SwiperSlide>

          <SwiperSlide className="swiper-zoom-container">
            <a href="" className="cursor-default">
              <img src={testimg} alt="Slide 1" className="w-auto sm:h-[480px] sm:w-auto bg-[#fff]"/>
            </a>
          </SwiperSlide>
          
          
        </Swiper>
      </div>
    </>
  );
}
