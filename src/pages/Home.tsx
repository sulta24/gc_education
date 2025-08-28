import * as React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import NavigationMenu from '../components/NavigationMenu';
import MentorHexCard from '../components/MentorHexCard';

const Home: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const toggleFAQ = (index: number) => {
    setActiveFAQ(prev => {
      if (prev.includes(index)) {
        return []; // Закрываем текущий FAQ если он уже открыт
      } else {
        return [index]; // Открываем только выбранный FAQ, закрывая все остальные
      }
    });
  };

  useEffect(() => {
    // Добавляем/убираем активные классы для анимации
    activeFAQ.forEach(index => {
      const arrow = document.querySelector(`.faq-item:nth-child(${index + 1}) .faq-arrow`);
      const answer = document.querySelector(`.faq-item:nth-child(${index + 1}) .faq-answer`);
      
      if (arrow) arrow.classList.add('active');
      if (answer) answer.classList.add('active');
    });
    
    // Убираем активные классы для неактивных FAQ
    for (let i = 0; i < 4; i++) {
      if (!activeFAQ.includes(i)) {
        const arrow = document.querySelector(`.faq-item:nth-child(${i + 1}) .faq-arrow`);
        const answer = document.querySelector(`.faq-item:nth-child(${i + 1}) .faq-answer`);
        
        if (arrow) arrow.classList.remove('active');
        if (answer) answer.classList.remove('active');
      }
    }
  }, [activeFAQ]);
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
          <SearchBar value={searchValue} onChange={setSearchValue} />
          <NavigationMenu onItemClick={setSearchValue} />
        </div>
      </section>

      {/* Вторая секция: продолжение фона вниз (landing2.png) */}
      <section className="hero-section hero-section--second">
        {/* Надпись "О платформе" на втором фото */}
        <div className="platform-info-container" id="about-platform">
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
        {/* Заголовок в третьей секции с тем же стилем, что и "О платформе" */}
        <div className="platform-info-container">
          <span className="platform-info-text">Мы можем помочь</span>
          <p className="platform-description">
            Сомневаешься, куда поступать или кем работать?<br />
            Мы рядом, чтобы подсказать.
          </p>
        </div>

        {/* Три бокса как в секции 2, но с заданными размерами/цветом */}
        <div className="third-three-blocks-container">
          <div className="third-info-block">
            <img
              src="/images/woman_3.png"
              alt="Woman"
              className="third-block-image third-image-woman"
            />
            <p className="block-description">Не знаешь, какую профессию освоить?</p>
          </div>
          <div className="third-info-block">
            <img
              src="/images/woman_3.png"
              alt="Woman"
              className="third-block-image third-image-woman third-image-left"
            />
            <img
              src="/images/man_3.png"
              alt="Man"
              className="third-block-image third-image-man third-image-right"
            />
            <p className="block-description">Сложно выбрать вуз или страну для поступления?</p>
          </div>
          <div className="third-info-block">
            <img
              src="/images/man_3.png"
              alt="Man"
              className="third-block-image third-image-man"
            />
            <p className="block-description">Никто не объяснил, как работает рынок профессий?</p>
          </div>
        </div>
      </section>

      {/* Четвертая секция: пустой промежуток 1000px */}
      <section className="fourth-section">
        <div className="platform-info-container">
          <span className="platform-info-text">Наши менторы</span>
        </div>

        <div className="mentors-hex-container">
          <MentorHexCard />
          <MentorHexCard />
          <MentorHexCard />
        </div>

        {/* Кнопки под карточками менторов */}
        <div className="two-blocks-container">
          <div className="additional-block hexagon-block hexagon-yellow">
            <span className="hexagon-text">Найти профессию</span>
          </div>
          <div className="additional-block hexagon-block hexagon-purple">
            <span className="hexagon-text">Стать ментором</span>
          </div>
        </div>
      </section>

      {/* Пятая секция с изображением landing5.png */}
      <section className="hero-section hero-section--fifth">
        <div className="fifth-section-images">
          <div className="fifth-image-container">
            <img src="/images/5 ЛЕТ.png" alt="5 ЛЕТ" className="fifth-image fifth-image-1" />
            <p className="fifth-section-text">Уверенно лидируем на рынке</p>
          </div>
          <div className="fifth-image-container">
            <img src="/images/150+.png" alt="150+" className="fifth-image fifth-image-2" />
            <p className="fifth-section-text">Профессионалов
своего дела</p>
          </div>
          <div className="fifth-image-container">
            <img src="/images/450+.png" alt="450+" className="fifth-image fifth-image-3" />
            <p className="fifth-section-text">Довольных пользователей</p>
          </div>
        </div>
      </section>

      {/* Шестая секция - Наши партнеры */}
        <section className="hero-section hero-section--sixth">
          <h2 className="sixth-section-title">Наши партнеры</h2>
          <h2 className="sixth-section-subtitle">Вопросы и ответы</h2>
          
          {/* FAQ Container */}
          <div className="faq-container">
            {/* FAQ Item 1 */}
            <div className="faq-item">
              <div className="faq-vector"></div>
              <div className="faq-question" onClick={() => toggleFAQ(0)}>
                Что спросить у ментора?
                <div className="faq-arrow"></div>
              </div>
              <div className="faq-answer">
                Здесь будет ответ на вопрос о том, что можно спросить у ментора.
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="faq-item">
              <div className="faq-vector"></div>
              <div className="faq-question" onClick={() => toggleFAQ(1)}>
                Куда обращаться по вопросам и проблемам?
                <div className="faq-arrow"></div>
              </div>
              <div className="faq-answer">
                Здесь будет ответ о том, куда обращаться по вопросам и проблемам.
              </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="faq-item">
              <div className="faq-vector"></div>
              <div className="faq-question" onClick={() => toggleFAQ(2)}>
                Что если опоздать на встречу?
                <div className="faq-arrow"></div>
              </div>
              <div className="faq-answer">
                Здесь будет ответ о том, что делать если опоздать на встречу.
              </div>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="faq-item">
              <div className="faq-vector"></div>
              <div className="faq-question" onClick={() => toggleFAQ(3)}>
                Можно ли перенести сессию?
                <div className="faq-arrow"></div>
              </div>
              <div className="faq-answer">
                Здесь будет ответ о возможности переноса сессии.
              </div>
            </div>
            
            <div className="faq-vector"></div>
          </div>
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