import './App.css';
import Skills from './componets/skills.jsx';
import Portfolio  from './componets/portifolio.jsx';
import Projects from './componets/projects.jsx';
import ContactMe from './componets/comment.jsx';
import Profile from './img/profile.jpg';
import Profile2 from './img/pic.png';
import { FaLinkedin,FaGithubSquare,FaWhatsappSquare } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";


function App() {
  return (
    <div className="App">

     <div className="portifolio" >

        <div className="left-section">

          <section className='profile'>
            <img src={Profile} alt='profile'/>
            <h3>NDUWAYO Nathan</h3>
          </section>
          <section className='contact-me'>
            <h4>Contact me</h4> 
              <div className='contact-me-a'>         
                <a href="#"><MdMarkEmailRead /></a>
                <a href="#"><FaWhatsappSquare/></a>
                <a href="https://www.linkedin.com/in/nathan-nduwayo-b333bb261/"><FaLinkedin/> </a>
                <a href="https://github.com/nduwayo-nathan"><FaGithubSquare/></a>
                </div>
          </section>

          <section className='other'>
            <h4>Navigate...</h4>
            <a href="#about-me">About me</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#portifolio">Portifolio</a>
            <a href="#contact-me">Contact me</a>
            <a href="#resume">Resume</a>
            
          </section>
        </div>

        <div className="right-section">
          <section id='about-me'>
            <div className='header'>
              <h1>FULL STACK WEB DEVELOPER</h1>
            </div>
            <div className='imgText'></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" 
              viewBox="-25 -25 250 250" className="liquid-circular-svg"> 
              <defs>
              <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%" >
              <stop offset="0%" style={{ stopColor: "#00FF84", stopOpacity: 1.00 }} />
                <stop offset="100%" style={{ stopColor: "#008EE6", stopOpacity: 1.00 }} />
              </linearGradient>
              </defs>
              <path d="M102.08565075499753 0.021752061119926225 C72.57935865877405 -3.760956511348571 14.632016316964217 40.6642996982648 4.989804446763586 68.80604640421838 C-4.314207889586507 95.96072440168334 12.438286208984255 166.21339168752283 38.29003373750106 178.68850020099023 C77.17934033112235 197.45505821544424 188.303113925228 156.919388206364 198.86108357533246 115.04945694406054 C208.049825208395 78.60949800180423 139.36121015052152 4.800481208421173 102.08565075499753 0.021752061119926225Z" stroke="none" fill="url(#lgrad)"  />
            </svg>
            <img src={Profile2} alt='my pic'/>  
            <div class="btn-box">
                <a class="btn" href="#">Download CV</a>
                <a class="btn" href="#">Hire me</a>
            </div>        
           
          </section>
          <section id='skills'>
            <h4>skills</h4>
            <Skills/>
          </section>
          <section id='experience'>
            
          </section>
          <section id='portifolio'>
            <Portfolio/>
          </section>
          <section id='projects'>
            <Projects/>
          </section>
          <section id='contact-me'>
            <ContactMe/>
          </section>
          <section id='resume'>
    
          </section>
          <div className='footer'>
     <p>&copy; 2024 NDUWAYO Nathan. All rights reserved.</p>
     </div>
        </div>
     </div>
    </div>
  );
}

export default App;
