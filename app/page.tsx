import ExperienceSection from "@/components/ExperienceSection/page";
import HeroSection from "@/components/HeroSection/page";
import Profile from "@/components/profile/page";

export default function HomePage() {
  return (
    <div className="w-full flex min-h-screen gap-20 justify-between mx-12">
      {/* Left fixed profile */}
      <div className="w-1/4  sticky top-16 left-0 h-full">
        <Profile  />
      </div>

      {/* Right scrollable content */}
      <div className="w-3/4 pr-20">
          <HeroSection />
          <ExperienceSection />
      </div>
    </div>
  );
}
