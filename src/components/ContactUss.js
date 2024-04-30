import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './ContactUs.css';

const ContactUss = () => {
  return (
    <main>
      <img className="contact" src="images/contact.png" />

      <div className="container-contact">
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactUss;
