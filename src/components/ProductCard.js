import React, { useContext } from "react";
import "./products.css";
import { ShopContext } from "./shopcontext";
const ProductCard = (props) => {
  const { id, productName, productDesc, price, productImage } = props.data;

  const{addToCart,cartItems}=useContext(ShopContext);
  const cartItemAmount = cartItems[id]
  return (
    <div className="product-container">
      <img className="product-img" src={productImage} alt="img" />
      <div className="product-info">
        <h3>{productName}</h3>
        <h4>₹{price}</h4>
        <h6>{productDesc}</h6>
      </div>
      <div className="Cartbtn">
        <button id="Add-Cart" onClick={()=>addToCart(id)}>
          Add to Cart {cartItemAmount>0 &&<>({cartItemAmount})</>}
          <img className="cart-icon" src="cart.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
