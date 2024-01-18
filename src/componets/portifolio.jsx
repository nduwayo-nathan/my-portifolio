import React from 'react';
import './portifolio.css';
import project1Image from '../img/website.jpeg'; // Import your project images
import project2Image from '../img/manager.jpeg';

const Portfolio = () => {
  const projects = [
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
      image: project1Image, // Replace with the path to your project image
      link: 'https://example.com/project1',
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolioSection">
      <h2>Portfolio</h2>
      <div className="portifolio-container">
        {projects.map((project, index) => (
          <div className="portifolioDiv" key={index}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={`${project.title} Preview`} />
            <h4>{project.Heading}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
