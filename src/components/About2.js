import React from 'react'
import './about.css'
const About2 = () => {
  return (
    <div>
      <div className="about2">
        <div className="icon">
          <img src="images/i2.png" alt="i1" />
          <div className="icon-text">
            <h2>Nutrition rich</h2>
            <p>Nutrition-rich delights,crafted to nourish your taste buds.</p>
          </div>
        </div>
        <div className="icon">
          <img src="images/i1.png" alt="i2" />
          <div className="icon-text">
            <h2>Gift cards</h2>
            <p>Assured gift cards await - secure your surprise today! </p>
          </div>
        </div>
        <div className="icon">
          <img src="images/i4.png" alt="i3" />
          <div className="icon-text">
            <h2>100% baked</h2>
            <p>Savouring 100% baked items from our oven to your plate</p>
          </div>
        </div>
        <div className="icon bordernone">
          <img id="i4" src="images/i3.png" alt="i4" />
          <div className="icon-text">
            <h2>Secure packing</h2>
            <p>Enjoy peace of mind with our secure packing </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About2
