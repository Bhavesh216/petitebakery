import React from 'react';
import ContactBox from './ContactBox';
import './ContactUs.css';
import './style.css';

const ContactInfo = () => {
  return (
    <div className="box-container">
      {/* WhatsApp */}
      <ContactBox icon="fa-brands fa-whatsapp" title="WhatsApp" text="082-596-487-265" />
      {/* Call */}
      <ContactBox icon="fa-solid fa-phone" title="Call" text="0172-3498911" />
      {/* Email */}
      <ContactBox icon="fa-solid fa-envelope" title="Email" text="support@petitepalate.com" />
      {/* Location */}
      <ContactBox icon="fa-solid fa-location-dot" title="Location" text="2443" />
    </div>
  );
};

export default ContactInfo;
