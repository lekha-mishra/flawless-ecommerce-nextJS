"use client";

import { createContext, useState } from "react";

export const ProductCtx = createContext();

const CartProvider = ({ children }:any) => {
  
  const [cartItems, setCartItems] = useState([]);
  
  return (
    <ProductCtx.Provider value={{cartItems,setCartItems}}>
      {children}
    </ProductCtx.Provider>
  );
};

export default CartProvider;
