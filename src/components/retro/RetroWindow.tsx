import React from 'react';

interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export function RetroWindow({ title, children, onClose, className = "" }: RetroWindowProps) {
  return (
    <div className={`bg-[#f6f1e4] border border-[#c9c2a3] rounded-md w-full max-w-[620px] shadow-[0_18px_40px_rgba(60,58,30,0.18)] overflow-hidden select-none ${className}`}>
      {/* Window Bar */}
      <div className="bg-[#585a38] text-[#ece7d3] text-[13px] tracking-[.03em] px-[14px] py-[10px] flex items-center justify-between cursor-default">
        <span>{title}</span>
        {onClose && (
          <button 
            onClick={onClose}
            className="w-[18px] h-[18px] bg-[#e0594b] rounded-[4px] flex items-center justify-center text-white text-[11px] leading-none border-none cursor-pointer hover:brightness-110"
          >
            ×
          </button>
        )}
      </div>
      
      {/* Window Body */}
      <div className="p-[34px]">
        {children}
      </div>
    </div>
  );
}
