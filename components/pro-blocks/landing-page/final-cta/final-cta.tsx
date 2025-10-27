import { ArrowRight, Bot, Calendar, Search } from "lucide-react";
import Link from "next/link";

export function FinalCta() {
  return (
    <section className="section-padding-y bg-black text-white">
      <div className="container-padding-x container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Message */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Хочешь понять, кем стать, куда поступать и какие навыки тебе нужны?
          </h2>
          
          {/* Supporting Message */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Не ищи в одиночку. Поговори с теми, кто уже прошёл этот путь.
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
        </div>
      </div>
    </section>
  );
}