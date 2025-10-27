import { Award, CheckCircle, Shield, Users } from "lucide-react";

export function TrustSection() {
  const trustFactors = [
    {
      icon: Users,
      title: "Мы работаем только с проверенными менторами",
      description: "Строгий отбор и проверка квалификации каждого наставника",
      bgColor: "bg-purple-400"
    },
    {
      icon: CheckCircle,
      title: "Все наставники проходят отбор и обучение",
      description: "Специальная программа подготовки для работы с учениками",
      bgColor: "bg-yellow-400"
    },
    {
      icon: Award,
      title: "Есть бесплатная демо-встреча или чат",
      description: "Попробуй перед тем, как принять решение о сотрудничестве",
      bgColor: "bg-purple-400"
    },
    {
      icon: Shield,
      title: "Разработано экспертами из сферы образования, карьеры и EdTech",
      description: "Профессиональная команда с многолетним опытом в образовании",
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
              Почему нам доверяют
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto">
              Мы создали платформу, которой можно доверить свое будущее
            </p>
          </div>

          {/* Trust Factors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${factor.bgColor} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                      <Icon className="h-8 w-8 text-black" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="font-semibold text-lg text-black mb-3">
                        {factor.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}