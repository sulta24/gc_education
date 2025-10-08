"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function StatsSection4() {
  return (
    <section className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Результаты наших студентов</Tagline>
            <h2 className="heading-lg text-foreground">Цифры говорят сами за себя</h2>
            <p className="text-muted-foreground">
              8 лет опыта в сфере образования и тысячи успешных поступлений в лучшие университеты мира
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">
                  Студентов по всему миру
                </h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  500+
                </span>
                <p className="text-muted-foreground text-base">
                  Студенты, которые поступили в университеты мечты с нашей помощью
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Приглашений от университетов</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  1000+
                </span>
                <p className="text-muted-foreground text-base">
                  Офферов получили наши студенты от лучших университетов мира
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Поступили с первого раза</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  100%
                </span>
                <p className="text-muted-foreground text-base">
                  Студентов поступили в выбранные университеты с первой попытки
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Суммарно получено стипендий</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  $10M
                </span>
                <p className="text-muted-foreground text-base">
                  Общая сумма стипендий и грантов, полученных нашими студентами
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
