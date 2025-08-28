import * as React from 'react';

interface NavigationMenuProps {
  onItemClick?: (item: string) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ onItemClick }) => {
  return (
    <div className="navigation-menu-container">
      <div className="navigation-menu">
        <div className="nav-item" onClick={() => onItemClick?.('Поступление')}>
          <span>Поступление</span>
        </div>
        <div className="nav-item" onClick={() => onItemClick?.('Выбор профессии')}>
          <span>Выбор профессии</span>
        </div>
        <div className="nav-item" onClick={() => onItemClick?.('Карьера')}>
          <span>Карьера</span>
        </div>
        <div className="nav-item" onClick={() => onItemClick?.('Стажировки')}>
          <span>Стажировки</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;