import { Goods } from 'components/Products/Goods';
import heroImg from 'images/rectangle-19.jpg';
import textImg from 'images/rectangle-14.jpg';

const text = {
  title: 'How to choose furniture for dining room?',
  less: [
    'Choose a dining table that fits well within the room&#039;s dimensions. Consider the number of people you want to accommodate regularly and during larger gatherings. Allow at least 36 inches between the table and walls or other furniture for easy movement.',
    'Choose dining chairs that complement the style and material of the table. Ensure the chairs are comfortable for extended seating, especially if you enjoy long dinners or entertaining guests.',
    'If storage is needed, consider furniture with built-in storage solutions like buffets, sideboards, or china cabinets.',
  ],
  more: [
    'Consider the lighting above your dining table. Pendant lights or a chandelier can be both functional and decorative, enhancing the ambiance of the room.',
    'Pedestal tables can be a good choice for smaller spaces, as they eliminate the need for table legs, providing more legroom.',
    'If placing a rug under the dining table, ensure it is large enough to accommodate both the table and chairs, even when they are pulled out.',
  ],
};

const Dining = () => {
  return (
    <div>
      <Goods title="Dining" heroImg={heroImg} text={text} textImg={textImg} />
    </div>
  );
};

export default Dining;
