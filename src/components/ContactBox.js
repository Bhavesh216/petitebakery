import React from 'react';
import './ContactUs.css';
import './style.css';

const ContactBox = ({ icon, title, text }) => {
  return (
    <div className="box">
      <i className={icon}></i>
      <p>{title}</p>
      <p className="text">{text}</p>
    </div>
  );
};

export default ContactBox;
