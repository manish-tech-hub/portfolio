import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../css/Projects.css";

const projects = [
  {
    id: 1,
    title: "Fruit Juice Store (Django)",
    description:
      "A complete eCommerce web application for selling fruit juices. Users can browse products, add them to the cart, and place orders with real-time order tracking.",
    tech: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
    features: [
      "User authentication & login system",
      "Add to cart & checkout functionality",
      "Order tracking and admin dashboard",
      
    ],
    liveDemo: "https://github.com/manish-tech-hub/projectFruit ",
    repo: "https://github.com/manish-tech-hub/projectFruit",
  },
  {
    id: 2,
    title: "Restaurant Ordering System (MERN)",
    description:
      "A modern restaurant website where users can view menu items, manage their cart, place orders, and track their order history — all built with the MERN stack.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "CSS Modules"],
    features: [
      "User signup/login with JWT authentication",
      "Admin panel to manage menu and orders",
      "Dynamic cart and order system",
      
    ],
    liveDemo: "https://restro-frontend-gold.vercel.app/home",
    repo: "https://github.com/manish-tech-hub/restaurant-project",
  },
  {
    id: 3,
    title: "Portfolio Website (React)",
    description:
      "My personal portfolio to showcase projects, skills, and experience. Features animated sections, responsive design, and dark mode support.",
    tech: ["React", "CSS3", "React Icons", "Vite", "Responsive Layout"],
    features: [
      "Dark/light mode toggle with global theme",
      "Animated technology icons (falling effect)",
      "Responsive design for mobile & desktop",
      "Clean and modern UI",
    ],
    liveDemo: "https://manishpasman-portfolio.vercel.app/",
    repo: "https://github.com/manish-tech-hub/my-portfolio",
  },
];

// Toss animation based on index
const getTossAnimation = (index) => {
  switch (index) {
    case 0:
      return {
        hidden: { x: -200, rotateY: -120, opacity: 0 },
        visible: { x: 0, rotateY: 0, opacity: 1 },
      };
    case 1:
      return {
        hidden: { y: -200, rotateX: 180, opacity: 0 },
        visible: { y: 0, rotateX: 0, opacity: 1 },
      };
    case 2:
      return {
        hidden: { x: 200, rotateY: 180, rotateX: 180, opacity: 0 },
        visible: { x: 0, rotateY: 0, rotateX: 0, opacity: 1 },
      };
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  }
};

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(({ id, title, description, tech, features, liveDemo, repo }, index) => {
          const ref = useRef(null);
          const inView = useInView(ref, { once: false, threshold: 0.3 });
          const animation = getTossAnimation(index);

          return (
            <motion.div
              ref={ref}
              key={id}
              className="project-card"
              variants={animation}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h3>{title}</h3>
              <p>{description}</p>
              <p><strong>Tech Stack:</strong> {tech.join(", ")}</p>
              <ul className="features-list">
                {features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
