import "./SectionTitle.css";
import { ScrollReveal } from "./ScrollReveal";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <ScrollReveal>
      <div className="section-title">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
        <div className="title-divider"></div>
      </div>
    </ScrollReveal>
  );
}
