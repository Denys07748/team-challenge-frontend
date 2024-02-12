import { Icon } from 'components/Icons/Icon';
import styles from "./WhyHomewell.module.css"

 function WhyHomewell() {
  return (
    
    <div className={styles.mainContainer}>
        <div className={styles.frame}>
        <button className={styles.whyChooseHomewell}>
          <span className={styles.whyChoose}>Why choose</span>
          <span className={styles.empty}> </span>
          <span className={styles.homewell}>Homewell</span>
        </button>
      </div>
      <div className={styles.feature}>
        <Icon id={'truck'} className={styles.icons1} />
        <span className={styles.fastAndReliableDelivery}>
          Fast and reliable delivery
        </span>
      </div>
      <div className={styles.feature1}>
      <Icon id={'gift'} className={styles.icons2} />
        <span className={styles.bonusesAndGifts}>
          Bonuses and gifts for customers
        </span>
      </div>
      <div className={styles.feature3}>
      <Icon id={'comments'} className={styles.icons3} />
        <span className={styles.tailoredCustomerSupport}>
          Tailored customer support
        </span>
      </div>
      <div className={styles.feature5}>
      <Icon id={'face'} className={styles.icons4} />
        <span className={styles.satisfactionguarantee}>Satisfaction guarantee</span>
      </div>
    </div>
  );
}

export default WhyHomewell;