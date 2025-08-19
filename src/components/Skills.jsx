import React from "react";
import "./Skills.css";

// icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { GiBrain } from "react-icons/gi";

const skills = [
  { name: "HTML", level: "Advanced", icon: <FaHtml5 size={35} />, gradient: "linear-gradient(135deg,#b43220,#b43220)" },
  { name: "CSS", level: "Advanced", icon: <FaCss3Alt size={35} />, gradient: "linear-gradient(135deg,#1b78b7,#1b78b7)" },
  { name: "JavaScript", level: "Intermediate", icon: <FaJs size={35} />, gradient: "linear-gradient(135deg,#b28a00,#b28a00)" },
  { name: "React", level: "Intermediate", icon: <FaReact size={35} />, gradient: "linear-gradient(135deg,#218bb5,#218bb5)" },
  { name: "C++", level: "Intermediate", icon: <SiCplusplus size={35} />, gradient: "linear-gradient(135deg,#5a43b2,#5a43b2)" },
  { name: "Git", level: "Intermediate", icon: <FaGitAlt size={35} />, gradient: "linear-gradient(135deg,#a3352b,#a3352b)" },
  { name: "SQL", level: "Intermediate", icon: <FaDatabase size={35} />, gradient: "linear-gradient(135deg,#2b6b73,#2b6b73)" },
  { name: "DSA", level: "Intermediate", icon: <GiBrain size={35} />, gradient: "linear-gradient(135deg,#7a4de0,#7a4de0)" },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill-card" style={{ background: s.gradient }}>
            <div className="icon-wrap">{s.icon}</div>
            <h3>{s.name}</h3>
            <p>{s.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
