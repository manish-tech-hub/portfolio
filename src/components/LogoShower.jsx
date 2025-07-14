import React from "react";
import {
  SiJavascript,
  SiReact,
  SiPython,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
} from "react-icons/si";

import "../css/LogoShower.css";

const icons = [
  { Component: SiJavascript, name: "JavaScript", color: "#f7df1e" },
  { Component: SiReact, name: "React", color: "#61dafb" },
  { Component: SiPython, name: "Python", color: "#3776AB" },
  { Component: SiDjango, name: "Django", color: "#2BA977" },
  { Component: SiHtml5, name: "HTML5", color: "#e34f26" },
  { Component: SiCss3, name: "CSS3", color: "#1572B6" },
  { Component: SiNodedotjs, name: "Node.js", color: "#339933" },
];

const NUM_ICONS = 30;

const LogoShower = () => {
  const fallingIcons = Array.from({ length: NUM_ICONS }, (_, i) => {
    const { Component: IconComponent, color } =
      icons[Math.floor(Math.random() * icons.length)];
    const left = Math.random() * 100;
    const duration = 8 + Math.random() * 7;
    const delay = Math.random() * 15;
    const size = 20 + Math.random() * 20;

    return (
      <IconComponent
        key={i}
        className="falling-icon"
        style={{
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          fontSize: `${size}px`,
          color: color,
        }}
        title="Programming Logo"
      />
    );
  });

  return <div className="logo-shower-container">{fallingIcons}</div>;
};

export default LogoShower;
