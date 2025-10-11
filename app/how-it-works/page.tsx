import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { CheckCircle, Users, Calendar, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main>
      <LpNavbar1 />
      
      <div className="bg-secondary min-h-screen">
        <div className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Как это работает
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Простой и эффективный процесс работы с менторами для достижения ваших целей
            </p>
          </div>

          {/* Main Process Steps */}
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Step 1 */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Выберите ментора</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Просмотрите профили наших экспертных менторов и выберите того, кто лучше всего подходит для ваших целей. Каждый ментор имеет подробное описание опыта, специализации и отзывы от других учеников.
                  </p>
                  <div className="bg-background border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">Более 50+ экспертных менторов</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Эксперты из топовых компаний мира с реальным опытом в различных сферах
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 2 */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Первичная консультация</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Проведите бесплатную 30-минутную консультацию с выбранным ментором. Обсудите ваши цели, текущую ситуацию и определите, подходит ли вам этот ментор.
                  </p>
                  <div className="bg-background border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">Бесплатная консультация 30 минут</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Познакомьтесь с ментором и убедитесь в совместимости перед началом работы
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 3 */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Создание индивидуального плана</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Ментор разработает персональный план развития, учитывая ваши цели, сильные стороны и области для улучшения. План включает конкретные шаги и временные рамки.
                  </p>
                  <div className="bg-background border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">Персональный план развития</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Четкие цели, конкретные шаги и измеримые результаты
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 4 */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Регулярные сессии</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Проводите регулярные сессии с ментором (еженедельно или по индивидуальному графику). Отслеживайте прогресс, получайте обратную связь и корректируйте план при необходимости.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-foreground">Гибкий график</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Выбирайте удобное время для сессий
                      </p>
                    </div>
                    <div className="bg-background border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-foreground">Постоянная поддержка</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Связь с ментором между сессиями
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section className="bg-background border rounded-xl p-8 shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Результаты, которых вы достигнете</h2>
                <p className="text-muted-foreground text-lg">
                  Наши ученики достигают конкретных результатов благодаря структурированному подходу
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Четкие цели</h3>
                  <p className="text-muted-foreground">
                    Определите свой путь и поставьте достижимые цели
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Развитие навыков</h3>
                  <p className="text-muted-foreground">
                    Приобретите востребованные hard и soft skills
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Достижение результатов</h3>
                  <p className="text-muted-foreground">
                    Достижение карьерных целей и профессиональный рост
                  </p>
                </div>
              </div>

              <div className="bg-muted/80 rounded-lg p-6 border">
                <p className="text-foreground text-xl font-semibold text-center">
                  Более 85% наших учеников достигают поставленных целей в течение первого года работы с ментором!
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-muted/80 rounded-xl p-8 border shadow-none">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Готовы начать свой путь к успеху?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Выберите ментора и запишитесь на бесплатную консультацию уже сегодня. 
                Первый шаг к вашим целям начинается прямо сейчас.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/mentors">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Выбрать ментора
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Узнать больше о нас
                  </Button>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </div>
      
      <Footer1 />
    </main>
  );
}