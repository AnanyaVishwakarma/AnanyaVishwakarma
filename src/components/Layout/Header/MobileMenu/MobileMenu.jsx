import React from "react";
import './MobileMenu.css';

const MobileMenu = ({ isOpen, navItems, activeSection, onNavClick}) =>{
    return(
        <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
            <nav className="mobile-menu__nav">
                <ul className="mobile-menu__list">
                    {navItems.map((item) => (
                        <li key={item.id} className="mobile-menu__item">
                            <button 
                            className={`mobile-menu__link ${
                                activeSection === item.id ? 'mobile-menu__link--active' : ''
                            }`}
                            onClick={() => onNavClick(item.id)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default MobileMenu;