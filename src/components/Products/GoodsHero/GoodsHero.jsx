import s from './GoodsHero.module.css';

export const GoodsHero = ({ title, img }) => {
  return (
    <section className={s.heroSection}>
      <div className={s.titleWrap}>
        <h2 className={s.title}>{title}</h2>
      </div>
      <div className={s.imgBox}>
        <img className={s.image} src={img} alt={title} />
      </div>
    </section>
  );
};
