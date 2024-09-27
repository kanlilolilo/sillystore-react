import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import capybanner1 from '../assets/img/banners/banner_large.gif';
import capybanner2 from '../assets/img/banners/banner_small.png';
import rvspijker1 from '../assets/img/banners/rvspijker_banner.png';
import rvspijker2 from '../assets/img/banners/rvspijker_banner2.png';
import fryventure1 from '../assets/img/banners/fryventure_banner.png';
import fryventure2 from '../assets/img/banners/fryventure_banner2.png';
import albert1 from '../assets/img/banners/albert_banner.png';
import albert2 from '../assets/img/banners/albert_banner2.png';
import gay1 from '../assets/img/banners/gay_banner.png';
import gay2 from '../assets/img/banners/gay_banner2.png';

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
      <div className="-mt-6 -mr-6 -ml-6 mb-6">
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
          <SwiperSlide className="max-sm:hidden swiper-zoom-container">
            <a href="" className="cursor-default">
              <img src={capybanner1} alt="Slide 1" className="w-[1920px] rendering-pixelated"/>
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="max-sm:hidden swiper-zoom-container">
            <a href="https://www.rvspijker.nl/" className="cursor-default">
              <img src={rvspijker1} alt="Slide 1" className="w-[1920px]"/>
            </a>
          </SwiperSlide>

          <SwiperSlide className="max-sm:hidden swiper-zoom-container">
            <a href="" className="cursor-default">
              <img src={fryventure1} alt="Slide 1" className="w-[1920px]"/>
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="max-sm:hidden swiper-zoom-container">
            <a href="" className="cursor-default">
              <img src={albert1} alt="Slide 1" className="w-[1920px]"/>
            </a>
          </SwiperSlide>

          <SwiperSlide className="max-sm:hidden swiper-zoom-container">
            <a href="" className="cursor-default">
              <img src={gay1} alt="Slide 1" className="w-[1920px]"/>
            </a>
          </SwiperSlide>

          {/* small slides */}
          <SwiperSlide className="sm:hidden">
            <a href="" className="cursor-default">
              <img src={capybanner2} alt="Slide 1" className="w-[1920px] rendering-pixelated"/>
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="sm:hidden">
            <a href="https://www.rvspijker.nl/" className="cursor-default">
              <img src={rvspijker2} alt="Slide 2" className="w-[1920px]"/>
            </a>
          </SwiperSlide>

          <SwiperSlide className="sm:hidden">
            <a href="" className="cursor-default">
              <img src={fryventure2} alt="Slide 1" className="w-[1920px]"/>
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="sm:hidden">
            <a href="" className="cursor-default">
              <img src={albert2} alt="Slide 3" className="w-[1920px]"/>
            </a>
          </SwiperSlide>

          <SwiperSlide className="sm:hidden">
            <a href="" className="cursor-default">
              <img src={gay2} alt="Slide 3" className="w-[1920px]"/>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
