import { useState, useEffect } from "react";
import { CheckCircle, Briefcase, Code, MapPin, Award } from "lucide-react";
import { profile } from "../../data/profile";
import { SectionTitle } from "../common/SectionTitle";
import { ScrollReveal } from "../common/ScrollReveal";
import { useInView } from "../../hooks/useInView";
import "./About.css";

// Simple counter component
const Counter = ({ end, duration, label, icon: Icon, inView }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const incrementTime = (duration / end) * 1000;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return (
    <div className="stat-card">
      <div className="stat-icon"><Icon size={24} /></div>
      <div className="stat-value">{count}+</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default function About() {
  const { ref: statsRef, isInView: statsInView } = useInView(0.2);

  return (
    <section id="about" className="section">
      <SectionTitle title="About Me" subtitle="A brief introduction and my journey." />
      
      <div className="about-content">
        <ScrollReveal direction="right" className="about-text-container">
          <div className="about-summary">
            {profile.summary.split('.').map((sentence, idx) => (
              sentence && <p key={idx}>{sentence.trim()}.</p>
            ))}
          </div>
          
          <div className="about-highlights">
            <h3>Key Highlights</h3>
            <ul>
              {profile.highlights.map((highlight, idx) => (
                <li key={idx}>
                  <CheckCircle size={20} className="highlight-icon" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" className="about-visuals">
          <div className="education-card">
            <div className="edu-icon"><Award size={32} /></div>
            <div className="edu-details">
              <h4>{profile.education.school}</h4>
              <p className="edu-degree">{profile.education.degree}</p>
              <p className="edu-period">{profile.education.period}</p>
            </div>
          </div>

          <div className="stats-grid" ref={statsRef}>
            <Counter end={5} duration={1} label="Years Exp." icon={Briefcase} inView={statsInView} />
            <Counter end={6} duration={1.5} label="Tech Stacks" icon={Code} inView={statsInView} />
            <Counter end={4} duration={0.8} label="Projects" icon={Briefcase} inView={statsInView} />
            <Counter end={4} duration={0.8} label="Countries" icon={MapPin} inView={statsInView} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
