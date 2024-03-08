import { Banner } from './Banner/Banner';
import { CardsBlock } from './CardsBlock/CardsBlock';
import { GoodsHero } from './GoodsHero/GoodsHero';
import { TextBlock } from './TextBlock/TextBlock';

export const Goods = ({ title, heroImg, text, textImg }) => {
  return (
    <div>
      <GoodsHero title={title} img={heroImg} />
      <CardsBlock />
      <Banner />
      <TextBlock text={text} img={textImg} />
    </div>
  );
};
