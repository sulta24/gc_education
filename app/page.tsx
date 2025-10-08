import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2";
import { LogoSection10 } from "@/components/pro-blocks/landing-page/logo-sections/logo-section-7";
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1";
import { BentoGrid6 } from "@/components/pro-blocks/landing-page/bento-grids/bento-grid-6";
import { FeatureSection9 } from "@/components/pro-blocks/landing-page/feature-sections/feature-section-9";
import { StatsSection4 } from "@/components/pro-blocks/landing-page/stats-sections/stats-section-4";
import { ConsultationBenefits } from "@/components/pro-blocks/landing-page/consultation-benefits/consultation-benefits";
import { HallOfFame } from "@/components/pro-blocks/landing-page/hall-of-fame/hall-of-fame";
import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-2";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";

export default function Page() {
  return (
    <main>
      <LpNavbar1 />
      <HeroSection2 />
      <LogoSection10 />
      <StatsSection4 />
      <ConsultationBenefits />
      <TestimonialsSection1
        quote="Благодаря GC Education я смог поступить в Stanford с полной стипендией. Эксперты помогли мне создать сильное портфолио и подготовиться к экзаменам."
        authorName="Айжан Касымова"
        authorRole="Студентка Stanford University"
        avatarSrc="/DavidPark.png"
      />
      <BentoGrid6 />
      <FeatureSection9 />
      <HallOfFame />
      <TestimonialsSection1
        quote="GC Education изменили мою жизнь. Я поступил в KAIST и получил стипендию на $200,000. Без их поддержки это было бы невозможно!"
        authorName="Адильжан Нурланов"
        authorRole="Студент KAIST"
        avatarSrc="/MonicaKurt.png"
      />
      <FaqSection2 />
      <Footer1 />
    </main>
  );
}
