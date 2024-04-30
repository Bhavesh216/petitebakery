import React from 'react'
import './style.css'
import { NavLink } from "react-router-dom";
const Page3 = () => {
  return (
    <div>
       <div className="page3">
      <div className="page3-content">
        <h2 className="p3">Sweet Delights</h2>
        <NavLink to="/products">
          <button className="explore">
            Explore
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          </NavLink>
      </div>

      <div className="product-container-home">
        <div className="product">
          <img src="images/cakes.jpg" alt="cake" />
          <h4>Cakes</h4>
        </div>
        <div className="product">
          <img src="images/cupcakes.jpg" alt="cake" />
          <h4>Cupcakes</h4>
        </div>
        <div className="product">
          <img src="images/cookies.jpg" alt="cake" />
          <h4>cookies</h4>
        </div>
        <div className="product">
          <img src="images/donuts.jpg" alt="cake" />
          <h4>donuts</h4>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Page3
