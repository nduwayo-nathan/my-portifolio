import project1Image from '../img/website.jpeg'; // Import your project images
import project2Image from '../img/manager.jpeg';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './portifolio.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Portfolio = () => {


  const projects = [
        {
          title: 'Portifolio 1',
          Heading:"Heading",
          description: 'Description of Project 1',
          image: project2Image, // Replace with the path to your project image
          link: 'https://example.com/project1',
          
        },
        {
          title: 'Portifolio 1',
          Heading:"Heading",
          description: 'Description of Project 1',
          image: project1Image, // Replace with the path to your project image
          link: 'https://example.com/project1',
          
        },
        {
          title: 'Portifolio 1',
          Heading:"Heading",
          description: 'Description of Project 1',
          image: project2Image, // Replace with the path to your project image
          link: 'https://example.com/project1',
          
        },
        {
          title: 'Portifolio 1',
          Heading:"Heading",
          description: 'Description of Project 1',
          image: project1Image, // Replace with the path to your project image
          link: 'https://example.com/project1',
          
        },
        {
          title: 'Portifolio 1',
          Heading:"Heading",
          description: 'Description of Project 1',
          image: project2Image, // Replace with the path to your project image
          link: 'https://example.com/project1',
        },
        // Add more projects as needed
      ];
  return (
    <><h2>Portfolio</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      > 
       <div className="portifolio-container">
         {projects.map((project, index) => (
          <SwiperSlide key={index}>
          <div className="portifolioDiv">
             <h3>{project.title}</h3>
             <img src={project.image} alt={`${project.title} Preview`} />
             <h4>{project.Heading}</h4>
             <p>{project.description}</p>
           </div>
           </SwiperSlide>
           
         ))}
       </div>
        
      </Swiper>
    </>
  );
}


export default Portfolio;
