import { ArrowRight, Bot, Calendar, Search } from "lucide-react";
import Link from "next/link";

export function FinalCta() {
  return (
    <section className="section-padding-y bg-black text-white">
      <div className="container-padding-x container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Message */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Твоё будущее начинается с правильного выбора
          </h2>
          
          {/* Supporting Message */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Не теряй время на сомнения. Получи персональную консультацию и узнай, 
            как достичь своих целей в образовании и карьере уже сегодня.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/mentors">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-purple-400 rounded-lg text-black font-semibold hover:bg-purple-500 transition-colors text-lg">
                <Search className="h-5 w-5" />
                <span>Найти наставника</span>
              </button>
            </Link>
            
            <Link href="/diagnostics">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 rounded-lg text-black font-semibold hover:bg-yellow-500 transition-colors text-lg">
                <Calendar className="h-5 w-5" />
                <span>Пройти диагностику</span>
              </button>
            </Link>
            
            <Link href="/ai-mentor">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-300 rounded-lg text-black font-semibold hover:bg-gray-50 transition-colors text-lg">
                <Bot className="h-5 w-5" />
                <span>Попробовать ИИ</span>
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-2">4.9/5</div>
              <p className="text-gray-400">Средняя оценка</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">500+</div>
              <p className="text-gray-400">Довольных студентов</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">95%</div>
              <p className="text-gray-400">Успешных поступлений</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}