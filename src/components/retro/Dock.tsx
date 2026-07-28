'use client';
import React from 'react';

export function Dock() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Left Dock */}
      <div className="fixed top-0 left-0 h-screen w-[48px] md:w-[110px] flex flex-col items-center pt-[20px] md:pt-[56px] gap-[26px] md:gap-[56px] z-40 pointer-events-none hidden sm:flex">
        <button className="flex flex-col items-center gap-[8px] cursor-pointer pointer-events-auto bg-transparent border-none font-mono group" onClick={() => scrollTo('profile-section')}>
          <div className="w-[34px] md:w-[52px] h-[34px] md:h-[52px] rounded-[9px] md:rounded-[12px] flex items-center justify-center shadow-[0_3px_0_rgba(0,0,0,0.15)] transition-transform group-hover:-translate-y-[3px] bg-[#6b6e45]">
            <svg fill="none" stroke="#f4efdd" strokeWidth="2" viewBox="0 0 24 24" className="w-[18px] md:w-[24px] h-[18px] md:h-[24px]">
              <circle cx="12" cy="8" r="4"></circle>
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6"></path>
            </svg>
          </div>
          <span className="text-[7.5px] md:text-[11px] tracking-normal md:tracking-[.03em] text-[#6b6a56]">profile</span>
        </button>
        <button className="flex flex-col items-center gap-[8px] cursor-pointer pointer-events-auto bg-transparent border-none font-mono group" onClick={() => scrollTo('works-section')}>
          <div className="w-[34px] md:w-[52px] h-[34px] md:h-[52px] rounded-[9px] md:rounded-[12px] flex items-center justify-center shadow-[0_3px_0_rgba(0,0,0,0.15)] transition-transform group-hover:-translate-y-[3px] bg-[#f3c53d] relative">
            <div className="absolute top-[6px] md:top-[8px] left-[6px] md:left-[8px] w-[12px] md:w-[16px] h-[4px] md:h-[6px] bg-[#3f5c93] rounded-t-[2px]"></div>
            <div className="absolute inset-[4px] md:inset-[6px] top-[10px] md:top-[12px] bg-white/35 rounded-[3px]"></div>
          </div>
          <span className="text-[7.5px] md:text-[11px] tracking-normal md:tracking-[.03em] text-[#6b6a56]">works</span>
        </button>
      </div>

      {/* Right Dock */}
      <div className="fixed top-0 right-0 h-screen w-[48px] md:w-[110px] flex flex-col items-center pt-[20px] md:pt-[56px] gap-[26px] md:gap-[56px] z-40 pointer-events-none hidden sm:flex">
        <button className="flex flex-col items-center gap-[8px] cursor-pointer pointer-events-auto bg-transparent border-none font-mono group" onClick={() => openLink('https://github.com/tkarman-singh')}>
          <div className="w-[34px] md:w-[52px] h-[34px] md:h-[52px] rounded-[9px] md:rounded-[12px] flex items-center justify-center shadow-[0_3px_0_rgba(0,0,0,0.15)] transition-transform group-hover:-translate-y-[3px] bg-[#f3c53d] relative">
            <div className="absolute top-[6px] md:top-[8px] left-[6px] md:left-[8px] w-[12px] md:w-[16px] h-[4px] md:h-[6px] bg-[#3f5c93] rounded-t-[2px]"></div>
            <div className="absolute inset-[4px] md:inset-[6px] top-[10px] md:top-[12px] bg-white/35 rounded-[3px]"></div>
          </div>
          <span className="text-[7.5px] md:text-[11px] tracking-normal md:tracking-[.03em] text-[#6b6a56]">github</span>
        </button>
        <button className="flex flex-col items-center gap-[8px] cursor-pointer pointer-events-auto bg-transparent border-none font-mono group" onClick={() => scrollTo('contact-section')}>
          <div className="w-[34px] md:w-[52px] h-[34px] md:h-[52px] rounded-[9px] md:rounded-[12px] flex items-center justify-center shadow-[0_3px_0_rgba(0,0,0,0.15)] transition-transform group-hover:-translate-y-[3px] bg-[#f3c53d] relative">
            <div className="absolute top-[6px] md:top-[8px] left-[6px] md:left-[8px] w-[12px] md:w-[16px] h-[4px] md:h-[6px] bg-[#3f5c93] rounded-t-[2px]"></div>
            <div className="absolute inset-[4px] md:inset-[6px] top-[10px] md:top-[12px] bg-white/35 rounded-[3px]"></div>
          </div>
          <span className="text-[7.5px] md:text-[11px] tracking-normal md:tracking-[.03em] text-[#6b6a56]">contact</span>
        </button>
      </div>
    </>
  );
}
