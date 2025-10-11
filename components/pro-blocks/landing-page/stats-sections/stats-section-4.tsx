"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function StatsSection4() {
  return (
    <section className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Наша платформа</Tagline>
            <h2 className="heading-lg text-foreground">Цифры говорят сами за себя</h2>
            <p className="text-muted-foreground">
              Платформа объединяет людей, которые хотят развиваться, делиться опытом и помогать другим расти профессионально
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">
                  Активных менторов
                </h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  900+
                </span>
                <p className="text-muted-foreground text-base">
                  Экспертов из ведущих tech и creative компаний готовы помочь
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Средняя оценка</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  9.7/10
                </span>
                <p className="text-muted-foreground text-base">
                  Рейтинг менторов после проведенных сессий
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Минимальный опыт</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  5+ лет
                </span>
                <p className="text-muted-foreground text-base">
                  Практического опыта у каждого ментора в топовых компаниях
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Успешных сессий</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  10,000+
                </span>
                <p className="text-muted-foreground text-base">
                  Консультаций проведено для карьерного роста и развития
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
