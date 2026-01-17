import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaUniversity, FaTrophy } from 'react-icons/fa';
import '../css/Education.css';
import education from '../imgs/education.mp4'

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Sri Muthukumaran Institute of Technology",
    university: "Anna University",
    period: "2023 - 2025",
    location: "Chennai, TN",
    description: "Advanced post-graduate studies focusing on full-stack development, database architecture, and computer networks.",
    achievements: ["CGPA: 8.2", "Post Graduation"]
  },
  {
    degree: "B.Com Corporate Secretaryship (BCS)",
    school: "Chellammal Women's College",
    university: "Madras University",
    period: "2019 - 2022",
    location: "Chennai, TN",
    description: "Specialized undergraduate degree covering corporate governance, company law, and financial accounting.",
    achievements: ["Score: 70%", "Under Graduation"]
  }
];

const Education = () => {
  return (
    <section className="education-section" id='education'>
        <video
    className="bg-video"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={education} type="video/mp4" />
  </video>
      <div className="edu-container">
        <h2 className="edu-title">Academic <span>History</span></h2>
        
        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot">
                <FaTrophy />
              </div>
              <div className="timeline-content">
                <div className="edu-card">
                  <div className="edu-header">
                    <span className="edu-period"><FaCalendarAlt /> {item.period}</span>
                    <span className="edu-location"><FaMapMarkerAlt /> {item.location}</span>
                  </div>
                  <h3 className="edu-degree">{item.degree}</h3>
                  <h4 className="edu-college">{item.school}</h4>
                  <span className="edu-university"><FaUniversity /> {item.university}</span>
                  <p className="edu-desc">{item.description}</p>
                  <div className="edu-badges">
                    {item.achievements.map((badge, i) => (
                      <span key={i} className="badge">{badge}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;