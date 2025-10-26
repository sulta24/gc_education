import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { BookOpen, Clock, Star, Users } from "lucide-react";

export default function CoursesPage() {
  return (
    <main>
      <LpNavbar1 />
      
      <div className="bg-secondary min-h-screen">
        <div className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Курсы
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Практические курсы для развития профессиональных навыков
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Coming Soon */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none text-center">
              <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Скоро появится!</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Мы готовим обширную библиотеку курсов по различным направлениям, которые помогут вам развить нужные навыки для успешной карьеры.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-background border rounded-lg p-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Практические навыки</h3>
                  <p className="text-muted-foreground">
                    Курсы с реальными проектами и практическими заданиями
                  </p>
                </div>
                
                <div className="bg-background border rounded-lg p-6">
                  <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Экспертные преподаватели</h3>
                  <p className="text-muted-foreground">
                    Обучение от практикующих специалистов из индустрии
                  </p>
                </div>
              </div>
            </section>

            {/* Course Categories Preview */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Планируемые направления</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-background border rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">IT и программирование</h3>
                  <p className="text-muted-foreground text-sm">
                    Веб-разработка, мобильные приложения, анализ данных
                  </p>
                </div>
                
                <div className="bg-background border rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Бизнес и маркетинг</h3>
                  <p className="text-muted-foreground text-sm">
                    Предпринимательство, цифровой маркетинг, продажи
                  </p>
                </div>
                
                <div className="bg-background border rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Дизайн и творчество</h3>
                  <p className="text-muted-foreground text-sm">
                    UX/UI дизайн, графический дизайн, видеопродакшн
                  </p>
                </div>
                
                <div className="bg-background border rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Финансы и экономика</h3>
                  <p className="text-muted-foreground text-sm">
                    Финансовая грамотность, инвестиции, экономический анализ
                  </p>
                </div>
                
                <div className="bg-background border rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Языки и коммуникации</h3>
                  <p className="text-muted-foreground text-sm">
                    Английский язык, публичные выступления, переговоры
                  </p>
                </div>
                
                <div className="bg-background border rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Личностное развитие</h3>
                  <p className="text-muted-foreground text-sm">
                    Лидерство, тайм-менеджмент, эмоциональный интеллект
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Info */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Интересует определенное направление?</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Свяжитесь с нами, чтобы узнать о планах запуска курсов
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