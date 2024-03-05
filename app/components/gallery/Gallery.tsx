'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import { Pagination } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Gallery.module.css';
import { images } from './images';

import 'swiper/css';
import 'swiper/css/pagination';

const Gallery = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperRef>(null);

  const { scrollYProgress } = useScroll({
    target: sliderRef,
    offset: ['start end', 'end start'],
  });

  const imagePostion = useTransform(
    scrollYProgress,
    [0, 1],
    ['-180px', '180px'],
  );

  const handlePrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  };

  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div ref={sliderRef}>
        <Swiper
          ref={swiperRef}
          className={styles.slider}
          loop
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={30}
          speed={1400}
        >
          {images.map((slide) => (
            <SwiperSlide key={slide.image} className={styles.slide}>
              <div className={styles.imageBox}>
                <motion.div style={{ y: imagePostion }}>
                  <Image
                    alt="Image with Adam"
                    className={styles.slideImage}
                    height={472}
                    quality={100}
                    src={slide.image}
                    width={928}
                  />
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
          <Image
            alt="Left Arrow"
            className={styles.leftArrow}
            draggable={false}
            height={32}
            onClick={handlePrev}
            src="/gallery-arrow.svg"
            width={32}
          />
          <Image
            alt="Right Arrow"
            className={styles.rightArrow}
            draggable={false}
            height={32}
            onClick={handleNext}
            src="/gallery-arrow.svg"
            width={32}
          />
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
