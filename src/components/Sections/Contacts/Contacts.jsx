import React from 'react';
import SectionTitle from '../../Common/SectionTitle/SectionTitle';
import ContactInfo from './ContactInfo/ContactInfo';
import SocialLinks from './SocialLinks/SocialLinks';
import './Contacts.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="contact__container container">
        <SectionTitle level={2}>Get In Touch</SectionTitle>
        
        <div className="contact__content">
          <p className="contact__description">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
          
          <ContactInfo />
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Contact;