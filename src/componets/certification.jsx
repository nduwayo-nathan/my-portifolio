
import React from 'react';
import './comment.css'
import './certification.css';
import certificate1 from "../img/nathan-java.jpg"
import certificate2 from "../img/project2.jpeg"

const Certificates = () => {
  return (
    <section id='certificates'>
      <h1>Certificates</h1>
      <div className='certificate-container'>
        {/* Add your certificate items here */}
        <div className='certificate-item'>
          <img src={certificate1} alt='Certificate 1' />
          <p>Udemy</p>
          <p>Java Training complete course 2022</p>
        </div>
        <div className='certificate-item'>
          <img src={certificate2} alt='Certificate 2' />
          <p>Certificate Name 2</p>
        </div>
        {/* Add more certificate items as needed */}
      </div>
    </section>
  );
}

export default Certificates;
