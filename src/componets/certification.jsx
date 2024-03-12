// certification.jsx
import React from 'react';
import './certification.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import certificate1 from '../img/nathan-java.jpg';
import certificate2 from '../img/certificate-CS_1-Nathan NDUWAYO.png';
import certificate3 from '../img/project2.jpeg';
import certificate4 from '../img/project2.jpeg';
import certificate5 from '../img/project2.jpeg';
import certificate6 from '../img/project2.jpeg';
import certificate7 from '../img/project2.jpeg';

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
          <div className="certificate-info">
            <h3>Certificate 1</h3>
            <p>Description for Certificate 1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={certificate2} alt="Certificate 2" />
          <div className="certificate-info">
            <h3>Certificate 2</h3>
            <p>Description for Certificate 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={certificate3} alt="Certificate 3" />
          <div className="certificate-info">
            <h3>Certificate 3</h3>
            <p>Description for Certificate 3</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={certificate4} alt="Certificate 4" />
          <div className="certificate-info">
            <h3>Certificate 4</h3>
            <p>Description for Certificate 4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={certificate5} alt="Certificate 5" />
          <div className="certificate-info">
            <h3>Certificate 5</h3>
            <p>Description for Certificate 5</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={certificate6} alt="Certificate 6" />
          <div className="certificate-info">
            <h3>Certificate 6</h3>
            <p>Description for Certificate 6</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={certificate7} alt="Certificate 7" />
          <div className="certificate-info">
            <h3>Certificate 7</h3>
            <p>Description for Certificate 7</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
