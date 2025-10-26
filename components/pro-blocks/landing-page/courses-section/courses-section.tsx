import { ArrowRight, BookOpen, Clock, Play } from "lucide-react";
import Link from "next/link";

export function CoursesSection() {
  const courses = [
    "Как выбрать университет",
    "Подготовка к поступлению",
    "Написание мотивационного письма",
    "Поиск стипендий и грантов",
    "Адаптация в новой стране",
    "Построение карьеры"
  ];

  return (
    <section className="section-padding-y bg-white">
      <div className="container-padding-x container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
                Курсы и мини-гайды
              </h2>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-8">
                После консультации получаешь доступ к мини-курсам по твоей теме. 
                Практические материалы для самостоятельного изучения.
              </p>

              {/* Course Topics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {courses.map((course, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className={`w-8 h-8 ${index % 2 === 0 ? 'bg-purple-400' : 'bg-yellow-400'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <BookOpen className="h-4 w-4 text-black" />
                    </div>
                    <span className="text-sm font-medium text-black">{course}</span>
                  </div>
                ))}
              </div>

              <Link href="/courses">
                <button className="inline-flex items-center gap-3 px-6 py-3 bg-purple-400 rounded-lg text-black font-medium hover:bg-purple-500 transition-colors">
                  <span>Посмотреть все курсы</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>

            {/* Right Side - Course Preview */}
            <div className="lg:pl-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                {/* Course Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                    <Play className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Как выбрать университет</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>15 минут</span>
                    </div>
                  </div>
                </div>

                {/* Course Content Preview */}
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h4 className="font-medium text-black mb-2">1. Определение целей</h4>
                    <p className="text-sm text-gray-600">
                      Что ты хочешь получить от образования? Карьерные перспективы или академические интересы?
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h4 className="font-medium text-black mb-2">2. Исследование программ</h4>
                    <p className="text-sm text-gray-600">
                      Как найти программы, которые соответствуют твоим целям и интересам?
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h4 className="font-medium text-black mb-2">3. Оценка возможностей</h4>
                    <p className="text-sm text-gray-600">
                      Реалистичная оценка своих шансов на поступление и финансовых возможностей.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link href="/courses">
                    <button className="w-full py-3 bg-purple-400 rounded-lg text-black font-medium hover:bg-purple-500 transition-colors">
                      Начать курс
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