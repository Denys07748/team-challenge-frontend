import s from './Contacts.module.css';
import css from '../Services/Services.module.css';
import { Icon } from 'components/Icons/Icon';

export const Contacts = () => {
  return (
    <div className={s.contacts}>
      <div className={s.contactsBox}>
        <h3 className={s.title}>Contacts</h3>
        <ul className={css.servisList}>
          <li className={s.contactsItem}>
            <Icon id={'location'} className={s.icon} />
            <div className={s.textWrap}>
              <p className={s.text}>Holosiivsky ave, 89, Kyiv Ukraine</p>
            </div>
          </li>
          <li className={s.contactsItem}>
            <Icon id={'phone'} className={s.icon} />
            <p className={s.text}>+38 (098) 128-49-45</p>
          </li>
          <li className={s.contactsItem}>
            <Icon id={'email'} className={s.icon} />
            <p className={s.text}>homewell@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
