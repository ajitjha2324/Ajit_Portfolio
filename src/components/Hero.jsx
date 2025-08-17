import React from "react";
import "./Hero.css";


export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-card">
        <span className="muted">👋 Hi, I'm</span>
        <h1><span className="highlight">Ajit Jha</span></h1>
        <h2><span className="role-text">Software Engineer </span></h2>
        <p className="muted"> Complete knowledge of programming languages like C and C++. Self-motivated computer science engineer with keen interest in coding. Inquisitive, energetic computer science specialist skilled in leadership, with a 
strong foundation in math, logic, and cross-platform coding.</p>

        <div className="cta" style={{marginTop:12}}>
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn btn-outline" href="#contact">Contact Me</a>
        </div>

        <div style={{marginTop:14}} className="muted">Want source code? <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a></div>
      </div>

      <div className="profile card">
        {/* Put public/me.jpg into public/ folder to show here */}
        <img src="/me.jpg" alt="profile" onError={(e)=>{ e.currentTarget.style.display='none'; }}/>
      </div>
    </section>
  );
}
