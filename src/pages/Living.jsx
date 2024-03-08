import { Goods } from 'components/Products/Goods';
import heroImg from 'images/rectangle-23.jpg';
import textImg from 'images/rectangle-tb.jpg';

const text = {
  less: [
    'Consider a comfortable and stylish sofa set as the focal point. Options like sectional sofas or a classNameic three-seater with coordinating chairs can work well.',
    'Choose a coffee table that complements the style of your seating. This could be a sleek, modern table or a rustic wooden piece, depending on your preferences.',
    'Incorporate bookshelves or display cabinets to showcase books, decor, or personal items. This adds character and functionality to the space.',
  ],
  more: [
    'Consider adding accent chairs to create additional seating and introduce a pop of color or a unique design element. Mix and match textures and materials for visual interest.',
    'A well-chosen rug can tie the room together. Look for one that complements your color scheme and adds texture to the space.',
    'Incorporate floor or table lamps for ambient lighting. Pendant lights or a chandelier can also add a touch of sophistication.',
    'Enhance the comfort and style of your seating with decorative pillows and throws. These can introduce patterns and textures.',
  ],
};

const Living = () => {
  return (
    <div>
      <Goods title="Living" heroImg={heroImg} text={text} textImg={textImg} />
    </div>
  );
};

export default Living;
