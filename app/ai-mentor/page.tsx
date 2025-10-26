import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { Bot, MessageCircle, Sparkles, Zap } from "lucide-react";

export default function AiMentorPage() {
  return (
    <main>
      <LpNavbar1 />
      
      <div className="bg-secondary min-h-screen">
        <div className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              ИИ-Наставник
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Умный помощник для карьерного развития, доступный 24/7
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Coming Soon */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot className="h-10 w-10 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Скоро появится!</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Мы разрабатываем интеллектуального помощника, который будет помогать вам в выборе профессии, планировании карьеры и развитии навыков.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-background border rounded-lg p-6">
                  <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Персональные консультации</h3>
                  <p className="text-muted-foreground">
                    Получайте индивидуальные рекомендации по карьерному развитию
                  </p>
                </div>
                
                <div className="bg-background border rounded-lg p-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Анализ навыков</h3>
                  <p className="text-muted-foreground">
                    ИИ поможет определить ваши сильные стороны и области для развития
                  </p>
                </div>
              </div>
            </section>

            {/* Features Preview */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Что будет доступно</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Быстрые ответы</h3>
                  <p className="text-muted-foreground text-sm">
                    Мгновенные ответы на вопросы о карьере и образовании
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Умные рекомендации</h3>
                  <p className="text-muted-foreground text-sm">
                    Персонализированные советы на основе ваших целей
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">24/7 поддержка</h3>
                  <p className="text-muted-foreground text-sm">
                    Помощь в любое время дня и ночи
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Info */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Хотите первыми узнать о запуске?</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Свяжитесь с нами, чтобы получить уведомление о запуске ИИ-наставника
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://api.whatsapp.com/send?phone=77071082424"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-400 rounded-lg text-black font-medium hover:bg-purple-500 transition-colors"
                >
                  Написать в WhatsApp
                </a>
                <a 
                  href="mailto:gceducation24@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 rounded-lg text-black font-medium hover:bg-yellow-500 transition-colors"
                >
                  Написать на Email
                </a>
              </div>
            </section>

          </div>
        </div>
      </div>
      
      <Footer1 />
    </main>
  );
}