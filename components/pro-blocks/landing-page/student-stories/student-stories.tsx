import { Quote, Star } from "lucide-react";

export function StudentStories() {
  const stories = [
    {
      name: "Анна Петрова",
      story: "Благодаря наставнику поступила в Технический университет Мюнхена. Получила четкий план подготовки и поддержку на каждом этапе.",
      university: "TUM, Германия",
      program: "Информатика"
    },
    {
      name: "Максим Иванов", 
      story: "Наставник помог определиться с направлением и найти стипендию. Сейчас учусь в Амстердаме и очень доволен выбором.",
      university: "UvA, Нидерланды",
      program: "Бизнес-аналитика"
    }
  ];

  return (
    <section className="section-padding-y bg-gray-50">
      <div className="container-padding-x container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-black">
              Истории учеников
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto">
              Реальные результаты наших студентов
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                {/* Quote Icon */}
                <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-purple-400' : 'bg-yellow-400'} rounded-xl flex items-center justify-center mb-6`}>
                  <Quote className="h-6 w-6 text-black" />
                </div>

                {/* Story Text */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{story.story}"
                </blockquote>

                {/* Student Info */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-black">{story.name}</h4>
                      <p className="text-sm text-gray-600">{story.university}</p>
                      <p className="text-sm text-gray-500">{story.program}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-12">
            <p className="text-lg text-black font-medium">
              Более 500 студентов уже достигли своих целей с нашей помощью
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}