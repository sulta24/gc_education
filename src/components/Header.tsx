import * as React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutPlatformClick = () => {
    if (location.pathname === '/') {
      // Если мы на главной странице, просто прокручиваем к секции
      const element = document.getElementById('about-platform');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Если мы на другой странице, переходим на главную и затем прокручиваем
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('about-platform');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header>
      <div className="header-container">
        <button className="header-item header-item--left" onClick={handleAboutPlatformClick}>О платформе</button>
        <Link to="/mentors" className="header-item header-item--left">Менторы</Link>
        
        <Link to="/" className="header-logo">
          <img src="/images/logo.png" alt="GC EDUCATION" />
        </Link>
        
        <span className="header-item header-item--right">Отзывы</span>
        <span className="header-item header-item--right">FAQ</span>
      </div>
    </header>
  );
};

export default Header;