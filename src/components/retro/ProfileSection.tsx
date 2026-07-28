import React from 'react';
import { RetroWindow } from './RetroWindow';

export function ProfileSection() {
  return (
    <div className="min-h-screen flex items-center justify-center py-[90px] px-[24px] md:px-[150px] relative" id="profile-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[11px] tracking-[.3em] uppercase text-[#6b6a56]">
        01 · about
      </span>
      
      <RetroWindow title="C:\KARMAN\profile">
        <div className="flex flex-col md:flex-row items-center gap-[26px]">
          <img 
            src="/profile.jpg" 
            alt="Karman Singh" 
            className="w-[118px] h-[118px] rounded-full object-cover bg-[#6b6e45] shrink-0 border-2 border-[#c9c2a3]"
          />
          <div className="text-center md:text-left">
            <p className="text-[15px] text-[#6b6a56] m-0 mb-1">Hi, I'm</p>
            <h2 className="font-fraunces text-[28px] font-semibold text-[#df7a3e] m-0 mb-1 leading-[1.15]">
              Karman Singh
            </h2>
            <p className="text-[11px] tracking-[.14em] text-[#6b6a56] mt-2 mb-2.5">
              FULL STACK DEVELOPER
            </p>
            <p className="italic text-[13px] text-[#3f3f2e] m-0">
              "Building robust software and solving complex problems with clean code."
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-[14px] mt-[22px] pt-[20px] border-t border-dashed border-[#c9c2a3] text-center md:text-left">
          <p className="text-[12px] text-[#6b6a56] leading-[1.4] m-0">
            Bachelor's in Computer Science • Passionate about scalable web architectures and beautiful UI/UX.
          </p>
        </div>
      </RetroWindow>
    </div>
  );
}
