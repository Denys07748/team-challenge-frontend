import { Icon } from 'components/Icons/Icon';
import s from './CardsBlock.module.css';
import { ProductCard } from '../ProductCard/ProductCard';
import { FilterForm } from './FilterForm/FilterForm';
import { useState } from 'react';

const cards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6'];
const checkboxes = {
  prices: ['$0-299', '$300-799', '$800-1199', '$1200+'],
  colors: [
    'beige',
    'green',
    'grey',
    'blue',
    'white',
    'red',
    'yellow',
    'black',
    'brown',
    'silver',
  ],
};

export const CardsBlock = () => {
  const [showPrices, setShowPrices] = useState(false);
  const [showColors, setShowColors] = useState(false);

  const onShowPrices = () => {
    setShowPrices(true);
  };

  const onClosePrices = () => {
    setShowPrices(false);
  };

  const onShowColors = () => {
    setShowColors(true);
  };

  const onCloseColors = () => {
    setShowColors(false);
  };

  return (
    // <!-- props: {"state":{"type":"VARIANT","defaultValue":"'default'","variantOptions":["Default","Filters applied"]},"page":{"type":"VARIANT","defaultValue":"'categories'","variantOptions":["All goods and sale","Categories"]},"type":{"type":"VARIANT","defaultValue":"'desktop'","variantOptions":["Mobile","Desktop","Mobil"]}} -->
    <section className={s.cardsSection}>
      <div className={s.filterBtnBox}>
        <button className={s.filterBtn}>
          <span className={s.label}>Price</span>
          <Icon id="btn-up" className={`${s.icon} ${s.rotate}`} />
        </button>
        <button className={s.filterBtn}>
          <span className={s.label}>Colour</span>
          <Icon id="btn-up" className={`${s.icon} ${s.rotate}`} />
        </button>
        <button className={`${s.filterBtn} ${s.sortBtn}`}>
          <Icon id="sort" className={s.icon} />
          <span className={s.label}>Sort</span>
        </button>
      </div>
      <div className={s.sorter}>
        <div className={s.label}>Sort</div>
        <div className={s.input}>
          <div className={s.inputText}>Price: High to low</div>
          <Icon id="btn-up" className={`${s.icon} ${s.rotate}`} />
        </div>
      </div>
      <div className={s.filterCardsBox}>
        <div className={s.filterBox}>
          <div className={s.filterItemBox}>
            {showPrices ? (
              <button className={s.filterItem} onClick={onClosePrices}>
                <div className={s.label}>Price</div>
                <Icon id="btn-up" className={s.icon} />
              </button>
            ) : (
              <button className={s.filterItem} onClick={onShowPrices}>
                <div className={s.label}>Price</div>
                <Icon id="btn-up" className={`${s.icon} ${s.rotate}`} />
              </button>
            )}
            {showPrices && <FilterForm checkboxes={checkboxes.prices} />}
          </div>
          <div className={s.filterItemBox}>
            {showColors ? (
              <button className={s.filterItem} onClick={onCloseColors}>
                <div className={s.label}>Colour</div>
                <Icon id="btn-up" className={s.icon} />
              </button>
            ) : (
              <button className={s.filterItem} onClick={onShowColors}>
                <div className={s.label}>Colour</div>
                <Icon id="btn-up" className={`${s.icon} ${s.rotate}`} />
              </button>
            )}
            {showColors && <FilterForm checkboxes={checkboxes.colors} />}
          </div>
        </div>
        <div className={s.cardsPaginationBox}>
          <div className={s.cardsBox}>
            {cards.map(card => (
              <ProductCard key={card} />
            ))}
          </div>
          <div className={s.paginationBox}>
            <div className={s.btnDouble}>
              <Icon id="double-right" className={`${s.icon} ${s.rotate}`} />
            </div>
            <div className={s.btnSingle}>
              <Icon id="right-b" className={`${s.icon} ${s.rotate}`} />
            </div>
            <div className={s.paginationItem}>
              <div className={s.paginationLabel}>1 out of 7</div>
            </div>
            <div className={s.btnSingle}>
              <Icon id="right-b" className={s.icon} />
            </div>
            <div className={s.btnDouble}>
              <Icon id="double-right" className={s.icon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
