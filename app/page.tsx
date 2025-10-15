import ContactSection from "@/components/ContactSection/page";
import EducationSection from "@/components/EducationSection/page";
import ExperienceSection from "@/components/ExperienceSection/page";
import Footer from "@/components/footer/page";
import HeroSection from "@/components/HeroSection/page";
import Projects from "@/components/MyProjects/page";
import Profile from "@/components/profile/page";
import { InfiniteCards } from "@/components/SkillSection/page";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex justify-between gap-20 mx-12"> 
        {/* Added bottom margin to ensure footer spacing */}
        <div className="w-1/3 relative">
          <div className="sticky top-10 h-fit">
            <Profile />
          </div>
        </div>

        <div className="w-2/3">
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
    </div>
  );
}

