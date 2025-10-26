import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2";
import { PlatformDescription } from "@/components/pro-blocks/landing-page/platform-description/platform-description";
import { HowItWorks } from "@/components/pro-blocks/landing-page/how-it-works/how-it-works";
import { AiMentor } from "@/components/pro-blocks/landing-page/ai-mentor/ai-mentor";
import { MentorTypes } from "@/components/pro-blocks/landing-page/mentor-types/mentor-types";
import { CoursesSection } from "@/components/pro-blocks/landing-page/courses-section/courses-section";
import { StudentStories } from "@/components/pro-blocks/landing-page/student-stories/student-stories";
import { StudentJourney } from "@/components/pro-blocks/landing-page/student-journey/student-journey";
import { TrustSection } from "@/components/pro-blocks/landing-page/trust-section/trust-section";
import { FinalCta } from "@/components/pro-blocks/landing-page/final-cta/final-cta";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";

export default function Page() {
  return (
    <main>
      <LpNavbar1 />
      <HeroSection2 />
      <PlatformDescription />
      <HowItWorks />
      <AiMentor />
      <MentorTypes />
      <CoursesSection />
      <StudentStories />
      <StudentJourney />
      <TrustSection />
      <FinalCta />
      <Footer1 />
    </main>
  );
}
