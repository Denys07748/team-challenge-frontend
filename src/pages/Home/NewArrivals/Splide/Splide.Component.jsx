import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ProductCard } from '../../../../components/Products/ProductCard/ProductCard';
import styles from './Splide.Component.module.css';
import '@splidejs/react-splide/css/skyblue';


function SplideComponent() {
  return (
    <Splide
      options={{
        perPage: 4,
        focus: 0,
        omitEnd: true,
        gap: -110,
        pagination: true,
        arrows: true
      }}
    >
      <SplideSlide className={styles['splide__slide']}>
        <ProductCard className={styles.slider} />
      </SplideSlide>
      <SplideSlide className={styles['splide__slide']}>
        <ProductCard />
      </SplideSlide>
      <SplideSlide className={styles['splide__slide']}>
        <ProductCard />
      </SplideSlide>
      <SplideSlide className={styles['splide__slide']}>
        <ProductCard />
      </SplideSlide>
      <SplideSlide className={styles['splide__slide']}>
        <ProductCard />
      </SplideSlide>
      <SplideSlide className={styles['splide__slide']}>
        <ProductCard />
      </SplideSlide>
      <SplideSlide className={styles['splide__slide']}>
        <ProductCard />
      </SplideSlide>
      <div className={styles['splide__pagination']}></div>
    </Splide>
  );
}

export default SplideComponent;
