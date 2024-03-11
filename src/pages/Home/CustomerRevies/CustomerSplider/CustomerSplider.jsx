import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './CustomerSplider.css';
import img11 from '../../../../images/Rectangle-18.jpg';
import img12 from '../../../../images/rectangle-21.jpg';
import img13 from '../../../../images/Rectangle-4.jpg';

SwiperCore.use([ Pagination, Scrollbar, A11y]);
const CustomerSplider = ({handlePhotoClickMob, activeUser}) => {
    const dataComments = [
        {
          id:1,
            comment: "Homewell is a haven for style enthusiasts like myself. The curated collection is a testament to their dedication to aesthetics and quality. Each piece feels like a work of art, and I'm thrilled with the transformative impact they've had on my living space.",
            name: "Vlad C",
            photo: img11
        },
        {
            id: 2,
            comment: "I love Homewell2 jfvnfjvbpqcmvfhvnbwydwmfef",
            name: "Vlad C2",
            photo: img12
        },
        {  
            id: 3,
            comment: "I love Homewell3 ahhdvidnvkdanvkadnvian jnfjvnjnvn nkvnkv",
            name: "Vlad C3",
            photo: img13
        }
    ];
    return <Swiper
                modules={[ Pagination, Scrollbar, A11y]}
                onSlideChange={(swiper) => handlePhotoClickMob(dataComments[swiper.activeIndex])}
                spaceBetween={1}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                > 
                {dataComments.map((person) => (
                    <SwiperSlide key={person.id}>
                        <img 
                            src={person.photo} 
                            alt={person.id}
                            className="ellipse" 
                            onClick={() => handlePhotoClickMob(person.id)}
                        />
                        <div className="frame5">
                            <span className='name'>
                                {dataComments.find((person) => person.id === activeUser).name}
                            </span>
                        </div>
                    </SwiperSlide>
                ))}         
            </Swiper>
}

export default CustomerSplider;
