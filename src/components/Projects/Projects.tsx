import { SectionTitle } from "../common/SectionTitle";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle title="Featured Projects" subtitle="A selection of my best work." />
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
