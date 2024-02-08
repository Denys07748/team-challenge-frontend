import React from 'react';
import styles from "./MainSection.module.css";

function MainSection() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.heroContent}>
        <div className={styles.textBlock}>
          <div className={styles.heading}>
            <div className={styles.elevateYourSpace}>
              <span className={styles.elevateYourSpace1}>
                Elevate your space with
              </span>
              <span className={styles.empty}> </span>
              <span className={styles.style}>Style</span>
              <span className={styles.empty2}> </span>
              <span className={styles.and}>and </span>
              <span className={styles.style3}>Comfort</span>
            </div>
          </div>
          <span className={styles.styleMeetsComfort}>
            Indulge in the art of living well, where style meets comfort in
            perfect harmony. Elevate your space with Homewell because your home
            deserves nothing less.
          </span>
        </div>
        <button className={styles.button}>
          <span className={styles.shopNow}>Shop now</span>
        </button>
      </div>
      <div className={styles.rectangle} />
    </div>
  );
}

export default MainSection