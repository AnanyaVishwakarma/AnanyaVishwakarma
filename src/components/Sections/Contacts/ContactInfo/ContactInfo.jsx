import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { PERSONAL_INFO } from '../../../../utils/constants.js';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info animate-fade-in-up">
      <div className="contact-info__list">
        {Array.isArray(PERSONAL_INFO) && PERSONAL_INFO.map((item, index) => (
          <ContactItem
            key={index}
            icon={item.icon}
            label={item.label}
            value={item.value}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
