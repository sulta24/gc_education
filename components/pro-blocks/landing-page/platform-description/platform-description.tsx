import { Compass, Heart, Lightbulb } from "lucide-react";

export function PlatformDescription() {
  return (
    <section className="section-padding-y">
      <div className="container-padding-x container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
            Что это за платформа?
          </h2>
          
          {/* Main Description */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Мы — экосистема карьерной навигации для подростков. Здесь ты найдёшь своего наставника на любом этапе:
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-semibold text-black mb-3 text-lg">
                Когда не знаешь, кем хочешь стать
              </h3>
              <p className="text-sm text-gray-600">
                Профориентация и поиск своего пути
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Lightbulb className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-semibold text-black mb-3 text-lg">
                Когда готовишься к поступлению в вуз
              </h3>
              <p className="text-sm text-gray-600">
                Консультации по выбору университета и подготовке
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Compass className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-semibold text-black mb-3 text-lg">
                Когда хочешь развить реальные навыки
              </h3>
              <p className="text-sm text-gray-600">
                От IT до креативных индустрий
              </p>
            </div>
          </div>

          {/* Bottom Text */}
          <p className="text-xl font-semibold text-black">
            Один путь — десятки решений. И человек рядом на каждом шаге.
          </p>
        </div>
      </div>
    </section>
  );
}