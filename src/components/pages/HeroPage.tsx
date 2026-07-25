"use client";

export function HeroPage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6">
      <div className="flex-grow flex flex-col justify-center items-start">
        
        <div className="mb-4 text-3xl md:text-4xl font-bold bg-yellow-200/50 inline-block px-4 py-1 -rotate-2 transform shadow-sm border border-black/10 uppercase tracking-widest font-sans">
          NAMASTE, I'M
        </div>
        
        <h1 className="text-[5.5rem] md:text-[7rem] font-extrabold leading-[0.8] tracking-tight mb-2">
          Karman
        </h1>
        <h1 className="text-[5.5rem] md:text-[7rem] font-extrabold leading-[0.8] tracking-tight mb-6 ml-8 md:ml-16">
          Singh
        </h1>

        {/* Hand-drawn underline */}
        <svg className="w-64 h-6 mb-12 mt-2 opacity-60 ml-8 md:ml-16" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M5,15 Q50,5 100,12 T195,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
        
        <div className="flex flex-wrap gap-4 max-w-xl">
          <div className="px-5 py-2 border-2 border-black rounded-lg shadow-[4px_4px_0_rgba(0,0,0,1)] text-xl md:text-2xl font-bold transform hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,1)] transition-all bg-white cursor-pointer -rotate-1">
            DevOps Engineer
          </div>
          <div className="px-5 py-2 border-2 border-black rounded-lg shadow-[4px_4px_0_rgba(0,0,0,1)] text-xl md:text-2xl font-bold transform hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,1)] transition-all bg-white cursor-pointer rotate-1">
            Software Engineer
          </div>
          <div className="px-5 py-2 border-2 border-black rounded-lg shadow-[4px_4px_0_rgba(0,0,0,1)] text-xl md:text-2xl font-bold transform hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,1)] transition-all bg-white cursor-pointer -rotate-2 mt-2">
            Machine Learning
          </div>
        </div>
      </div>
      
      {/* Absolute positioning for a taped polaroid photo or doodle */}
      <div className="absolute top-12 right-12 w-48 h-56 bg-white p-3 shadow-lg transform rotate-6 border border-gray-200 hidden md:block">
        <div className="w-full h-40 bg-gray-200 mb-2 overflow-hidden relative">
          <img src="/profile.jpg" alt="Karman Singh" className="w-full h-full object-cover" />
        </div>
        <p className="text-center text-xl font-bold">Me!</p>
        {/* Tape */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/60 backdrop-blur-sm shadow-sm rotate-3 border border-black/5 mix-blend-overlay"></div>
      </div>

    </div>
  );
}
