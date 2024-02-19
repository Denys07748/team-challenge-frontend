import { Banner } from './Banner/Banner';
import { CardsBlock } from './CardsBlock/CardsBlock';
import { GoodsHero } from './GoodsHero/GoodsHero';
import { TextBlock } from './TextBlock/TextBlock';

export const Goods = () => {
  return (
    <div>
      <GoodsHero />
      <CardsBlock />
      <Banner />
      <TextBlock />
    </div>
  );
};
