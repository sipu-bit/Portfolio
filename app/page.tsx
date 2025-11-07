import ContactSection from "@/components/ContactSection/page";
import EducationSection from "@/components/EducationSection/page";
import ExperienceSection from "@/components/ExperienceSection/page";
import Footer from "@/components/footer/page";
import HeroSection from "@/components/HeroSection/page";
import Projects from "@/components/MyProjects/page";
import Profile from "@/components/profile/page";
import InfiniteCards from "@/components/SkillSection/page";
import GreenGlowLine from "@/components/ui/GlowingLine";
// import { InfiniteCards } from "@/components/SkillSection/page";

export default function HomePage() {
  return (
    <div className="w-full  inset-0 z-0 min-h-screen flex flex-col" style={{
      background: "#020617",
      backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
      backgroundSize: "32px 32px, 32px 32px, 100% 100%",
    }}>
      
<GreenGlowLine className="fixed top-0 z-50" orientation="horizontal" side="top" />
<GreenGlowLine className="fixed left-0 z-50" orientation="vertical" side="left" />
<GreenGlowLine className="fixed right-0 z-50" orientation="vertical" side="right" />

      <div className="flex 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between gap-20 2xl:mx-12 xl:mx-12 lg:mx-12 mx-3">
        {/* Added bottom margin to ensure footer spacing */}
        <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 w-full relative">
          <div className="2xl:sticky xl:sticky lg:sticky static 2xl:top-10 xl:top-10 lg:top-10 top-14 h-auto">
            <Profile />
          </div>
        </div>

        <div className="2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-full flex flex-col gap-10">
          <HeroSection />
          <ExperienceSection />
          <Projects />
          <EducationSection />
          <InfiniteCards />
          <ContactSection />
        </div>
      </div>

      {/* Footer now spaced naturally */}
      <footer className="mt-2 border-gray-200">
        <Footer />
      </footer>
      <GreenGlowLine className="fixed left-0 z-50" orientation="vertical" position="0" />

    </div>
  );
}

