import React from 'react';
import { FaBuilding, FaTerminal, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import '../css/Internship.css';

const internshipData = [
  {
    company: "RD INFRO TECHNOLOGY",
    role: "Python Full Stack Intern",
    period: "May 2024 - June 2024",
    tasks: ["Python & Django", "HTML, CSS, JS", "MySQL"],
    color: "#00f2fe"
  },
  {
    company: "INTERN ARMY",
    role: "Fullstack Web Development Intern",
    period: "Apr 2024 - May 2024",
    tasks: ["HTML & CSS", "Javascript", "API"],
    color: "#7cf249" 
  },
  {
    company: "RD INFRO TECHNOLOGY",
    role: "Python Django Intern",
    period: "Mar 2024 - Apr 2024",
    tasks: ["Python & Django", "SMTP", "Email API"],
    color: "#bf5af2"
  }
];

const Internship = () => {
  return (
    <section className="intern-section" id='internships'>
      <div className="intern-container">
        <h2 className="intern-title">Professional <span>Experience</span></h2>
        
        <div className="intern-grid">
          {internshipData.map((intern, index) => (
            <div key={index} className="intern-card" style={{"--accent": intern.color}}>
              <div className="card-scanner"></div> {/* Animated Scan Line */}
              
              <div className="intern-header">
                <div className="company-logo">
                  <FaBuilding />
                </div>
                <span className="intern-date"><FaCalendarAlt /> {intern.period}</span>
              </div>

              <div className="intern-body">
                <h3>{intern.role}</h3>
                <h4>{intern.company}</h4>
                
                <ul className="task-list">
                  {intern.tasks.map((task, i) => (
                    <li key={i}><FaCheckCircle className="task-icon" /> {task}</li>
                  ))}
                </ul>
              </div>

              <div className="card-footer">
                <div className="skill-progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;