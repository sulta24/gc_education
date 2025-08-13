import * as React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        <span className="header-item header-item--left">О платформе</span>
        <span className="header-item header-item--left">Менторы</span>
        
        <div className="header-logo">
          <img src="/images/logo.png" alt="GC EDUCATION" />
        </div>
        
        <span className="header-item header-item--right">Отзывы</span>
        <span className="header-item header-item--right">FAQ</span>
      </div>
    </header>
  );
};

export default Header; 