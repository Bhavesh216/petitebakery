import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
const Footer = () => {
  return (
    <div>
      <footer>
      <div className="footer">
      <h2>petite palate</h2>
      <div className="socials">
        <span>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </span>
        <span>
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
        </span>
        <span>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
        </span>
        <span>
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        </span>
      </div>
      <p className="info">
        Savor handcrafted delights at Petite Palate, where sweet dreams flourish.
      </p>
        <div className="footer-nav">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">WHO WE ARE</NavLink>
          <NavLink to="/products">PRODUCTS</NavLink>
        </div>
        <div className="footer-bar">
          Copyright © 2024 Petite Palate. All rights reserved
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
