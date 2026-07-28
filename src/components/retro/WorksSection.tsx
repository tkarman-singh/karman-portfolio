import React from 'react';
import { RetroWindow } from './RetroWindow';

const skills = [
  { name: 'TypeScript', icon: 'TS' },
  { name: 'React', icon: 'Re' },
  { name: 'Next.js', icon: 'Nx' },
  { name: 'Tailwind', icon: 'Tw' },
  { name: 'Node.js', icon: 'No' },
  { name: 'Prisma', icon: 'Pr' },
  { name: 'PostgreSQL', icon: 'Pg' },
  { name: 'Git', icon: 'Gi' },
];

export function WorksSection() {
  return (
    <div className="min-h-screen flex items-center justify-center py-[90px] px-[24px] md:px-[150px] relative" id="works-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[11px] tracking-[.3em] uppercase text-[#6b6a56]">
        02 · works
      </span>
      
      <RetroWindow title="C:\KARMAN\skills_and_projects" className="max-w-[780px]">
        <div className="h-[10px] bg-[#df7a3e] mx-[-34px] mt-[-34px] mb-[26px]"></div>
        
        <h3 className="text-center text-[20px] tracking-[.1em] mb-[26px]">TECHNICAL SKILLS</h3>
        
        <div className="mb-[26px]">
          <h4 className="font-fraunces text-[14px] font-semibold text-[#df7a3e] m-0 mb-[14px] pb-[6px] border-b border-dashed border-[#c9c2a3]">
            Languages & Frameworks
          </h4>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-y-[18px] gap-x-[10px]">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-[8px]">
                <div className="w-[46px] h-[46px] rounded-[11px] bg-white border border-[#c9c2a3] flex items-center justify-center shrink-0 font-bold text-[#3f3f2e]">
                  {skill.icon}
                </div>
                <span className="text-[9px] text-center text-[#6b6a56] leading-[1.3]">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </RetroWindow>
    </div>
  );
}
