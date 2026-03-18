import { Project } from "../../data/projects";
import { ScrollReveal } from "../common/ScrollReveal";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <ScrollReveal direction={isEven ? "up" : "down"} delay={index * 0.1} className="project-card">
      <div className="card-header-gradient"></div>
      <div className="project-content">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-role gradient-text">{project.role}</p>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-highlights">
          {project.highlights.slice(0, 3).map((hl) => (
            <span key={hl} className="project-badge">{hl}</span>
          ))}
        </div>
        
        <div className="project-tech">
          {project.technologies.slice(0, 6).map(tech => (
            <span key={tech} className="tech-chip">{tech}</span>
          ))}
          {project.technologies.length > 6 && (
            <span className="tech-chip more">+{project.technologies.length - 6}</span>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
