import { Icon } from 'components/Icons/Icon';
import styles from './MyInput.module.css';

const MyInput = () => {
  return (
    <>
      <input
        className={styles.input}
        placeholder="What are you looking for?"
      ></input>
      <Icon id={'search'} className={styles['icons3']} />
    </>
  );
};

export default MyInput;
