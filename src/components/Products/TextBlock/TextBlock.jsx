import { Icon } from 'components/Icons/Icon';
import s from './TextBlock.module.css';
import image from 'images/rectangle-tb.jpg';

export const TextBlock = () => {
  return (
    <section className={s.textBlockSection}>
      <div className={s.textBlockWrap}>
        <img className={s.image} src={image} alt="room" />
        <div className={s.textBtnBox}>
          <h3 className={s.title}>How to choose furniture for living room?</h3>
          <div className={s.textWrap}>
            <p className={s.text}>
              Consider a comfortable and stylish sofa set as the focal point.
              Options like sectional sofas or a classNameic three-seater with
              coordinating chairs can work well.
            </p>
            <p className={s.text}>
              Choose a coffee table that complements the style of your seating.
              This could be a sleek, modern table or a rustic wooden piece,
              depending on your preferences.
            </p>
            <p className={s.text}>
              Incorporate bookshelves or display cabinets to showcase books,
              decor, or personal items. This adds character and functionality to
              the space.
            </p>
          </div>
          <button className={s.button}>
            <div className={s.label}>Show more</div>
            <Icon id="btn-up" className={s.icon} />
          </button>
        </div>
      </div>
    </section>
  );
};
