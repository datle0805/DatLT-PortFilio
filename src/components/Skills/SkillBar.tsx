import { motion } from "framer-motion";
import { Skill } from "../../data/skills";
import { useInView } from "../../hooks/useInView";

export function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const { ref, isInView } = useInView(0.1);
  const percentage = skill.proficiency * 20; // 5 levels -> 20% each

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-years">{skill.years} {skill.years === 1 ? 'year' : 'years'}</span>
      </div>
      
      <div className="skill-bar-bg">
        <motion.div 
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
