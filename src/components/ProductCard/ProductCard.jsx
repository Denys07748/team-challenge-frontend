import s from "./ProductCard.module.css";
import tinsetImg from "images/tinset.jpg";

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
                <div className={s.star}>
                  <svg
                    className={s.starIcon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.877 2.69572L8.32657 7.86696L2.62025 8.69889C1.59694 8.84731 1.18683 10.1089 1.92893 10.8314L6.05732 14.8544L5.08088 20.5373C4.90512 21.5645 5.98702 22.3339 6.89316 21.8535L11.998 19.1702L17.1028 21.8535C18.009 22.33 19.0909 21.5645 18.9151 20.5373L17.9387 14.8544L22.0671 10.8314C22.8092 10.1089 22.399 8.84731 21.3757 8.69889L15.6694 7.86696L13.1189 2.69572C12.662 1.77396 11.3379 1.76224 10.877 2.69572Z"
                      fill="#E5A800"
                    />
                  </svg>
                </div>
                <div className={s.star}>
                  <svg
                    className={s.starIcon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.877 2.69572L8.32657 7.86696L2.62025 8.69889C1.59694 8.84731 1.18683 10.1089 1.92893 10.8314L6.05732 14.8544L5.08088 20.5373C4.90512 21.5645 5.98702 22.3339 6.89316 21.8535L11.998 19.1702L17.1028 21.8535C18.009 22.33 19.0909 21.5645 18.9151 20.5373L17.9387 14.8544L22.0671 10.8314C22.8092 10.1089 22.399 8.84731 21.3757 8.69889L15.6694 7.86696L13.1189 2.69572C12.662 1.77396 11.3379 1.76224 10.877 2.69572Z"
                      fill="#E5A800"
                    />
                  </svg>
                </div>
                <div className={s.star}>
                  <svg
                    className={s.starIcon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.877 2.69572L8.32657 7.86696L2.62025 8.69889C1.59694 8.84731 1.18683 10.1089 1.92893 10.8314L6.05732 14.8544L5.08088 20.5373C4.90512 21.5645 5.98702 22.3339 6.89316 21.8535L11.998 19.1702L17.1028 21.8535C18.009 22.33 19.0909 21.5645 18.9151 20.5373L17.9387 14.8544L22.0671 10.8314C22.8092 10.1089 22.399 8.84731 21.3757 8.69889L15.6694 7.86696L13.1189 2.69572C12.662 1.77396 11.3379 1.76224 10.877 2.69572Z"
                      fill="#E5A800"
                    />
                  </svg>
                </div>
                <div className={s.star}>
                  <svg
                    className={s.starIcon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.877 2.69572L8.32657 7.86696L2.62025 8.69889C1.59694 8.84731 1.18683 10.1089 1.92893 10.8314L6.05732 14.8544L5.08088 20.5373C4.90512 21.5645 5.98702 22.3339 6.89316 21.8535L11.998 19.1702L17.1028 21.8535C18.009 22.33 19.0909 21.5645 18.9151 20.5373L17.9387 14.8544L22.0671 10.8314C22.8092 10.1089 22.399 8.84731 21.3757 8.69889L15.6694 7.86696L13.1189 2.69572C12.662 1.77396 11.3379 1.76224 10.877 2.69572Z"
                      fill="#E5A800"
                    />
                  </svg>
                </div>
                <div className={s.star}>
                  <svg
                    className={s.starIcon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.877 2.69572L8.32657 7.86696L2.62025 8.69889C1.59694 8.84731 1.18683 10.1089 1.92893 10.8314L6.05732 14.8544L5.08088 20.5373C4.90512 21.5645 5.98702 22.3339 6.89316 21.8535L11.998 19.1702L17.1028 21.8535C18.009 22.33 19.0909 21.5645 18.9151 20.5373L17.9387 14.8544L22.0671 10.8314C22.8092 10.1089 22.399 8.84731 21.3757 8.69889L15.6694 7.86696L13.1189 2.69572C12.662 1.77396 11.3379 1.76224 10.877 2.69572Z"
                      fill="#E5A800"
                    />
                  </svg>
                </div>
              </div>
              <p className={s.votes}>(32)</p>
            </div>
          </div>
          <div className={s.favourIteIconWrap}>
            <svg
              className={s.iconHeart}
              // width="24"
              // height="24"
              // viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.175L10.55 19.855C5.4 15.185 2 12.105 2 8.32495C2 5.24495 4.42 2.82495 7.5 2.82495C9.24 2.82495 10.91 3.63495 12 4.91495C13.09 3.63495 14.76 2.82495 16.5 2.82495C19.58 2.82495 22 5.24495 22 8.32495C22 12.105 18.6 15.185 13.45 19.865L12 21.175Z"
                fill="#3B525B"
              />
            </svg>
          </div>
        </div>
        <div className={s.bottomWrap}>
          <p className={s.price}>$700</p>
          <p className={s.priceSale}>$670</p>
          <div className={s.button}>
            <svg
              className={s.iconBtn}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.54 11.29L9.87998 5.64004C9.78702 5.54631 9.67642 5.47191 9.55456 5.42115C9.4327 5.37038 9.30199 5.34424 9.16998 5.34424C9.03797 5.34424 8.90726 5.37038 8.78541 5.42115C8.66355 5.47191 8.55294 5.54631 8.45998 5.64004C8.27373 5.8274 8.16919 6.08085 8.16919 6.34504C8.16919 6.60922 8.27373 6.86267 8.45998 7.05004L13.41 12.05L8.45998 17C8.27373 17.1874 8.16919 17.4409 8.16919 17.705C8.16919 17.9692 8.27373 18.2227 8.45998 18.41C8.5526 18.5045 8.66304 18.5797 8.78492 18.6312C8.90679 18.6827 9.03767 18.7095 9.16998 18.71C9.30229 18.7095 9.43317 18.6827 9.55505 18.6312C9.67692 18.5797 9.78737 18.5045 9.87998 18.41L15.54 12.76C15.6415 12.6664 15.7225 12.5527 15.7779 12.4262C15.8333 12.2997 15.8619 12.1631 15.8619 12.025C15.8619 11.8869 15.8333 11.7503 15.7779 11.6238C15.7225 11.4973 15.6415 11.3837 15.54 11.29Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};