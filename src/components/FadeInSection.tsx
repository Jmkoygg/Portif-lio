import React from "react";
import { useScrollFade } from "../hooks/useScrollFade";

interface FadeInSectionProps {
  children: React.ReactNode;
}

const FadeInSection = ({ children }: FadeInSectionProps) => {
  const { ref, isVisible } = useScrollFade();

  return (
    <div ref={ref} className={`fade-section ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
