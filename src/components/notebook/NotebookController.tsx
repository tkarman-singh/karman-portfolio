"use client";

import { useEffect, useState, useRef } from "react";
import { Notebook } from "./Notebook";

export function NotebookController() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const totalPages = 8; // Reduced by 1 since we are removing EducationPage
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const maxScroll = rect.height - window.innerHeight;
      const currentScroll = -rect.top;
      
      const progress = maxScroll > 0 ? currentScroll / maxScroll : 0;
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full relative bg-[#2a2a2a] bg-[url('/bg-texture-v2.jpeg')] bg-cover bg-center bg-fixed"
      style={{ height: `${totalPages * 150}vh` }}
    >
      {/* Subtle vignette to focus the center */}
      <div className="absolute inset-0 pointer-events-none z-0 fixed h-screen w-screen bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]"></div>
      
      {/* Sticky Container for the Notebook */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center z-10 overflow-hidden">
        <Notebook scrollProgress={scrollProgress} totalPages={totalPages} />
      </div>
      
      {/* Scroll Indicator */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm z-50 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm pointer-events-none flex flex-col items-center gap-1">
        <span>Scroll down to flip pages</span>
        <div className="w-24 h-1 bg-white/20 rounded-full mt-1 overflow-hidden relative">
          <div 
            className="absolute top-0 left-0 h-full bg-white transition-none"
            style={{ width: `${scrollProgress * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
