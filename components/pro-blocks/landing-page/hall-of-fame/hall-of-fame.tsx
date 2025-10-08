"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, Award } from "lucide-react";

export function HallOfFame() {
  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-2xl flex-col items-center text-center">
            <Tagline>Зал славы</Tagline>
            <h2 className="heading-lg text-foreground">Истории успеха наших студентов</h2>
            <p className="text-muted-foreground">
              Реальные результаты студентов, которые достигли своих целей с помощью GC Education
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Камила */}
            <Card className="bg-secondary rounded-xl border-none p-8 shadow-none">
              <CardContent className="flex flex-col gap-6 p-0">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 text-primary rounded-full p-3">
                    <Trophy className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-2xl">Камила</h3>
                    <Badge variant="secondary" className="mt-1">
                      6 офферов от университетов
                    </Badge>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-primary font-bold text-3xl">$550,000</div>
                    <div className="text-muted-foreground text-sm">или 245 млн ₸</div>
                    <div className="text-foreground font-semibold mt-1">Общая сумма стипендий</div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Камила получила 6 офферов от университетов своей мечты, при этом получив от всех стипендии. 
                  Каждый из вузов предложил ей финансовую поддержку именно в том размере, который ей был необходим для своего обучения!
                </p>
              </CardContent>
            </Card>

            {/* Улан */}
            <Card className="bg-secondary rounded-xl border-none p-8 shadow-none">
              <CardContent className="flex flex-col gap-6 p-0">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 text-primary rounded-full p-3">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-2xl">Улан</h3>
                    <Badge variant="secondary" className="mt-1">
                      От спорта к проектному менеджменту
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="text-foreground font-semibold mb-2">Точка "А"</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Ориентированный на спорт</li>
                      <li>• Хотел стать тренером</li>
                      <li>• Не видел всех своих сильных качеств</li>
                      <li>• Не было внешкольных активностей</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h4 className="text-foreground font-semibold mb-2">Точка "Б"</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Определился с профессией</li>
                      <li>• Начал заниматься проектным менеджментом</li>
                      <li>• Выиграл международный хакатон Тумарис (2 место)</li>
                      <li>• Республиканский конкурс Solve for Tomorrow (3 место)</li>
                      <li>• Международный хакатон Wise - Лучший социальный проект</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <div className="text-primary font-bold text-2xl">$30,000</div>
                  <div className="text-foreground font-semibold">привлечено инвестиций в проект</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}