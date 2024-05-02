import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../ProductsItem'; 


export const ShopContext = createContext(null);


const getDefaultItems = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0; 
  }
  return cart;
};


export const ShopContextProvider = (props) => {
  
  const [cartItems, setCartItems] = useState(getDefaultItems());

  
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };


  const removeFromCart = (itemId) => {
    
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const getTotalBadgeAmount=()=>{
    let badgeAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        badgeAmount += cartItems[item];
      }
    }
    return badgeAmount;
  }

  const contextValue = { cartItems, addToCart, removeFromCart, getTotalCartAmount ,getTotalBadgeAmount};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
