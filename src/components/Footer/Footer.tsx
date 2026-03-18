import { Heart, ArrowUp } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Le Thanh Dat. Built with <Heart size={16} className="heart-icon" /> and React.
        </p>
        
        <button onClick={scrollToTop} className="back-to-top" aria-label="Scroll to top">
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
