import { ArrowRight, Calendar, MessageCircle, Target, Trophy } from "lucide-react";
import Link from "next/link";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Стартовая диагностика",
      description: "Короткий тест поможет понять, где ты и чего хочешь",
      icon: Target,
      bgColor: "bg-purple-400"
    },
    {
      number: "02", 
      title: "Выбор наставника",
      description: "По цели, сфере, опыту или направлению",
      icon: MessageCircle,
      bgColor: "bg-yellow-400"
    },
    {
      number: "03",
      title: "Первая сессия (онлайн 1:1)",
      description: "С живым экспертом или ИИ-наставником",
      icon: Calendar,
      bgColor: "bg-purple-400"
    },
    {
      number: "04",
      title: "Путь продолжается",
      description: "Мини-курсы, следующий ментор, план развития",
      icon: Trophy,
      bgColor: "bg-yellow-400"
    }
  ];

  return (
    <section className="section-padding-y bg-gray-50">
      <div className="container-padding-x container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-black">
              Как это работает
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto">
              Простой путь от первого знакомства до конкретного плана действий
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Step Number */}
                    <div className={`absolute -top-4 -left-4 w-12 h-12 ${step.bgColor} rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg`}>
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                      <Icon className="h-8 w-8 text-black" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="font-semibold text-lg text-black mb-3 text-center">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 text-center leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link href="/mentors">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-purple-400 rounded-lg text-black font-medium hover:bg-purple-500 transition-colors">
                <span>Начать прямо сейчас</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}