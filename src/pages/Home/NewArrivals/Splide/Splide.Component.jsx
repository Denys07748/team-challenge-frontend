import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SwiperCore from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ProductCard } from '../../../../components/Products/ProductCard/ProductCard';
// import styles from './Splide.Component.module.css';
// import '@splidejs/react-splide/css/skyblue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Splide.css"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function SplideComponent() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={4}
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
