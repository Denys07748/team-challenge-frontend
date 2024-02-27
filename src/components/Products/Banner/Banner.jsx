import s from './Banner.module.css';
import image21 from 'images/Rectangle-21.jpg';
import image22 from 'images/Rectangle-22.jpg';

export const Banner = () => {
  return (
    <section className={s.bannerBox}>
      <div className={s.leftBox}>
        <div className={s.textWrap}>
          <h3 className={s.title}>Dress your nest for much less</h3>
          <p className={s.text}>
            Exclusive furniture and decor deals that fit your style and budget
            just a click away.
            <span className={s.textElse}> You can&#039;t resist them.</span>
          </p>
        </div>
        <button className={s.button} type="button">
          <div className={s.btnLabel}>Shop now</div>
        </button>
      </div>
      <div className={s.imgWrap}>
        <img className={s.img22} src={image22} alt="livig room" />
        <img className={s.img21} src={image21} alt="livig room" />
      </div>
    </section>
  );
};
