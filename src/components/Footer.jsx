import React from "react";
import "../css/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__desc">
        Crafting modern, responsive web applications with Django and MERN.  
        Have an idea? Let’s turn it into reality together!
      </p>


      <div className="footer__socials">
        <a href="https://github.com/manish-tech-hub" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/Manish Pasman" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:manishpasman590@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <p className="footer__copyright">
        © {new Date().getFullYear()} Manish.dev — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
