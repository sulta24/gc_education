"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { CheckCircle, Calendar, Target, User, DollarSign, Briefcase } from "lucide-react";

export function ConsultationBenefits() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Создадим план карьерного развития",
      description: "Ментор поможет определить ваши сильные стороны и составит персональный план развития в выбранной сфере"
    },
    {
      icon: Calendar,
      title: "Дадим календарь достижения целей",
      description: "Составим реалистичный план с конкретными шагами и дедлайнами для достижения ваших карьерных целей"
    },
    {
      icon: Target,
      title: "Пошаговая стратегия роста",
      description: "Получите детальный план развития навыков, смены профессии или запуска проекта от практикующего эксперта"
    },
    {
      icon: User,
      title: "Разбор профиля и резюме",
      description: "Проанализируем ваш опыт, навыки и поможем презентовать себя максимально выгодно для работодателей"
    },
    {
      icon: DollarSign,
      title: "Стратегия увеличения дохода",
      description: "Обсудим способы повышения зарплаты, монетизации навыков и построения финансово успешной карьеры"
    },
    {
      icon: Briefcase,
      title: "Подготовка к собеседованиям",
      description: "Отработаем типичные вопросы, поможем подготовить кейсы и повысим уверенность перед интервью"
    }
  ];

  return (
    <section className="bg-secondary section-padding-y">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-2xl flex-col items-center text-center">
            <Tagline>Консультация с ментором</Tagline>
            <h2 className="heading-lg text-foreground">Что получите на консультации?</h2>
            <p className="text-muted-foreground">
              Персональная сессия с экспертом из топовых компаний, которая даст вам четкий план действий для карьерного роста
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