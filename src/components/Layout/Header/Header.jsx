import React, { useEffect, useState } from "react";
import NavItem from "./NavItem/NavItem";
import MobileMenu from './MobileMenu/MobileMenu';

import { useScrollTo } from "../../../Hooks/useScrollTo";
import "./Header.css";

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTo = useScrollTo();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollTo(sectionId);
    setIsMenuOpen(false);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header__container container">
        <div className="header__brand">
          <span className="header__logo gradient-text">Portfolio</span>
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                {...item}
                isActive={activeSection === item.id}
                onClick={() => handleNavClick(item.id)}
              />
            ))}
          </ul>
        </nav>

        <button
          className="header__mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className={`hamburger ${isMenuOpen ? "hamburger--active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <MobileMenu
          isOpen={isMenuOpen}
          navItems={navItems}
          activeSection={activeSection}
          onNavClick={handleNavClick}
        />
      </div>
    </header>
  );
};

export default Header;
