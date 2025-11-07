import React from 'react';
import './NavItem.css';

const NavItem = ({ id, label, isActive, onClick }) => {
  return (
    <li className="nav-item">
      <button 
        className={`nav-item__link ${isActive ? 'nav-item__link--active' : ''}`}
        onClick={onClick}
        aria-current={isActive ? 'page' : undefined}
      >
        {label}
      </button>
    </li>
  );
};

export default NavItem;