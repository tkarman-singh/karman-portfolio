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
      {/* Repeating Left Icon Border */}
      <div className="absolute inset-y-0 left-0 md:left-2 w-10 md:w-14 z-50 flex flex-col pointer-events-none">
        {Array.from({ length: 300 }).map((_, i) => (
          <div key={`left-icon-${i}`} className="relative w-10 h-10 md:w-14 md:h-14 flex-shrink-0 group pointer-events-auto flex items-center">
             <div className="absolute left-4 md:left-6 group-hover:left-10 md:group-hover:left-14 bg-[#bd4bd4] text-white font-black tracking-widest text-sm md:text-base h-8 md:h-10 flex items-center px-3 rounded-r-lg transition-all duration-300 ease-out shadow-lg -z-10 opacity-0 group-hover:opacity-100">
               KARMAN
             </div>
             <img src="/ka-icon.png" className="relative w-10 h-10 md:w-14 md:h-14 object-contain z-10 drop-shadow-md cursor-crosshair" alt="" />
          </div>
        ))}
      </div>

      {/* Repeating Right Icon Border */}
      <div className="absolute inset-y-0 right-0 md:right-2 w-10 md:w-14 z-50 flex flex-col pointer-events-none">
        {Array.from({ length: 300 }).map((_, i) => (
          <div key={`right-icon-${i}`} className="relative w-10 h-10 md:w-14 md:h-14 flex-shrink-0 group pointer-events-auto flex items-center justify-end">
             <div className="absolute right-4 md:right-6 group-hover:right-10 md:group-hover:right-14 bg-[#bd4bd4] text-white font-black tracking-widest text-sm md:text-base h-8 md:h-10 flex items-center px-3 rounded-l-lg transition-all duration-300 ease-out shadow-lg -z-10 opacity-0 group-hover:opacity-100">
               KARMAN
             </div>
             <img src="/ka-icon.png" className="relative w-10 h-10 md:w-14 md:h-14 object-contain z-10 drop-shadow-md cursor-crosshair" alt="" />
          </div>
        ))}
      </div>

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
