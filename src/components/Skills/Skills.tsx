import { useState } from "react";
import { SectionTitle } from "../common/SectionTitle";
import { skills } from "../../data/skills";
import { SkillBar } from "./SkillBar";
import { ScrollReveal } from "../common/ScrollReveal";
import "./Skills.css";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills = activeTab === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  const displayCategories = ["All", ...Array.from(new Set(skills.map(s => s.category)))];

  return (
    <section id="skills" className="section">
      <SectionTitle title="Skills & Arsenal" subtitle="Technologies I work with." />
      
      <ScrollReveal direction="up" delay={0.2} className="skills-container">
        <div className="filter-tabs">
          {displayCategories.map(cat => (
            <button 
              key={cat}
              className={`filter-tab ${activeTab === cat ? "active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
