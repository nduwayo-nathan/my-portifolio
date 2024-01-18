import React from "react";
import './skills.css';

function ResumeSection() {
  return (
    <div id="resume">
      <h2>Resume</h2>

      <section className="resume-section">
        <h3>Education</h3>
        <div className="resume-item">
          <h4>University Name</h4>
          <p>Degree in Computer Science - Graduation Year</p>
        </div>
        {/* Add more education items as needed */}
      </section>

      <section className="resume-section">
        <h3>Work Experience</h3>
        <div className="resume-item">
          <h4>Company Name</h4>
          <p>Position - Start Date to End Date</p>
          <ul>
            <li>Responsibility or achievement</li>
            {/* Add more responsibilities or achievements as needed */}
          </ul>
        </div>
        {/* Add more work experience items as needed */}
      </section>

      <section className="resume-section">
        <h3>Skills</h3>
        <div className="resume-item">
          <h4>Programming Languages</h4>
          <p>JavaScript, Python, Java, etc.</p>
        </div>
        <div className="resume-item">
          <h4>Web Technologies</h4>
          <p>HTML, CSS, React, etc.</p>
        </div>
        {/* Add more skill items as needed */}
      </section>
    </div>
  );
}

export default ResumeSection;
