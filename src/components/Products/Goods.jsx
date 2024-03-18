import { AllGoodsHero } from './AllGoodsHero/AllGoodsHero';
import { Banner } from './Banner/Banner';
import { CardsBlock } from './CardsBlock/CardsBlock';
import { GoodsHero } from './GoodsHero/GoodsHero';
import { TextBlock } from './TextBlock/TextBlock';

export const Goods = ({ title, heroImg, text, textImg }) => {
  return (
    <div>
      {title === 'All goods' ? (
        <AllGoodsHero />
      ) : (
        <GoodsHero title={title} img={heroImg} />
      )}
      <CardsBlock />
      {title !== 'Sale' && <Banner />}
      {title !== 'All goods' && title !== 'Sale' && (
        <TextBlock text={text} img={textImg} />
      )}
    </div>
  );
};
