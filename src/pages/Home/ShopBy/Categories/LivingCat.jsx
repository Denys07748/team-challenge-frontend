import styles from "./LivingCat.module.css"

function LivingCat() {
    return (<div className={styles.categoryCard}>
        <div className={styles.rectangle}/>
        <span className={styles.living}>Living </span>
      </div>)
}

export default LivingCat