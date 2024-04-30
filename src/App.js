import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import About from './About'
import HeaderP from './components/HeaderP'
import Products from './Products'
import ContactUs from './ContactUs'
import Login from './Login'
import Cart from './Cart'
import { ShopContextProvider } from './components/shopcontext'

const App = () => {
  return (
    <div>
      <ShopContextProvider>
      <Router>
        <HeaderP/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider> 
    </div>
  )
}

export default App
