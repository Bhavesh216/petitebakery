import React from 'react';
import { NavLink } from 'react-router-dom';
import './products.css'
function Aside() {
  return (
    <div className="aside" id="aside">
      <h2 className="aside-h2">Petite Palate</h2>
      <NavLink to="#Donuts">Donuts</NavLink>
      <NavLink to="#cakes">Cakes</NavLink>
      <NavLink to="#Cupcakes">Cupcakes</NavLink>
      <NavLink to="#Croissants">Croissants</NavLink>
      <NavLink to="#Brownies">Brownies</NavLink>
      <NavLink to="#Cheesecakes">Cheesecakes</NavLink>
      <NavLink to="#Cookies">Cookies</NavLink>
      <NavLink to="#Tarts">Tarts</NavLink>
      <NavLink to="#Macrons">Macrons</NavLink>
    </div>
  );
}

export default Aside;

