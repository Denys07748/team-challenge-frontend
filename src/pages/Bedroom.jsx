import { Goods } from 'components/Products/Goods';
import heroImg from 'images/rectangle-17.jpg';
import textImg from 'images/rectangle-13.jpg';

const text = {
  title: 'How to choose furniture for bedroom?',
  less: [
    'Designate a focal point in the bedroom, such as the bed, and build your furniture arrangement around it. Consider a statement headboard, unique dresser, or accent wall.',
    'Invest in a comfortable mattress and a sturdy bed frame. Quality sleep is essential, so prioritize your mattress choice, and select a bed frame that complements your style.',
    'Select bedside tables that complement your bed and offer enough surface area for essentials like lamps, books, or a glass of water. Consider drawers for additional storage.',
  ],
  more: [
    'Choose a dresser that accommodates your clothing storage needs. A mix of drawers and shelves provides versatility, and the dresser should complement the overall bedroom design.',
    'Prioritize functionality when selecting bedroom furniture. Consider features like built-in USB ports, hidden storage, or adjustable components for added convenience.',
    'Incorporate mirrors strategically to add depth and enhance the bedroom&#039;s visual appeal. A full-length mirror or mirrored furniture can create a sense of spaciousness.',
    'Maintain a balance in furniture proportions. Avoid overcrowding the room, and ensure that each piece of furniture complements the others in terms of size and scale.',
  ],
};

const Bedroom = () => {
  return (
    <div>
      <Goods title="Bedroom" heroImg={heroImg} text={text} textImg={textImg} />
    </div>
  );
};

export default Bedroom;
