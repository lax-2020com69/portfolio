import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
  FaJava,
  FaPhp,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiNextdotjs,
} from "react-icons/si";
import "./Skills.css";

function Skills() {
  const skills = [
    { icon: <FaHtml5 color="#E34F26" />, label: "HTML5" },
    { icon: <FaCss3Alt color="#1572B6" />, label: "CSS3" },
    { icon: <FaJsSquare color="#F7DF1E" />, label: "JavaScript" },
    { icon: <FaJava color="#007396" />, label: "Java" },
    { icon: <FaPhp color="#777BB4" />, label: "PHP" },
    { icon: <SiCplusplus color="#00599C" />, label: "C++" },
    { icon: <FaPython color="#3776AB" />, label: "Python" },
    { icon: <FaReact color="#61DAFB" />, label: "React" },
    { icon: <FaNodeJs color="#339933" />, label: "Node.js" },
    { icon: <SiNextdotjs color="#000000" />, label: "Next.js" },  // Next.js added here
    { icon: <SiMongodb color="#47A248" />, label: "MongoDB" },
    { icon: <SiFirebase color="#FFCA28" />, label: "Firebase" },
    { icon: <SiMysql color="#00758F" />, label: "MySQL" },
    { icon: <FaGitAlt color="#F05032" />, label: "GitHub" },
    { icon: <FaDatabase color="#4DB33D" />, label: "SQL / Databases" },
    { icon: <FaNpm color="#CB3837" />, label: "NPM" },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map(({ icon, label }, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{icon}</div>
            <p className="skill-label">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
