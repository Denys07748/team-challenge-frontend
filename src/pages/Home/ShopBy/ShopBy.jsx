import AccessoriesCat from "./Categories/Accessories";
import BedroomCat from "./Categories/BedroomCat";
import DiningCat from "./Categories/DiningCat";
import LivingCat from "./Categories/LivingCat";
import styles from "./ShopBy.module.css"
import { Link } from 'react-router-dom';

function ShopBy() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.shopByCategories}>
          <span className={styles.shopBy}>Shop by </span>
          <span className={styles.categories}>categories</span>
        </div>
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <Link to="living">
                <LivingCat/>
            </Link>
            <Link to="bedroom">
                <BedroomCat />
            </Link>
          </div>
          <div className={styles.frame5}>
            <Link to="dining">
                <DiningCat />
            </Link>
            <Link to="accessories">
                <AccessoriesCat />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  export default ShopBy;