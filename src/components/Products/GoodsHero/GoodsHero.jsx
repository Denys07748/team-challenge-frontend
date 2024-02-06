import s from './GoodsHero.module.css';
import livingImg from 'images/rectangle-23.jpg';

export const GoodsHero = () => {
  return (
    <section className={s.heroSection}>
      <div className={s.titleWrap}>
        <h2 className={s.title}>Living</h2>
      </div>
      <div className={s.imgBox}>
        <img className={s.image} src={livingImg} alt="living" />
      </div>
    </section>
  );
};
