import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", level: "Advanced", gradient: "linear-gradient(135deg, #b3472d, #83241a)" },
  { name: "CSS", level: "Advanced", gradient: "linear-gradient(135deg, #2b7d6f, #144a63)" },
  { name: "JavaScript", level: "Intermediate", gradient: "linear-gradient(135deg, #b3890d, #826700)" },
  { name: "React", level: "Intermediate", gradient: "linear-gradient(135deg, #3189b3, #005f8f)" },
  { name: "C++", level: "Intermediate", gradient: "linear-gradient(135deg, #5b3ca3, #2f2180)" },
  { name: "Git", level: "Intermediate", gradient: "linear-gradient(135deg, #b33a2d, #7f1f17)" },
  { name: "SQL", level: "Intermediate", gradient: "linear-gradient(135deg, #28888f, #1b4d5b)" },
  { name: "DSA", level: "Intermediate", gradient: "linear-gradient(135deg, #7f5af0, #4c2cc8)" } // updated DSA color
];


export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div 
            key={i} 
            className="skill-card"
            style={{ background: s.gradient }}
          >
            <h3>{s.name}</h3>
            <p>{s.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
