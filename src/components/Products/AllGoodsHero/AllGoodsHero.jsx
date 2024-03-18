import s from './AllGoodsHero.module.css';
import livingImg from 'images/rectangle-23.jpg';
import diningImg from 'images/rectangle-19.jpg';
import bedroomImg from 'images/rectangle-17.jpg';
import accessoriesImg from 'images/rectangle-16.jpg';
import saleImg from 'images/rectangle-15.jpg';

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export const AllGoodsHero = () => {
  return (
    <section className={s.heroSection}>
      <div className={s.titleWrap}>
        <h2 className={s.title}>All goods</h2>
      </div>
      <div className={s.imgBox}>
        <Swiper
          slidesPerView={1.04}
          // spaceBetween={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className={s.image} src={livingImg} alt="living" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={s.image} src={diningImg} alt="dining" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={s.image} src={bedroomImg} alt="bedroom" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={s.image} src={accessoriesImg} alt="accessories" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={s.image} src={saleImg} alt="sale" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
