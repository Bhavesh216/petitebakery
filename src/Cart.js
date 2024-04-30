import React, {useContext} from 'react'
import { ShopContext } from './components/shopcontext'
import { PRODUCTS } from './ProductsItem'
import CartItem from './components/CartItem'
import './components/cart.css'
const Cart = () => {
  const { cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className='cart-container'>
      <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart cart-product">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
    </div>
    <div className='checkout'>
        <p>Subtotal:₹{totalAmount}</p>
        <button>Continue Shopping</button>
        <button>Order Now</button>
      </div>
    </div>
  )
}

export default Cart






  
