import React from 'react'
import Aside from './components/Aside'
import './components/products.css'
import ProductCard from './components/ProductCard'
import {PRODUCTS} from './ProductsItem'
import './components/products.css'
const Products = () => {
  return (
    <div className='main-pro'>
      <Aside/>
      <div className='product-menu'>
      <div className="particular-list">
      {/* <ProductCard/> */}
     
      {PRODUCTS.map((product)=>(
        <ProductCard data={product}/>
      ))}
      </div>
      
    </div>
    </div>
  )
}

export default Products
