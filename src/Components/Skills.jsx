import React, { useState, useEffect } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiPython,
  SiDjango,
} from "react-icons/si";
import "../css/Skills.css";

const skills = [
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: FaJs },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "SQL", icon: SiMysql },
  { name: "GitHub", icon: FaGithub },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
];

const Skills = () => {
  const [radius, setRadius] = useState(230);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth <= 360) setRadius(95);
      else if (window.innerWidth <= 400) setRadius(110);
      else if (window.innerWidth <= 768) setRadius(160);
      else setRadius(230);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="container" id="skills">
      <h1>Expertise & Tools</h1>

      <div className="hero-circle">
        <div className="center-glow"></div>

        <div className="inner-img">
          <div className="center-text">SKILLS</div>
        </div>

        <div className="hero-static-layout">
          {skills.map((skill, index) => {
            const angle = (360 / skills.length) * index;
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="planet-container"
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                }}
              >
                <div className="icon-wrapper">
                  <Icon className="skill-icon-svg" />
                  <span className="skill-name">{skill.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
