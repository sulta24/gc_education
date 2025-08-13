import * as React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import NavigationMenu from '../components/NavigationMenu';

const Home: React.FC = () => {
  return (
    <>
      {/* Первая секция: фон landing.png и все оверлеи */}
      <section className="hero-section">
        {/* Хедер поверх картинки */}
        <Header />
        
        {/* Картинка с мотивирующим текстом по центру */}
        <div className="motivational-text-container">
          <img
            src="/images/landing_text.png"
            alt="ТЫ НЕ ОБЯЗАН ВЫБИРАТЬ БУДУЩЕЕ В ОДИНОЧКУ"
            className="motivational-text-image"
          />
        </div>

        {/* Поисковая строка */}
        <div className="hero-overlay">
          <SearchBar />
          <NavigationMenu />
        </div>
      </section>

      {/* Вторая секция: продолжение фона вниз (landing2.png) */}
      <section className="hero-section hero-section--second">
        {/* Надпись "О платформе" на втором фото */}
        <div className="platform-info-container">
          <span className="platform-info-text">О платформе</span>
          <p className="platform-description">
            Выбирайте профессию и получайте персональные советы от менторов по
            карьерному развитию, составлению резюме, портфолио, и поступлению в
            зарубежные университеты
          </p>
        </div>

        {/* Три блока в ряд */}
        <div className="three-blocks-container">
          <div className="info-block">
            <img src="/images/block1.png" alt="Block 1" className="block-image block-image-1" />
            <p className="block-description">
              Выберите ментора под ваш запрос, интересы или предпочтения
            </p>
          </div>
          <div className="info-block">
            <img src="/images/block2.png" alt="Block 2" className="block-image block-image-2" />
            <p className="block-description">
              Забронируйте сессию, выбрав доступный слот на странице ментора.
            </p>
          </div>
          <div className="info-block">
            <img src="/images/block3.png" alt="Block 3" className="block-image block-image-3" />
            <p className="block-description">
              Получите ссылку на почту, и подключитесь в указанное время
            </p>
          </div>
        </div>

        {/* Два дополнительных блока по центру */}
        <div className="two-blocks-container">
          <div className="additional-block hexagon-block hexagon-yellow">
            <span className="hexagon-text">Пройти анкету</span>
          </div>
          <div className="additional-block hexagon-block hexagon-purple">
            <span className="hexagon-text">Стать ментором</span>
          </div>
        </div>
      </section>

      {/* Третья секция: продолжение фона (landing3.png) */}
      <section className="hero-section hero-section--third">
        {/* Здесь будет контент для третьей секции */}
      </section>

      {/* Футер */}
      <footer className="main-footer">
        <div className="footer-content">
          {/* Логотип на футере */}
          <img 
            src="/images/logo.png" 
            alt="GC EDUCATION Logo" 
            className="footer-logo"
          />
        </div>
      </footer>
    </>
  );
};

export default Home; 