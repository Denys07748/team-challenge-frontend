import { Icon } from 'components/Icons/Icon';
import s from './CardsBlock.module.css';
import { ProductCard } from '../ProductCard/ProductCard';

const cards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6'];

export const CardsBlock = () => {
  return (
    // <!-- props: {"state":{"type":"VARIANT","defaultValue":"'default'","variantOptions":["Default","Filters applied"]},"page":{"type":"VARIANT","defaultValue":"'categories'","variantOptions":["All goods and sale","Categories"]},"type":{"type":"VARIANT","defaultValue":"'desktop'","variantOptions":["Mobile","Desktop","Mobil"]}} -->
    <section className={s.cardsSection}>
      <div className={s.sorter}>
        <div className="sort">Sort</div>
        <div className={s.input}>
          <div className={s.inputText}>Price: High to low</div>
          <Icon id="btn-up" className={`${s.icon} ${s.rotate}`} />
        </div>
      </div>
      <div className={s.filterCardsBox}>
        <div className={s.filterBox}>
          <div className={s.filterItem}>
            <div className={s.filterLabel}>Price</div>
            <Icon id="btn-up" className={`${s.icon} ${s.rotate}`} />
          </div>
          <div className={s.filterItem}>
            <div className={s.filterLabel}>Colour</div>
            <Icon id="btn-up" className={`${s.icon} ${s.rotate}`} />
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
