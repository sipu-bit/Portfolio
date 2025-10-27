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
      <div className="flex 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between gap-20 2xl:mx-12 xl:mx-12 lg:mx-12 mx-3"> 
        {/* Added bottom margin to ensure footer spacing */}
        <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 w-full relative">
          <div className="2xl:sticky xl:sticky lg:sticky static 2xl:top-10 xl:top-10 lg:top-10 top-2 h-auto">
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
    </div>
  );
}

