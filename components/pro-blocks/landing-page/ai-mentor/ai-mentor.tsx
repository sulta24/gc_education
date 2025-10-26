import { ArrowRight, Bot, Calendar, Clock, MessageCircle, Star, Video } from "lucide-react";
import Link from "next/link";

export function AiMentor() {
  const features = [
    {
      icon: Star,
      title: "Подбор университета и страны",
      description: "Анализ твоих интересов и возможностей"
    },
    {
      icon: MessageCircle,
      title: "Рекомендации по карьере",
      description: "Персональные советы от экспертов"
    },
    {
      icon: Clock,
      title: "Поддержка 24/7",
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
                  <h3 className="font-semibold text-black">Формат: видеоконсультация</h3>
                  <p className="text-sm text-gray-600">Живое общение с экспертом</p>
                </div>
              </div>

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

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ai-mentor">
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-400 rounded-lg text-black font-medium hover:bg-purple-500 transition-colors">
                    <span>Попробовать ИИ</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <Link href="/mentors">
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 rounded-lg text-black font-medium hover:bg-yellow-500 transition-colors">
                    <Calendar className="h-4 w-4" />
                    <span>Записаться на консультацию</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side - Chat Mockup */}
            <div className="lg:pl-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-medium text-black">ИИ-Наставник</h4>
                    <p className="text-sm text-gray-600">Онлайн</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <p className="text-sm text-gray-700">
                      Привет! Я помогу тебе выбрать университет и построить карьерный план. 
                      Расскажи о своих интересах?
                    </p>
                  </div>
                  
                  <div className="bg-purple-100 p-4 rounded-lg ml-8">
                    <p className="text-sm text-gray-700">
                      Интересуюсь программированием и хочу учиться в Европе
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <p className="text-sm text-gray-700">
                      Отлично! Рекомендую рассмотреть технические университеты Германии и Нидерландов. 
                      Запишемся на консультацию для детального разбора?
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link href="/ai-mentor">
                    <button className="w-full py-3 bg-yellow-400 rounded-lg text-black font-medium hover:bg-yellow-500 transition-colors">
                      Начать диалог
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