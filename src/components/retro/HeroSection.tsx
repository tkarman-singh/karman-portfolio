import React from 'react';
import { Mail } from "lucide-react";

export function HeroSection() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center relative px-[58px] md:px-[140px] text-center">
        <h1 className="font-fraunces text-[clamp(52px,11vw,128px)] font-light tracking-[0.18em] text-transparent leading-none m-0" style={{ WebkitTextStroke: '1.4px #6b6a56' }}>
          PORTFOLIO
        </h1>
        <p className="font-vibes text-[clamp(28px,5vw,50px)] text-[#7c1f2b] m-0 mt-[-6px] leading-none">
          of
        </p>
        <p className="font-fraunces font-semibold text-[clamp(24px,5vw,46px)] tracking-[0.02em] text-[#7c1f2b] m-0 mt-[6px] leading-none flex items-baseline justify-center gap-[14px]">
          <span className="font-vibes font-normal tracking-[0.01em] text-[1.5em]">Karman</span>
          <span className="font-vibes font-normal tracking-[0.01em] text-[1.5em]">Singh</span>
        </p>
        
        <div className="absolute bottom-[110px] left-1/2 -translate-x-1/2 text-[12px] tracking-[.25em] uppercase text-[#6b6a56] flex items-center gap-[10px]">
          <span className="inline-block animate-bounce">↓</span> scroll to explore <span className="inline-block animate-bounce">↓</span>
        </div>
      </section>

      {/* Social Stripe */}
      <div className="bg-[#6b6e45] py-[26px] flex justify-center gap-[22px] relative z-20 flex-wrap px-[10px]">
        <a href="https://www.linkedin.com/in/t-karman-singh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
           className="w-[46px] h-[46px] rounded-[10px] flex items-center justify-center no-underline shadow-[0_3px_0_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-[3px] bg-[#4372a8]">
          <svg fill="#fff" viewBox="0 0 24 24" className="w-[22px] h-[22px]">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.87c0-1.64-.03-3.75-2.28-3.75-2.29 0-2.64 1.79-2.64 3.63V23h-4V8z"></path>
          </svg>
        </a>
        <a href="https://github.com/tkarman-singh" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
           className="w-[46px] h-[46px] rounded-[10px] flex items-center justify-center no-underline shadow-[0_3px_0_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-[3px] bg-[#22241a]">
          <svg fill="#fff" viewBox="0 0 24 24" className="w-[22px] h-[22px]">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.08.78 2.18v3.23c0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"></path>
          </svg>
        </a>
        <a href="mailto:t.karman.singh@gmail.com" aria-label="Email"
           className="w-[46px] h-[46px] rounded-[10px] flex items-center justify-center no-underline shadow-[0_3px_0_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-[3px] bg-[#e0594b] text-white">
          <Mail className="w-[22px] h-[22px]" />
        </a>
      </div>
    </>
  );
}
