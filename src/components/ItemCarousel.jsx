import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import frontimg from '../assets/img/clothing_img/shirt/cat_withshirt_small.png';
import backimg from '../assets/img/clothing_img/shirt/cat_withshirt_back.png';
import sideimg from '../assets/img/clothing_img/shirt/cat_withshirt_side.png';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

export default function ItemCarousel({ artistImage }) {
  // Images to display in carousel
  const images = [frontimg, backimg, sideimg];

  // Positioning styles per slide for the artist image
  const artistImagePositions = [
    'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', // Front
    'hidden', // Back
    'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5%] ml-[10%] mt-[10%]' // Side
  ];

  return (
    <div className="max-w-[500px] mx-auto relative">
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
        {images.map((img, index) => (
          <SwiperSlide key={index} className="swiper-zoom-container">
            <div className="relative">
              <img src={img} alt={`Slide ${index + 1}`} className="bg-[#fff]" />
              {artistImage && (
                <img
                  src={artistImage}
                  alt="Top Artist"
                  className={`absolute w-[30%] h-[20%] ${artistImagePositions[index]}`}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
