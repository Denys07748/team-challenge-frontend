import { Icon } from 'components/Icons/Icon';
import s from './ProductCard.module.css';
import tinsetImg from 'images/tinset.jpg';

const stars = ['star1', 'star2', 'star3', 'star4', 'star5'];

export const ProductCard = () => {
  return (
    <div className={s.cardBox}>
      <img className={s.image} src={tinsetImg} alt="sofa" />
      <div className={s.cardInfo}>
        <div className={s.cardCaption}>
          <div className={s.leftWrap}>
            <h3 className={s.prodName}>Tinset</h3>
            <p className={s.prodType}>3-seat sofa</p>
            <div className={s.ratingWrap}>
              <div className={s.stars}>
                {stars.map(star => (
                  <div key={star} className={s.star}>
                    <Icon id="star" className={s.starIcon} />
                  </div>
                ))}
              </div>
              <p className={s.votes}>(32)</p>
            </div>
          </div>
          <div className={s.favouriteIconWrap}>
            <Icon id="heart" className={s.iconHeart} />
          </div>
        </div>
        <div className={s.bottomWrap}>
          <p className={s.price}>$700</p>
          <p className={s.priceSale}>$670</p>
          <div className={s.button}>
            <Icon id="btn" className={s.iconBtn} />
          </div>
        </div>
      </div>
    </div>
  );
};
