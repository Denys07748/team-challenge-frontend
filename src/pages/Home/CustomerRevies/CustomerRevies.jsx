import React from 'react';
import styles from "./CustomerRevies.module.css"

 function CustomerRevies() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.frame}>
        <span className={styles.whatClientsSay}>
          What clients say about Homewell
        </span>
      </div>
      <div className={styles.frame1}>
        <span className={styles.homewellTestimonial}>
          "Homewell is a haven for style enthusiasts like myself. The curated
          collection is a testament to their dedication to aesthetics and
          quality. Each piece feels like a work of art, and I'm thrilled with
          the transformative impact they've had on my living space."
        </span>
      </div>
      <div className={styles.frame2}>
        <div className={styles.frame3}>
          <div className={styles.ellipse} />
          <div className={styles.frame4}>
            <div className={styles.frame5}>
              <span className={styles.name}>Alex R.</span>
            </div>
          </div>
        </div>
        {/* .map((el, i) => 
            <div className={styles.ellipseNone}></div>
        ) */}
      </div>
    </div>
  );
}

export default CustomerRevies;