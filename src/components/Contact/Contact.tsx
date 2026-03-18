import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { profile } from "../../data/profile";
import { SectionTitle } from "../common/SectionTitle";
import { ScrollReveal } from "../common/ScrollReveal";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <SectionTitle title="Let's Work Together" subtitle="Have a project in mind or want to explore opportunities? Drop me a message!" />
      
      <div className="contact-container">
        <ScrollReveal direction="right" className="contact-info">
          <h3>Get in Touch</h3>
          <p>Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          
          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="contact-card">
              <Mail size={24} className="contact-icon" />
              <div>
                <h4>Email</h4>
                <span>{profile.email}</span>
              </div>
            </a>
            
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
              <Linkedin size={24} className="contact-icon" />
              <div>
                <h4>LinkedIn</h4>
                <span>Connect with me</span>
              </div>
            </a>
            
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-card">
              <Github size={24} className="contact-icon" />
              <div>
                <h4>GitHub</h4>
                <span>View my repositories</span>
              </div>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                required 
                placeholder=" "
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
              <label htmlFor="name">Your Name</label>
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                required 
                placeholder=" "
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
              <label htmlFor="email">Your Email</label>
            </div>
            
            <div className="form-group full-width">
              <textarea 
                id="message" 
                required 
                placeholder=" "
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                rows={5}
              ></textarea>
              <label htmlFor="message">Your Message</label>
            </div>

            <button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
            
            {submitted && <p className="success-msg">Message sent successfully!</p>}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
