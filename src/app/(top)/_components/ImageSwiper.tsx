'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Swiper styles
import 'swiper/css';

import styles from './ImageSwiper.module.css';

export const ImageSwiper = () => {
  const images = [
    '/image/slides/baide.jpg',
    '/image/slides/c3.png',
    '/image/slides/da.jpg',
    '/image/slides/fugedaku.png',
    '/image/slides/gtl.png',
    '/image/slides/impression.png',
    '/image/slides/jogi.png',
    '/image/slides/piapro.png',
    '/image/slides/qpic.png'
  ];

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true
        }}
        speed={5000}
        spaceBetween={20}
        className={styles.swiper}
      >
        {images.concat(images).map((imageSrc, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Image
              src={imageSrc}
              alt={`Genre ${index}`}
              width={1000}
              height={1000}
              className={styles.image}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
