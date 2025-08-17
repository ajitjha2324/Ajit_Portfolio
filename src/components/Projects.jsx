import React from "react";
import "./Projects.css"

const projects = [
  {title:"Smart Traffic Navigation", desc:"C++ path-finding + future React UI", tech:["C++","Graphs"], link:"#"},
  {title:"Portfolio Website", desc:"React + Vite portfolio", tech:["React","CSS"], link:"#"},
  {title:"Weather App", desc:"React app that uses OpenWeather API", tech:["React","API"], link:"#"},
];

export default function Projects(){
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p,i)=>(
          <article key={i} className="project-card">
            <h3>{p.title}</h3>
            <p className="muted">{p.desc}</p>
            <div style={{marginTop:10}} className="tech muted">{p.tech.join(" • ")}</div>
            <div style={{marginTop:12}}>
              <a className="btn btn-outline" href={p.link}>View</a>
              <a style={{marginLeft:8}} className="btn btn-outline" href="#">Code</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
