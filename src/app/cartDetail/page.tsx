"use client";
import React from "react";
import CartItem from "../components/CartItem";
import { IoBagCheck } from "react-icons/io5"; 
import { useCart } from "../hooks/useCart";
import Link from "next/link";
import toast from "react-hot-toast";

const Cart = () => {
  const { cartItems, cartCount, cartTotal, deleteAll } = useCart();
  const tax = 70.23;
  return (
    <div className="m-5 xl:container xl:mx-auto  min-h-screen my-10">
      <h1 className="m-3 mb-5 md:mb-5 text-3xl font-bold md:m-0">
        Your Cart: {cartCount}
      </h1>
      {cartCount > 0 ? (
        <>
          <div className="flex justify-between">
            <Link
              href="/product"
              prefetch={false}
              className="text-blue-600 m-3 md:m-0"
            >
              &larr; Continue Shopping
            </Link>
            <div
              className="text-red-700 m-3 md:m-0 cursor-pointer "
              onClick={deleteAll}
            >
              Clear All
            </div>
          </div>
          <div className="lg:flex items-start space-y-5 lg:space-y-0 lg:space-x-5 mt-5">
            <div className="lg:w-2/3 xl:w-3/4  w-full h-fit ">
              {cartItems.map((item: any) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
            <div className="lg:w-1/3 xl:w-1/4 p-5 bg-white shadow-md rounded-sm h-[23rem] w-full sticky top-24">
              <h1 className="flex justify-start font-bold text-black  border-b-2 pb-5  ">
                PRICE DETAILS
              </h1>
              <div className="flex justify-between mt-5 my-5">
                <p>Subtotal</p>
                <span>&#36;{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between my-5">
                <p>Shipping</p>
                <span className="text-sm">FREE</span>
              </div>
              <div className="flex justify-between my-5 border-b-2 pb-5">
                <p>Estimated tax</p>
                <span>&#36;{tax}</span>
              </div>
              <div className="flex justify-between mt-3 mb-5 ">
                <p className="font-semibold">Total Amount</p>
                <span className="font-semibold">
                  &#36;{(cartTotal + tax).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-center items-center gap-x-2 bg-yellow-500 hover:bg-yellow-400 p-3 rounded-md">
                <IoBagCheck style={{color:"white"}} />  
                <button
                  className="text-md text-white"
                  onClick={() => {
                    toast.success("Order Placed. Continue shopping");
                  }}
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link href="/product" prefetch={false} className="text-blue-600 ">
            &larr; Back to Product
          </Link>
          <p className="mt-3">You&apos;re cart is empty start shopping now. </p>
        </>
      )}
    </div>
  );
};

export default Cart;
