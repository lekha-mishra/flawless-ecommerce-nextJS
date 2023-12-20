"user client";
import React, { useContext } from "react";
import { useCart } from "../hooks/useCart";
import toast from "react-hot-toast";


const Button = ({ product, children }: any) => {
 const {addItem}=useCart();

 function handleCartItem(){
  addItem(product)
  toast.success("Product added successfully to the cart");
  
 }
  return (
    <button className="py-3  text-white" onClick={handleCartItem}>
      {children}
    </button>
  );
};

export default Button;
