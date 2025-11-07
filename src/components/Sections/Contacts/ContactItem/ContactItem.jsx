import React from 'react';
import './ContactItem.css';

export default function ContactItem({ label, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-item"
    >
      <span className="contact-item__label">{label}:</span>
      <span className="contact-item__value">{value}</span>
    </a>
  );
}
