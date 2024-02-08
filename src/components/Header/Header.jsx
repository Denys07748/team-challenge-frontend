import MyInput from 'components/UI/input/MyInput';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { Icon } from 'components/Icons/Icon';

const Header = () => {
  return (
    <div className={styles['header-desktop']}>
      <div className={styles['header-row-1']}>
        <Link to="home">
          <Icon id={'logo'} className={styles['logo-header-desktop']} />
        </Link>
        <div className={styles['account-cart-and-button']}>
          <div className={styles.mobileInput}>
            <Icon id={'search'} className={styles['icons3']} />
          </div>
          <div className={styles['account']}>
            <div className={styles.iconsMob}>
              <Icon id={'account'} className={styles['icons']} />
            </div>
            <div className={styles['account2']}>
              <Icon id={'account'} className={styles['icons']} />
              Account{' '}
            </div>
          </div>
          <div className={styles['cart']}>
            <div className={styles.iconsMob}>
              <Icon id={'basket'} className={styles['icons']} />
            </div>
            <div className={styles['cart2']}>
              <Icon id={'basket'} className={styles['icons']} />
              Cart{' '}
            </div>
          </div>
          <div className={styles['button']}>
            <div className={styles['label']}>Join or Log in </div>
          </div>
        </div>
      </div>
      <div className={styles['header-row-2']}>
        <div className={styles['menu-items']}>
          <div className={styles['state-layer']}>
            <Link to="/allgoods" className={styles['all-goods']}>
              All goods
            </Link>
          </div>
        </div>
        <div className={styles['menu-items']}>
          <div className={styles['state-layer']}>
            <Link to="/living" className={styles['living']}>
              Living
            </Link>{' '}
          </div>
        </div>
        <div className={styles['menu-items']}>
          <div className={styles['state-layer']}>
            <Link to="/dining" className={styles['dining']}>
              Dining
            </Link>{' '}
          </div>
        </div>
        <div className={styles['menu-items']}>
          <div className={styles['state-layer']}>
            <Link to="/bedroom" className={styles['bedroom']}>
              Bedroom
            </Link>{' '}
          </div>
        </div>
        <div className={styles['menu-items']}>
          <div className={styles['state-layer']}>
            <Link to="/accessories" className={styles['accessories']}>
              Accessories
            </Link>{' '}
          </div>
        </div>
        <div className={styles['menu-items']}>
          <div className={styles['state-layer']}>
            <Link to="/sale" className={styles['sale']}>
              Sale
            </Link>{' '}
          </div>
        </div>
        <div className={styles['search']}>
          <MyInput />
        </div>
      </div>
    </div>
  );
};

export default Header;
