import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
const Page1 = () => {
  return (
    <div>
      <div className="page1">
      <video src="bakery.mp4" autoPlay muted loop />
      <h2>Petite Palate</h2>
      <h1>HANDMADE, WITH A PINCH OF LOVE</h1>
      <p>crafting sweet indulgence, one bite at a time</p>
      <NavLink to="/products"> <button className="order">Order Treats</button></NavLink>
    </div>
    </div>
  )
}

export default Page1
