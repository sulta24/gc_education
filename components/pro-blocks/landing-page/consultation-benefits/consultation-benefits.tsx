"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { CheckCircle, Calendar, Target, User, DollarSign, GraduationCap } from "lucide-react";

export function ConsultationBenefits() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Создадим конкурентное портфолио",
      description: "Эксперт даст готовые решения по усилению вашей заявки. Это поможет выделиться для приемной комиссии"
    },
    {
      icon: Calendar,
      title: "Дадим календарь подготовки",
      description: "Составим личный календарь подготовки к международным экзаменам с дедлайнами и датами"
    },
    {
      icon: Target,
      title: "Пошаговая инструкция для поступления в ТОП ВУЗ",
      description: "Получите подробный пошаговый план подготовки в ТОП ВУЗ мечты с получением стипендий и грантов"
    },
    {
      icon: User,
      title: "Разбор профиля от эксперта",
      description: "Дадим список конкурсов и расскажем как создать проект, который поможет 100% поступить в желаемый ВУЗ"
    },
    {
      icon: DollarSign,
      title: "Запланируете свои финансы для поступления и жизни зарубежом",
      description: "Посчитаете бюджет ребенка и запланируете все расходы связанные с обучением заграницей"
    },
    {
      icon: GraduationCap,
      title: "Выберите 3 ВУЗа куда подаваться",
      description: "Исходя из ваших сильных и слабых сторон выберите ВУЗы вместе с экспертом по поступлению"
    }
  ];

  return (
    <section className="bg-secondary section-padding-y">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-2xl flex-col items-center text-center">
            <Tagline>Собеседование с экспертом</Tagline>
            <h2 className="heading-lg text-foreground">Что получите на собеседовании?</h2>
            <p className="text-muted-foreground">
              Персональная консультация с экспертом по поступлению, которая даст вам четкий план действий
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="bg-background rounded-xl border-none p-6 shadow-none">
                  <CardContent className="flex flex-col gap-4 p-0">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 text-primary rounded-lg p-2">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-primary font-semibold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-foreground font-semibold text-lg leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}