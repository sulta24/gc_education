import * as React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const Mentors: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <>
      {/* Страница менторов с тем же фоном что и главная */}
      <section className="hero-section--sixth">
        {/* Хедер поверх картинки */}
        <Header />
        
        {/* Заголовок страницы МЕНТОРЫ */}
        <img 
          src="/images/МЕНТОРЫ.png" 
          alt="МЕНТОРЫ" 
          style={{
            position: 'absolute',
            top: '180px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '467px',
            height: '150px',
            zIndex: 10
          }}
        />
        
        {/* Поисковая строка с желтой кнопкой */}
        <div style={{
          position: 'absolute',
          top: '400px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10
        }}>
          <SearchBar value={searchValue} onChange={setSearchValue} />
        </div>
        
        {/* Навигационное меню */}
        <div style={{
          position: 'absolute',
          top: '530px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10
        }}>
          <div className="navigation-menu">
            <div className="nav-item" onClick={() => setSearchValue('Поступление')}>
              <span>Поступление</span>
            </div>
            <div className="nav-item" onClick={() => setSearchValue('Выбор профессии')}>
              <span>Выбор профессии</span>
            </div>
            <div className="nav-item" onClick={() => setSearchValue('Карьера')}>
              <span>Карьера</span>
            </div>
            <div className="nav-item" onClick={() => setSearchValue('Стажировки')}>
              <span>Стажировки</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentors;