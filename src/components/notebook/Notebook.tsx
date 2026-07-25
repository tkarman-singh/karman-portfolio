"use client";

import React, { useState, useEffect } from "react";
import { HeroPage } from "../pages/HeroPage";
import { AboutPage } from "../pages/AboutPage";
import { SkillsPage } from "../pages/SkillsPage";
import { ExperiencePage } from "../pages/ExperiencePage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { EducationPage } from "../pages/EducationPage";
import { LeadershipPage } from "../pages/LeadershipPage";
import { ContactPage } from "../pages/ContactPage";
import { FooterPage } from "../pages/FooterPage";

const pages = [
  HeroPage,
  AboutPage,
  SkillsPage,
  ExperiencePage,
  ProjectsPage,
  EducationPage,
  LeadershipPage,
  ContactPage,
  FooterPage,
];

export function Notebook({ 
  scrollProgress,
  totalPages
}: { 
  scrollProgress: number;
  totalPages: number; 
}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      
      const targetWidth = Math.min(vw * 0.9, 800);
      const targetHeight = Math.min(vh * 0.85, 1050);
      
      setDimensions({ width: targetWidth, height: targetHeight });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const totalRings = 36;

  const spiralRings = Array.from({ length: totalRings }).map((_, i) => (
    <div 
      key={`ring-${i}`} 
      className="w-2.5 md:w-3.5 h-8 md:h-10 absolute -top-4 md:-top-5 rounded-full z-50 shadow-[2px_3px_4px_rgba(0,0,0,0.6)]" 
      style={{ 
        left: `calc(${(i * 96) / totalRings + 2}% - 7px)`,
        background: 'linear-gradient(to right, #6b7280 0%, #cbd5e1 25%, #ffffff 45%, #94a3b8 75%, #374151 100%)',
        border: '0.5px solid rgba(255,255,255,0.2)'
      }}
    >
      {/* Tiny white highlight for extreme 3D effect */}
      <div className="absolute inset-y-0 left-[25%] w-[15%] bg-white/70 blur-[0.5px] rounded-full"></div>
    </div>
  ));

  const holes = Array.from({ length: totalRings }).map((_, i) => (
    <div 
      key={`hole-${i}`} 
      className="w-4 h-4 md:w-[22px] md:h-[22px] rounded-full absolute top-1.5 md:top-2 bg-[#0f0f0f] shadow-[inset_0px_3px_5px_rgba(0,0,0,1)] z-40 border border-black/30" 
      style={{ 
        left: `calc(${(i * 96) / totalRings + 2}% - 11px)` 
      }}
    ></div>
  ));

  if (dimensions.width === 0) return null;

  const numFlips = totalPages - 1;
  const activePageIndex = Math.min(
    Math.floor(scrollProgress * numFlips),
    numFlips
  );

  return (
    <div className="relative flex justify-center items-center h-full w-full mt-8 md:mt-12" style={{ perspective: "3000px" }}>
      
      <div 
        className="relative shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
        style={{ 
          width: dimensions.width, 
          height: dimensions.height,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Notebook Cardboard Backing */}
        <div className="absolute inset-0 bg-[#3a2f26] rounded-b-xl rounded-t-sm shadow-inner z-0 border-x border-b border-black/40">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] opacity-60 mix-blend-multiply"></div>
          <div className="absolute -left-1 -bottom-1 right-0 h-full bg-[#f4ebd0] -z-10 rounded-b-xl border border-black/20"></div>
          <div className="absolute -left-2 -bottom-2 right-0 h-full bg-[#ebdcb5] -z-20 rounded-b-xl border border-black/20"></div>
        </div>

        {/* 3D Top Spiral Rings */}
        <div className="absolute left-0 right-0 top-0 h-0 z-50 pointer-events-none">
          {spiralRings}
        </div>

        {/* The Pages */}
        {pages.map((PageComponent, index) => {
          // Calculate pure math physics for this specific page
          // Each page gets a fraction of the total scroll progress
          const flipStart = index / numFlips;
          const flipEnd = (index + 1) / numFlips;
          
          let pageProgress = 0;
          if (scrollProgress >= flipEnd) {
            pageProgress = 1;
          } else if (scrollProgress > flipStart) {
            pageProgress = (scrollProgress - flipStart) * numFlips;
          }

          // Smooth easing using Sine
          const easedProgress = -(Math.cos(Math.PI * pageProgress) - 1) / 2;

          const rotateX = easedProgress * 175; // Flip up to 175 degrees
          const translateZ = Math.sin(pageProgress * Math.PI) * 60; // Arc upwards
          const translateY = Math.sin(pageProgress * Math.PI) * -20; // Shift up

          // Dynamic shadows
          const frontShadowOpacity = Math.sin(pageProgress * Math.PI) * 0.7; // Darkest in the middle
          const backShadowOpacity = (1 - easedProgress) * 0.8; // Fades out as it lays flat on the back

          return (
            <div
              id={`page-${index}`}
              key={index}
              className="absolute inset-0 origin-top"
              style={{
                zIndex: 100 - index,
                transformStyle: "preserve-3d",
                pointerEvents: index === activePageIndex ? "auto" : "none",
                transform: `translate3d(0px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg)`
              }}
            >
              {/* FRONT FACE */}
              <div 
                className="absolute inset-0 bg-[#Fdfbf5] rounded-b-lg border-x border-b border-black/10 flex flex-col" 
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              >
                {/* Dynamic Front Shadow */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none z-50"
                  style={{ opacity: frontShadowOpacity }}
                ></div>

                <div className="absolute left-0 right-0 top-0 h-8 pointer-events-none">
                  {holes}
                </div>

                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-multiply" 
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                ></div>

                <div 
                  className="absolute inset-0 pointer-events-none opacity-20 z-0" 
                  style={{ 
                    backgroundImage: "linear-gradient(#000 1px, transparent 1px)", 
                    backgroundSize: "100% 2.5rem",
                    backgroundPosition: "0 4rem" 
                  }}
                ></div>
                
                <div className="absolute top-0 bottom-0 left-12 md:left-20 w-px bg-red-500/30 z-0 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 left-[3.25rem] md:left-[5.25rem] w-px bg-red-500/30 z-0 pointer-events-none"></div>

                <div className="relative w-full h-full pt-16 md:pt-20 pb-8 px-6 md:px-10 pl-16 md:pl-28 overflow-y-auto overflow-x-hidden z-10 custom-scrollbar">
                  <PageComponent />
                </div>
                
                <div className="absolute bottom-4 right-6 font-playfair text-black/40 text-sm z-20">
                  {index + 1}
                </div>
              </div>

              {/* BACK FACE */}
              <div 
                className="absolute inset-0 bg-[#eaddce] rounded-t-lg border-x border-t border-black/10 flex flex-col"
                style={{ transform: "rotateX(180deg)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              >
                {/* Dynamic Back Shadow */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-50"
                  style={{ opacity: backShadowOpacity }}
                ></div>

                <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0 mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                <div className="absolute inset-0 pointer-events-none opacity-10 z-0" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px)", backgroundSize: "100% 2.5rem" }}></div>
                <div className="absolute top-0 bottom-0 right-12 md:right-20 w-px bg-red-500/20 z-0 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-[3.25rem] md:right-[5.25rem] w-px bg-red-500/20 z-0 pointer-events-none"></div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
