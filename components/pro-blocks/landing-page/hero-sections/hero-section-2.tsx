"use client";

import { ArrowRight, Brain, Check, Target, Users } from "lucide-react";
import Link from "next/link";

export function HeroSection2() {
  return (
    <section className="section-padding-y relative overflow-hidden">
      <div className="container-padding-x container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            {/* Content */}
            <div className="text-center">
              {/* Tagline */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 mb-6">
                <span className="text-sm font-medium text-gray-600">Карьерная навигация</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-black">
                Ты не обязан выбирать<br />
                Будущее в одиночку
              </h1>
              
              {/* Platform Description */}
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Наставники и ИИ помогут выбрать профессию, поступить и развить нужные навыки.
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                  <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                    <Users className="h-3 w-3 text-black" />
                  </div>
                  <span className="text-sm font-medium text-black">Профориентаторы</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Target className="h-3 w-3 text-black" />
                  </div>
                  <span className="text-sm font-medium text-black">Консультанты по поступлению</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                  <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-black" />
                  </div>
                  <span className="text-sm font-medium text-black">Наставники из реальных профессий</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Brain className="h-3 w-3 text-black" />
                  </div>
                  <span className="text-sm font-medium text-black">Умный ИИ-наставник 24/7</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
              <Link href="/mentors">
                <button className="w-full sm:w-auto px-8 py-4 bg-purple-400 text-black font-semibold rounded-lg hover:bg-purple-500 transition-colors flex items-center justify-center gap-2">
                  <span>Найти наставника</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
              <Link href="/ai-mentor">
                <button className="w-full sm:w-auto px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
                  Попробовать ИИ-наставника
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
