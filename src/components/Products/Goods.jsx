import { Banner } from './Banner/Banner';
import { CardsBlock } from './CardsBlock/CardsBlock';
import { GoodsHero } from './GoodsHero/GoodsHero';
import { TextBlock } from './TextBlock/TextBlock';

export const Goods = ({ title, img }) => {
  return (
    <div>
      <GoodsHero title={title} img={img} />
      <CardsBlock />
      <Banner />
      <TextBlock />
    </div>
  );
};
