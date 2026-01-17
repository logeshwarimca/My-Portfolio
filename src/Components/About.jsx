import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../css/about.css";
import aboutimg from '../imgs/about.png'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const About = () => {
  const [projects, setProjects] = useState(1);
  const [interns, setInterns] = useState(1);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    let p = 1;
    let i = 1;

    const projectInterval = setInterval(() => {
      p++;
      setProjects(p);
      if (p === 15) clearInterval(projectInterval);
    }, 80);

    const internInterval = setInterval(() => {
      i++;
      setInterns(i);
      if (i === 2) clearInterval(internInterval);
    }, 400);

    return () => {
      clearInterval(projectInterval);
      clearInterval(internInterval);
    };
  }, [hasAnimated]);

  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        onViewportEnter={() => setHasAnimated(true)}
      >
        {/* LEFT */}
        <motion.div className="about-image" variants={item}>
          <div className="image-glow"></div>
          <img src={aboutimg} alt="profile" />
        </motion.div>

        {/* RIGHT */}
        <motion.div className="about-content" variants={item}>
          <motion.h2 variants={item}>About Me</motion.h2>

          <motion.p variants={item}>
            I’m <span>Logeshwari Sathya</span>, a Front-End Developer passionate
            about building modern, animated, and user-friendly web experiences
            using React.
          </motion.p>

          <motion.div className="about-stats" variants={item}>
            {/* <div className="num"> */}
               <div>
              <h3>{projects}+</h3>
              <p>Projects</p>
            </div>
            <div>
              <h3>{interns}+</h3>
              <p>Internships</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Passion</p>
            </div>

            {/* </div> */}
           
          </motion.div>

          {/* DOWNLOAD CV BUTTON */}
          <motion.a
            href="/Logeshwari_Sathya_CV.pdf"
            download
            className="about-btn"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
