import { Goods } from 'components/Products/Goods';
import heroImg from 'images/rectangle-16.jpg';
import textImg from 'images/rectangle-12.jpg';

const text = {
  title: 'How to choose accessories bathroom?',
  less: [
    'Identify the essential functions you need in your bathroom accessories. Items like towel racks, soap dispensers, and toothbrush holders should not only look good but also serve their purpose effectively.',
    'Consider a specific theme or motif for your bathroom accessories. This could be based on a color scheme, pattern, or a specific design element. Consistency in theme creates visual harmony.',
    'Choose accessories that complement your bathroom&#039;s lighting. If you have warm-toned lighting, accessories in similar tones may create a cohesive atmosphere.',
  ],
  more: [
    'Incorporate plants or artificial greenery to bring a natural element to your bathroom. Plants can thrive in the humid environment, and they add freshness and visual appeal.',
    'If possible, choose a mirror with an attractive frame or unique design. The mirror is a central feature in many bathrooms and can contribute significantly to the overall aesthetics.',
    'High-quality, fluffy towels not only serve a practical purpose but also add a touch of luxury to your bathroom.',
  ],
};

const Accessories = () => {
  return (
    <div>
      <Goods
        title="Accessories"
        heroImg={heroImg}
        text={text}
        textImg={textImg}
      />
    </div>
  );
};

export default Accessories;
