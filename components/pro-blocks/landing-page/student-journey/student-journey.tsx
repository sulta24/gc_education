import { ArrowRight, BookOpen, Calendar, CheckCircle, MessageCircle, Target, Trophy } from "lucide-react";
import Link from "next/link";

export function StudentJourney() {
  const journeySteps = [
    {
      icon: Target,
      title: "Определение целей",
      description: "Понимаем, чего ты хочешь достичь",
      bgColor: "bg-purple-400"
    },
    {
      icon: MessageCircle,
      title: "Консультация с наставником",
      description: "Получаешь персональные рекомендации",
      bgColor: "bg-yellow-400"
    },
    {
      icon: BookOpen,
      title: "Изучение материалов",
      description: "Проходишь курсы и изучаешь гайды",
      bgColor: "bg-purple-400"
    },
    {
      icon: Calendar,
      title: "Планирование действий",
      description: "Составляем конкретный план шагов",
      bgColor: "bg-yellow-400"
    },
    {
      icon: CheckCircle,
      title: "Выполнение плана",
      description: "Реализуешь план с поддержкой наставника",
      bgColor: "bg-purple-400"
    },
    {
      icon: Trophy,
      title: "Достижение цели",
      description: "Поступаешь в вуз или находишь работу мечты",
      bgColor: "bg-yellow-400"
    }
  ];

  return (
    <section className="section-padding-y bg-white">
      <div className="container-padding-x container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-black">
              Путь ученика: цикл развития
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto">
              Пошаговый процесс от первой консультации до достижения цели
            </p>
          </div>

          {/* Journey Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connection Arrow */}
                  {index < journeySteps.length - 1 && index % 3 !== 2 && (
                    <div className="hidden lg:block absolute top-16 -right-4 z-10">
                      <ArrowRight className="h-6 w-6 text-gray-300" />
                    </div>
                  )}
                  
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 text-center">
                    {/* Step Number */}
                    <div className={`w-8 h-8 ${step.bgColor} rounded-full flex items-center justify-center text-black font-bold text-sm mx-auto mb-4`}>
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className="h-8 w-8 text-black" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-semibold text-lg text-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Link href="/diagnostics">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-purple-400 rounded-lg text-black font-medium hover:bg-purple-500 transition-colors">
                <span>Начать свой путь</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}