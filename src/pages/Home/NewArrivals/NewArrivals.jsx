import styles from "./NewArrivals.module.css"
import SplideComponent from "./Splide/Splide.Component";

function NewArrivals() {
  

  return (

    <div className={styles.mainContainer}>
      <div className={styles.frame}>
        <div className={styles.boughtTogether}>
          <span className={styles.new}>New </span>
          <span className={styles.arrivals}>arrivals</span>
        </div>
      </div>
      <SplideComponent />
    </div>
  );
}

export default NewArrivals