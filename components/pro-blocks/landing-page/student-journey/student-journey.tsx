import { ArrowRight, BookOpen, Calendar, CheckCircle, MessageCircle, Target, Trophy } from "lucide-react";
import Link from "next/link";

export function StudentJourney() {
  const journeySteps = [
    {
      icon: Target,
      title: "Начни с диагностики",
      description: "Пройди короткий тест для понимания своих целей",
      bgColor: "bg-purple-400"
    },
    {
      icon: MessageCircle,
      title: "Получи консультацию с ИИ или наставником",
      description: "Выбери формат общения, который тебе подходит",
      bgColor: "bg-yellow-400"
    },
    {
      icon: BookOpen,
      title: "Пройди курс",
      description: "Изучи материалы по своему направлению",
      bgColor: "bg-purple-400"
    },
    {
      icon: Calendar,
      title: "Обратись к следующему ментору",
      description: "По навыкам или вузу для углубления знаний",
      bgColor: "bg-yellow-400"
    },
    {
      icon: CheckCircle,
      title: "Подготовься к поступлению",
      description: "Реализуй план поступления с поддержкой",
      bgColor: "bg-purple-400"
    },
    {
      icon: Trophy,
      title: "Возвращайся — как ментор следующему поколению",
      description: "Поделись своим опытом с другими учениками",
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
                  
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col">
                    {/* Step Number */}
                    <div className={`w-8 h-8 ${step.bgColor} rounded-full flex items-center justify-center text-black font-bold text-sm mx-auto mb-4`}>
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className="h-8 w-8 text-black" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="font-semibold text-lg text-black mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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