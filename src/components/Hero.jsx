// Hero.jsx
import React,{useState,useEffect} from "react";
import "../css/Hero.css";
import profileImage from "../img/profile.jpeg"; // Update with your image path

const Hero = () =>{
   return(
  <section className="hero">
    <div className="hero__content">
      <div className="hero__intro">
        <h1>Hi<span className="waving-hand">👋</span>, I'm Manish</h1>
        <p className="hero__subtitle">Web Developer | MERN & Django Enthusiast</p>
        <p className="hero__skills">
  I craft dynamic, user-focused web applications using modern technologies like React, Node.js, and Django.
  I'm passionate about building real-world solutions that make everyday tasks smarter and simpler.
        </p>
        <a href="#projects" className="cta-button">
          View Projects
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
      <div className="hero__profile">
        <div className="profile-image__container">
          <img 
            src={profileImage} 
            alt="Manish" 
            className="profile-image"
            width="300"
            height="300"
          />
          <div className="profile-image__border"></div>
          <div className="profile-image__glow"></div>
        </div>
      </div>
    </div>
  </section>
);
}
export default Hero;