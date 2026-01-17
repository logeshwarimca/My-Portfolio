import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import '../css/nav.css'

const links = [
  "Home",
  "About",
  "Skills",
  "Education",
  "Projects",
  "Internships",
  "Contact",
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`navbar-container ${open ? "responsive" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="navbar">
        <div className="name">Logeshwari Sathya</div>

        {/* Hamburger */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          <FaBars />
        </div>

        <div className={`nav-list ${open ? "show" : ""}`}>
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`nav-link ${active === item ? "active" : ""}`}
              onClick={() => {
                setActive(item);
                setOpen(false);
              }}
            >
              {item}
              {active === item && <span className="active-line" />}
            </a>
          ))}
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
