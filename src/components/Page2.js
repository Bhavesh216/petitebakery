import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
const Page2 = () => {
  return (
    <div>
      <div className="page2">
      <div className="about-us">
        <img src="images/aboutsec1.jpg" alt="1stimage" />
        <div className="about-us-in">
          <h4>DISCOVER PETITE PALATE</h4>
          <h3>The taste you need, for your pleasure.</h3>
          <p>
            At Petite Palate, we're more than just a bakery—we're creators of
            sweet moments.From classic favorites to innovative creations, each
            bite is crafted with passion and precision. Join us in the
            enchanting world of Petite Palate, where we invite you to
            experience the magic of our sweet creations. Thank you for being a
            part of our delicious story.
          </p>
          <NavLink to="/about">
            <button className="know-more">
              Know More
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            </NavLink>
        </div>
        <img src="images/aboutsec2.jpg" alt="2ndimage" />
      </div>
    </div>
    </div>
  )
}

export default Page2
