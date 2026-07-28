import { Dock } from "@/components/retro/Dock";
import { HeroSection } from "@/components/retro/HeroSection";
import { ProfileSection } from "@/components/retro/ProfileSection";
import { WorksSection } from "@/components/retro/WorksSection";
import { ContactSection } from "@/components/retro/ContactSection";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden selection:bg-[#df7a3e] selection:text-white pb-[70px]">
      <Dock />
      <HeroSection />
      <ProfileSection />
      <WorksSection />
      <ContactSection />
      
      <footer className="text-center pt-[50px] pb-[70px] px-[20px] text-[11px] text-[#6b6a56] tracking-[.08em] font-mono">
        © 2026 Karman Singh. Built with Next.js & Tailwind.
      </footer>
    </main>
  );
}
