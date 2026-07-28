import React from 'react';
import { RetroWindow } from './RetroWindow';

export function ContactSection() {
  return (
    <div className="min-h-screen flex items-center justify-center py-[90px] px-[24px] md:px-[150px] relative" id="contact-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[11px] tracking-[.3em] uppercase text-[#6b6a56]">
        03 · contact
      </span>
      
      <RetroWindow title="C:\KARMAN\contact">
        <div className="bg-[#22241a] rounded-[6px] p-[16px] font-mono text-[12px] text-[#9fe1b0] min-h-[160px] mb-[26px]">
          <div className="whitespace-pre-wrap leading-[1.6] mb-[8px]">
            Booting communication protocols...<br/>
            Establishing secure connection...<br/>
            Ready.
          </div>
          <div className="flex items-center gap-[6px]">
            <span className="text-[#df7a3e]">C:\&gt;</span>
            <input 
              type="text" 
              className="bg-transparent border-none outline-none text-[#f4efdd] font-mono text-[12px] flex-1"
              value="ping t.karman.singh@gmail.com"
              readOnly
            />
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center gap-[14px] text-[13px]">
            <span className="w-[80px] text-[#6b6a56] tracking-[.06em] text-[11px]">EMAIL</span>
            <a href="mailto:t.karman.singh@gmail.com" className="text-[#3f3f2e] no-underline border-b border-dashed border-[#c9c2a3] hover:text-[#df7a3e] hover:border-[#df7a3e]">
              t.karman.singh@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-[14px] text-[13px]">
            <span className="w-[80px] text-[#6b6a56] tracking-[.06em] text-[11px]">LINKEDIN</span>
            <a href="https://www.linkedin.com/in/t-karman-singh/" target="_blank" rel="noopener noreferrer" className="text-[#3f3f2e] no-underline border-b border-dashed border-[#c9c2a3] hover:text-[#df7a3e] hover:border-[#df7a3e]">
              /in/t-karman-singh
            </a>
          </div>
          <div className="flex items-center gap-[14px] text-[13px]">
            <span className="w-[80px] text-[#6b6a56] tracking-[.06em] text-[11px]">GITHUB</span>
            <a href="https://github.com/tkarman-singh" target="_blank" rel="noopener noreferrer" className="text-[#3f3f2e] no-underline border-b border-dashed border-[#c9c2a3] hover:text-[#df7a3e] hover:border-[#df7a3e]">
              @tkarman-singh
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-[24px]">
          <div className="inline-flex items-center gap-[8px] bg-[#22241a] rounded-[4px] px-[12px] py-[6px] font-mono">
            <span className="text-[9px] text-[#9a9a86] tracking-[.08em]">VISITORS</span>
            <span className="text-[13px] text-[#4ade80] tracking-[.15em]">001337</span>
          </div>
        </div>
      </RetroWindow>
    </div>
  );
}
