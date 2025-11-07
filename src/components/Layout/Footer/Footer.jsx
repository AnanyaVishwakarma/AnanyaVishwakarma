import React from "react";
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__content">
                    <p className="footer__text">
                        &copy; {currentYear} Ananya Vishwakarma. Built with React & CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;