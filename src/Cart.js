import React, { useContext } from "react";
import { ShopContext } from "./components/shopcontext";
import { PRODUCTS } from "./ProductsItem";
import CartItem from "./components/CartItem";
import "./components/cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart-container">
      {totalAmount > 0 ?(
      <div className="cart">
        <div>
          <h1 className="cartcolor">Your Cart Items</h1>
        </div>
        <div className="cart cart-product">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
      </div>
      ):(
        <div className="checkout empty-cart">
          <h2 className="shopping-cart"> Your Shopping Cart is Empty</h2>
          <img src="./images/cart-img.svg" alt="empty-cart" />
          <button className="button-cart-click" onClick={() => navigate("/products")}>
            Continue Shopping
          </button>
          </div>
      )};

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="subtotal">Subtotal:₹{totalAmount}</p>
          <button className="button-cart-click" onClick={() => navigate("/products")}>
            Continue Shopping
          </button>
          <button>Order Now</button>
        </div>
        ) : (
          <div> </div>
        )}
    </div>
  );
};

export default Cart;
