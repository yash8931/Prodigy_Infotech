import React, { useState } from 'react';
import styles from './NavbarStyles.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the navbar on mobile after clicking a link
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={`${styles['navbar-links']} ${isOpen ? styles.open : ''}`}>
        <a href="#home" onClick={() => scrollToSection('hero')}>
          Home
        </a>
        <a href="#about" onClick={() => scrollToSection('projects')}>
          Projects
        </a>
        <a href="#services" onClick={() => scrollToSection('skills')}>
          Services
        </a>
        <a href="#contact" onClick={() => scrollToSection('contact')}>
          Contact
        </a>
      </div>
      <div className={styles['navbar-toggle']} onClick={toggleNavbar}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
