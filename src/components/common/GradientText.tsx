import { ReactNode } from "react";
import "./GradientText.css";

export function GradientText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`gradient-text ${className}`}>{children}</span>;
}
