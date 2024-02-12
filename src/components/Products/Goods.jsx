import { Banner } from './Banner/Banner';
import { CardsBlock } from './CardsBlock/CardsBlock';
import { GoodsHero } from './GoodsHero/GoodsHero';

export const Goods = () => {
  return (
    <div>
      <GoodsHero />
      <CardsBlock />
      <Banner />
    </div>
  );
};
