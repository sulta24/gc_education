import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { Calendar, Clock, Target, Users } from "lucide-react";

export default function DiagnosticsPage() {
  return (
    <main>
      <LpNavbar1 />
      
      <div className="bg-secondary min-h-screen">
        <div className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Диагностика
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Профессиональная диагностика для определения ваших склонностей и способностей
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Coming Soon */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none text-center">
              <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Скоро появится!</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Мы работаем над созданием комплексной системы диагностики, которая поможет вам лучше понять свои интересы, способности и склонности.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-background border rounded-lg p-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Профориентационное тестирование</h3>
                  <p className="text-muted-foreground">
                    Определение подходящих профессий на основе ваших интересов и способностей
                  </p>
                </div>
                
                <div className="bg-background border rounded-lg p-6">
                  <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Анализ личности</h3>
                  <p className="text-muted-foreground">
                    Глубокий анализ ваших личностных качеств и предпочтений
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Info */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Хотите узнать больше?</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Свяжитесь с нами, чтобы получить информацию о запуске диагностики
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