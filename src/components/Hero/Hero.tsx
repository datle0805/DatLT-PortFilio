import { motion } from "framer-motion";
import { ArrowDown, Mail, ArrowRight } from "lucide-react";
import { profile } from "../../data/profile";
import { GradientText } from "../common/GradientText";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-content">
        <motion.div 
          className="hero-avatar-container"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <img src={profile.avatar} alt={profile.name} className="hero-avatar" />
          <div className="avatar-glow"></div>
        </motion.div>
        
        <motion.p 
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi, I am
        </motion.p>
        
        <motion.h1 
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GradientText>{profile.name}</GradientText>
        </motion.h1>

        <motion.h2 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {profile.title}
        </motion.h2>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {profile.summary.split('.')[0]}.
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="#projects" className="btn-primary">
            View My Work <ArrowRight size={20} className="icon-right" />
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch <Mail size={20} className="icon-left" />
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
