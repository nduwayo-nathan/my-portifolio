// certification.jsx
import React from 'react';
import './certification.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import certificate5 from '../img/nathan-java.jpg';
import certificate2 from '../img/certificate-CS_1-Nathan NDUWAYO.png';
import certificate3 from '../img//unicef-certificate.png';
import certificate4 from '../img/nathan_CSO.png';
import certificate1 from '../img/nathan_java_coursera.png';
import certificate6 from '../img/nathan_node_coursera.png';
import certificate7 from '../img/project2.jpeg';
import certificate8 from '../img/nathan_badge_node.png';

export default function App() {
  return (
    <>
      <h2>Certificates</h2>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={certificate1} alt="Certificate 1" />
         
            
        </SwiperSlide>
        <SwiperSlide>
          <img src={certificate2} alt="Certificate 2" />
         
        </SwiperSlide>
        <SwiperSlide>
          <img src={certificate3} alt="Certificate 3" />
          
        </SwiperSlide>
        <SwiperSlide>
          <img src={certificate4} alt="Certificate 4" />
         
        </SwiperSlide>
        <SwiperSlide>
          <img src={certificate5} alt="Certificate 5" />
         
        </SwiperSlide>
        <SwiperSlide>
          <img src={certificate6} alt="Certificate 6" />
         
        </SwiperSlide>
        <SwiperSlide>
          <img src={certificate7} alt="Certificate 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={certificate8} alt="Certificate 8" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
