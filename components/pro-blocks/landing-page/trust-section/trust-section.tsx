import { Award, Clock, Shield, Users } from "lucide-react";

export function TrustSection() {
  const trustFactors = [
    {
      icon: Users,
      title: "500+ довольных студентов",
      description: "Помогли поступить в топовые университеты мира",
      bgColor: "bg-purple-400"
    },
    {
      icon: Award,
      title: "Проверенные наставники",
      description: "Все эксперты прошли строгий отбор и имеют опыт",
      bgColor: "bg-yellow-400"
    },
    {
      icon: Shield,
      title: "Гарантия результата",
      description: "Возврат средств, если не поможем достичь цели",
      bgColor: "bg-purple-400"
    },
    {
      icon: Clock,
      title: "Поддержка 24/7",
      description: "Всегда на связи для решения любых вопросов",
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
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${factor.bgColor} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                      <Icon className="h-8 w-8 text-black" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-semibold text-lg text-black mb-3">
                      {factor.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-3xl font-bold text-black mb-2">95%</div>
                <p className="text-gray-600">Успешных поступлений</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-black mb-2">50+</div>
                <p className="text-gray-600">Стран для обучения</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-black mb-2">24/7</div>
                <p className="text-gray-600">Поддержка студентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}