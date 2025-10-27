import { ArrowRight, BookOpen, Briefcase, GraduationCap, TrendingUp } from "lucide-react";
import Link from "next/link";

export function MentorTypes() {
  const mentorTypes = [
    {
      icon: GraduationCap,
      title: "Профориентаторы",
      description: "Помогут понять, в чём ты силён и куда двигаться",
      bgColor: "bg-purple-400"
    },
    {
      icon: BookOpen,
      title: "Консультанты по поступлению",
      description: "Расскажут о вузах, грантах, стипендиях и подготовке",
      bgColor: "bg-yellow-400"
    },
    {
      icon: Briefcase,
      title: "Карьерные менторы",
      description: "Молодые профессионалы из Google, TikTok, медицинских стартапов, инженерии и т.д.",
      bgColor: "bg-purple-400"
    },
    {
      icon: TrendingUp,
      title: "Развивающие наставники",
      description: "Помогут прокачать навыки: публичные выступления, дизайн, код, проекты",
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
              Типы наставников
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto">
              Каждый наставник — эксперт в своей области с проверенным опытом
            </p>
          </div>

          {/* Mentor Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {mentorTypes.map((mentor, index) => {
              const Icon = mentor.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${mentor.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-semibold text-xl text-black mb-4">
                    {mentor.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {mentor.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Link href="/mentors">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-purple-400 rounded-lg text-black font-medium hover:bg-purple-500 transition-colors">
                <span>Открыть каталог наставников</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}