import SectionNavigation from "@/components/layout/SectionNavigation";
import ActionButtons from "./component/ActionButtons";
import HeroContent from "./component/HeroContent";
import HeroImage from "./component/HeroImage";
import SocialLinks from "./component/SocialLinks";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-28 md:pt-16 pb-8 bg-white dark:bg-gradient-to-b dark:from-[#1E293B] dark:to-[#0F172A] relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <HeroContent />
            <SocialLinks />
            <ActionButtons />
          </div>
          <HeroImage />
        </div>
      </div>

      <SectionNavigation currentSectionId="hero" />
    </section>
  );
}
