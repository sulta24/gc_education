import { ArrowRight, Bot, Calendar, Clock, MessageCircle, Star, Video } from "lucide-react";
import Link from "next/link";

export function AiMentor() {
  const features = [
    {
      icon: Star,
      title: "Подбор вузов и стран для поступления",
      description: "Анализ твоих интересов и возможностей"
    },
    {
      icon: MessageCircle,
      title: "Рекомендации по профессиям, навыкам и карьерным трекам",
      description: "Персональные советы от экспертов"
    },
    {
      icon: Clock,
      title: "Поддержка в любое время 24/7",
      description: "Ответы на вопросы в любое время"
    }
  ];

  return (
    <section className="section-padding-y bg-white">
      <div className="container-padding-x container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Bot className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">AI-Технологии</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
                Что умеет ИИ-наставник?
              </h2>

              {/* Format */}
              <div className="flex items-center gap-3 mb-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Video className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Формат: видео-консультация</h3>
                  <p className="text-sm text-gray-600">Как будто вы на Zoom</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6">
                Мы обучили ИИ на сессиях лучших менторов, карьерных консультантов и выпускников топ-вузов.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className={`w-10 h-10 ${index % 2 === 0 ? 'bg-purple-400' : 'bg-yellow-400'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h4 className="font-medium text-black mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Text */}
              <p className="text-sm text-gray-600 mt-6 italic">
                💡 Начни с ИИ, продолжи с живым наставником — или наоборот. Ты выбираешь.
              </p>
            </div>

            {/* Right Side - AI Mentor Image */}
            <div className="lg:pl-8 flex flex-col justify-center">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                {/* Text above image - more compact */}
                <div className="text-center mb-3">
                  <h4 className="font-semibold text-base text-black mb-1">
                    Твой персональный ИИ-наставник
                  </h4>
                  <p className="text-xs text-gray-600">
                    Доступен 24/7 для консультаций
                  </p>
                </div>
                
                {/* Image - optimized for wide format */}
                <div className="mb-3">
                  <img 
                    src="/AI mentor.png" 
                    alt="ИИ-Наставник" 
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                
                {/* Button below image - more compact */}
                <div className="text-center">
                  <Link href="/ai-mentor">
                    <button className="w-full py-2.5 bg-purple-400 rounded-lg text-black text-sm font-medium hover:bg-purple-500 transition-colors">
                      Попробовать ИИ-наставника
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}