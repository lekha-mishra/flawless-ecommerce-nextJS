"use client";
import React, { useContext, useEffect, useState } from "react";
import { ProductCtx } from "../context/Provider";

export const useCart = () => {
  const { cartItems, setCartItems }: any = useContext(ProductCtx);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cartItems.length);
    findTotalPrice();
    populateCartItems();
  }, [cartItems]);

  const populateCartItems = () => {
    // if items are in localstorage but not in context (happens when we refersh page)
    if (cartItems.length == 0) {
      const products = localStorage.getItem("products");
      if (products) {
        const temp = JSON.parse(products);
        setCartItems(temp);
      }
    }
  };

  const findTotalPrice = () => {
    let amount = 0;
    cartItems.forEach((item:any) => {
      amount += item.price * item.quantity;
    });
    setCartTotal(amount);
  };

  const addItem = (product: any) => {
    const existingProductIndex = cartItems.findIndex(
      (item:any) => item.id == product.id
    );
    const updatedCart = [...cartItems]; 
    if (existingProductIndex != -1) {
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("products", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const deleteItemById = (productId:any) => {
    const newProducts = cartItems.filter((product:any) => productId != product.id);
    setCartItems(newProducts);
    if (newProducts.length === 0) {
      localStorage.removeItem("products");
    } else {
      localStorage.setItem("products", JSON.stringify(newProducts));
    }
  };

  const deleteAll = () => {
    localStorage.removeItem("products");
    setCartItems([]);
  };

  const incrementCartItems = (productId:any) => {
    const newProducts = cartItems.map((item:any) => {
      if (item.id == productId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    localStorage.setItem("products", JSON.stringify(newProducts));
    setCartItems(newProducts);
  };

  const decrementCartItems = (productId:any) => {
    const newProducts = cartItems.map((item:any) => {
      if (item.id == productId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      } else {
        return item;
      }
    });
    localStorage.setItem("products", JSON.stringify(newProducts));
    setCartItems(newProducts);
  };

  return {
    addItem,
    deleteItemById,
    deleteAll,
    incrementCartItems,
    decrementCartItems,
    cartCount,
    cartTotal,
    cartItems,
    setCartItems,
  };
};
