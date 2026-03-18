import { SectionTitle } from "../common/SectionTitle";
import { projects } from "../../data/projects";
import { ExperienceCard } from "./ExperienceCard";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle title="Experience" subtitle="Timeline of my professional journey." />
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {projects.map((project, index) => (
          <ExperienceCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
