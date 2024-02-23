import styles from "./ShopNow.module.css"

 function ShopNow() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <span className={styles.dressYourNest}>Dress your nest for much less</span>
          <span className={styles.exclusiveDeals}>
            Exclusive furniture and decor deals that fit your style and budget
            <br />
            just a click away. You can't resist them.
          </span>
        </div>
        <button className={styles.button}>
          <span className={styles.label}>Shop now</span>
        </button>
      </div>
      <div className={styles.frame2}>
        <div className={styles.rectangle} />
        <div className={styles.rectangle3} />
      </div>
    </div>
  );
}

export default ShopNow;