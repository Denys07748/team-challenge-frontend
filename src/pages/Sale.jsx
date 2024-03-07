import { Goods } from 'components/Products/Goods';
import saleImg from 'images/rectangle-15.jpg';

const Sale = () => {
  return (
    <div>
      <Goods title="Sale" img={saleImg} />
    </div>
  );
};

export default Sale;
