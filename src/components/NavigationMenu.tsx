import * as React from 'react';

const NavigationMenu: React.FC = () => {
  return (
    <div className="navigation-menu-container">
      <div className="navigation-menu">
        <div className="nav-item">
          <span>Поступление</span>
        </div>
        <div className="nav-item">
          <span>Выбор профессии</span>
        </div>
        <div className="nav-item">
          <span>Карьера</span>
        </div>
        <div className="nav-item">
          <span>Стажировки</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu; 