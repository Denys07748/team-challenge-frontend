import { Icon } from 'components/Icons/Icon';
import s from './TextBlock.module.css';
import { useState } from 'react';

export const TextBlock = ({ text, img }) => {
  const [showMore, setShowMore] = useState(false);

  const onShowMore = () => {
    setShowMore(true);
  };

  const onCloseMore = () => {
    setShowMore(false);
  };

  return (
    <section className={s.textBlockSection}>
      <div className={s.textBlockWrap}>
        <img className={s.image} src={img} alt="room" />
        <div className={s.textBtnBox}>
          <h3 className={s.title}>How to choose furniture for living room?</h3>
          <div className={s.textWrap}>
            <div className={s.textWrap}>
              {text.less.map((p, i) => (
                <p className={s.text} key={i}>
                  {p}
                </p>
              ))}
            </div>
            {showMore && (
              <div className={s.textWrap}>
                {text.more.map((p, i) => (
                  <p className={s.text} key={i}>
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>
          {showMore ? (
            <button className={s.button} onClick={onCloseMore}>
              <div className={s.label}>Show less</div>
              <Icon id="btn-up" className={s.icon} />
            </button>
          ) : (
            <button className={s.button} onClick={onShowMore}>
              <div className={s.label}>Show more</div>
              <Icon id="btn-up" className={`${s.icon} ${s.rotate}`} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
