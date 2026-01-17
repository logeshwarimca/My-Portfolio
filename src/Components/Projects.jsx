import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import '../css/Project.css'
import weather from '../imgs/weather.PNG'
import birthday from '../imgs/birthday.PNG'
import speech from '../imgs/speech-to-text.PNG'
import imgslider from '../imgs/imgslider.PNG'
import quize from '../imgs/quize.PNG'
import qr from '../imgs/qr.PNG'
import pwd from '../imgs/pwd.PNG'
import clock from '../imgs/digital clock.PNG'
import crypto from '../imgs/crypto.PNG'
import corosel from '../imgs/infinitecorousal.PNG'
import chatapp from '../imgs/chatimg.PNG'
import dimg from '../imgs/3dp.PNG'

const projectData = [
  {
    title: "Weather App",
    category: "Front-End Development",
    image: weather,
    tech: ["React", "HTML", "CSS", "Js"],
    description: "A React-based weather application displaying real-time temperature, humidity, and weather conditions.",
    github: "#",
    live: "https://logeshwarisathya.github.io/WEATHER/"
  },
  {
    title: "Birthday Wishing App",
    category: "Front-End Development",
    image: birthday,
    tech: ["HTML5", "CSS3", "JS"],
    description: "A fun birthday wishing app that displays personalized birthday messages with interactive animations.",
    github: "https://github.com/logeshwarisathya/BirthDAY-Wishes",
    live: "https://logeshwarisathya.github.io/BirthDAY-Wishes/"
  },
    {
    title: "Speech-to-Text Converter",
    category: "Front-End Development",
    image: speech,
    tech: ["HTML5", "CSS3", "JS"],
    description: "A speech-to-text app that converts spoken words into written text in real time.",
    github: "https://github.com/logeshwarisathya/Speech-to-text",
    live: "https://logeshwarisathya.github.io/Speech-to-text/"
  },
    {
    title: "Image-slider",
    category: "Front-End Development",
    image: imgslider,
    tech: ["HTML5", "CSS3", "JS"],
    description: "Developed an interactive image slider using HTML, CSS, and JavaScript with smooth transitions.",
    github: "https://github.com/logeshwarisathya/Image-slider",
    live: "https://logeshwarisathya.github.io/Image-slider/"
  },
    {
    title: "Quiz-App",
    category: "Front-End Development",
    image: quize,
    tech: ["HTML5", "CSS3", "JS"],
    description: "Developed an interactive quiz application with multiple-choice questions and real-time scoring.",
    github: "https://github.com/logeshwarisathya/Quiz-App",
    live: "https://logeshwarisathya.github.io/Quiz-App/"
  },
    {
    title: "QR-Code-Generator",
    category: "Front-End Development",
    image: qr,
    tech: ["HTML5", "CSS3", "JS"],
    description: "A QR code generator that creates QR codes instantly from user input.",
    github: "https://github.com/logeshwarisathya/QR-Code-Generator",
    live: "https://logeshwarisathya.github.io/QR-Code-Generator/"
  },
  {
    title: "Password-Generator",
    category: "Frontend Excellence",
    image: pwd,
    tech: ["HTML5", "CSS3", "JS"],
    description: "A password generator that creates strong and secure passwords instantly.",
    github: "https://github.com/logeshwarisathya/Password-Generator",
    live: "https://logeshwarisathya.github.io/Password-Generator/"
  },
  {
    title: "Digital-Clock",
    category: "Frontend Excellence",
    image: clock,
    tech: ["HTML5", "CSS3", "JS"],
    description: "Developed a digital clock application that updates time dynamically using JavaScript.",
    github: "https://github.com/logeshwarisathya/Digital-Clock",
    live: "https://logeshwarisathya.github.io/Digital-Clock/"
  },
    {
    title: "Crypto-Coins",
    category: "Front-End Development",
    image: crypto,
    tech: ["HTML5", "CSS3", "JS"],
    description: "Developed a cryptocurrency tracking app that shows live coin prices and market trends.",
    github: "https://github.com/logeshwarisathya/Crypto-Coins",
    live: "https://logeshwarisathya.github.io/Crypto-Coins/"
  },
    {
    title: "Carousel",
    category: "Front-End Development",
    image: corosel,
    tech: ["HTML5", "CSS3", "JS"],
    description: "Developed a responsive carousel with smooth transitions and navigation controls.",
    github: "https://github.com/logeshwarisathya/Carousel",
    live: "https://logeshwarisathya.github.io/Carousel/"
  },
  {
    title: "Chat-App",
    category: "Frontend Excellence",
    image: chatapp,
    tech: ["HTML5", "CSS3", "JS"],
    description: "Developed a real-time chat application with instant messaging functionality.",
    github: "https://github.com/logeshwarisathya/Chat-App",
    live: "https://logeshwarisathya.github.io/Chat-App/"
  },
  {
    title: "3Dimage",
    category: "Frontend Excellence",
    image: dimg,
    tech: ["HTML5", "CSS3", "JS"],
    description: "Developed a 3D image effect using CSS and JavaScript for an immersive visual experience.",
    github: "https://github.com/logeshwarisathya/3Dimage",
    live: "https://logeshwarisathya.github.io/3Dimage/"
  }
];

const Projects = () => {
  return (
    <section className="project-section" id='projects'>
      <div className="project-container">
        <h2 className="project-title">Featured <span>Projects</span></h2>
        
        <div className="project-grid">
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} title="View Code"><FaGithub /></a>
                    <a href={project.live} title="Live Demo"><FaExternalLinkAlt /></a>
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <span className="project-cat">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag"><FaCode className="tech-icon" /> {t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="more"><a href="https://github.com/logeshwarisathya/">For More</a></div>
      </div>
    </section>
  );
};

export default Projects;