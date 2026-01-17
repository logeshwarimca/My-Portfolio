import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <h3 className="footer-name">Logeshwari Sathya</h3>
        <p className="footer-role">Frontend Developer | React JS</p>

        <div className="footer-line"></div>

        <div className="footer-icons">
          <a href="https://github.com/logeshwarisathya/"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/logeshwari-sathya"><FaLinkedinIn /></a>
          <a href="mailto:logi.pfd@gmail.com"><FaEnvelope /></a>
        </div>

        <p className="footer-copy">
          © 2026 • Built with React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
