import { Splide, SplideSlide , SplideTrack} from '@splidejs/react-splide';
import { ProductCard } from "../../../../components/Products/ProductCard/ProductCard";

import '@splidejs/splide/dist/css/splide.min.css'; 
import styles from "./Splide.Component.module.css"

function SplideComponent() {
      return (
        <Splide options={{ perPage: 4, focus: 0, omitEnd: true, gap: -110,  pagination: true}}>
            
          <SplideSlide className={styles["splide__slide"]}>
            <ProductCard className={styles.slider}/>
          </SplideSlide>
          <SplideSlide className={styles["splide__slide"]}>
            <ProductCard />
          </SplideSlide>
          <SplideSlide className={styles["splide__slide"]}>
            <ProductCard />
          </SplideSlide>
          <SplideSlide className={styles["splide__slide"]}>
            <ProductCard />
          </SplideSlide>
          <SplideSlide className={styles["splide__slide"]}>
            <ProductCard />
          </SplideSlide>
          <SplideSlide className={styles["splide__slide"]}>
            <ProductCard />
          </SplideSlide>
          <SplideSlide className={styles["splide__slide"]}>
            <ProductCard />
          </SplideSlide>
          <div className={styles["splide__pagination"]}></div>
        </Splide>
      );
    };

export default SplideComponent