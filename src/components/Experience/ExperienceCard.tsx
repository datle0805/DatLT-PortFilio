import { useState } from "react";
import { ChevronDown, ChevronUp, Users, Calendar, FolderGit2 } from "lucide-react";
import { Project } from "../../data/projects";
import { ScrollReveal } from "../common/ScrollReveal";

export function ExperienceCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <ScrollReveal 
      direction={isEven ? "right" : "left"} 
      className={`timeline-item ${isEven ? "left" : "right"}`}
    >
      <div className="timeline-connector">
        <div className="timeline-dot"></div>
      </div>
      
      <div className="timeline-content card" onClick={() => setExpanded(!expanded)}>
        <div className="card-header">
          <div className="proj-title-group">
            <h3>{project.name}</h3>
            <span className="code-name">({project.codeName})</span>
          </div>
          <span className="proj-role gradient-text">{project.role}</span>
        </div>
        
        <div className="card-meta">
          <div className="meta-item">
            <Calendar size={16} /> <span>{project.duration}</span>
          </div>
          {project.teamSize && (
            <div className="meta-item">
              <Users size={16} /> <span>{project.teamSize}</span>
            </div>
          )}
        </div>

        <p className="proj-desc">{project.description}</p>
        
        <div className="tech-stack-preview">
          {project.technologies.slice(0, 4).map(tech => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-pill more">+{project.technologies.length - 4}</span>
          )}
        </div>

        <button className="expand-btn">
          {expanded ? (
            <><ChevronUp size={18} /> Hide details</>
          ) : (
            <><ChevronDown size={18} /> View details</>
          )}
        </button>

        {expanded && (
          <div className="expanded-content">
            <div className="divider"></div>
            
            <div className="detail-section">
              <h4><FolderGit2 size={16} /> Responsibilities</h4>
              <ul>
                {project.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h4>Highlights</h4>
              <div className="highlights-flex">
                {project.highlights.map(hl => (
                  <span key={hl} className="highlight-badge">{hl}</span>
                ))}
              </div>
            </div>

            <div className="detail-section full-tech">
              <h4>All Technologies</h4>
              <div className="tech-stack-full">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-pill outline">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}
