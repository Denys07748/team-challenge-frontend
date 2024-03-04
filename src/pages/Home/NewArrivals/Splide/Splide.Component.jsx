import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SwiperCore from "swiper"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '../../../../components/Products/ProductCard/ProductCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Splide.css"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function SplideComponent() {
  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth > 1279 ? 4 : 2);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth > 1279 ? 4 : 2);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide><ProductCard /></SwiperSlide>
      <SwiperSlide><ProductCard /></SwiperSlide>
      <SwiperSlide><ProductCard /></SwiperSlide>
      <SwiperSlide><ProductCard /></SwiperSlide>
      <SwiperSlide><ProductCard /></SwiperSlide>
      <SwiperSlide><ProductCard /></SwiperSlide>
      <SwiperSlide><ProductCard /></SwiperSlide>
      <SwiperSlide><ProductCard /></SwiperSlide>
      <SwiperSlide><ProductCard /></SwiperSlide>
      <SwiperSlide><ProductCard /></SwiperSlide>
    </Swiper>
  );
}

export default SplideComponent;
