/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { PiPlusSquareBold } from "react-icons/pi";
import { PiMinusSquareBold } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "../hooks/useCart";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

const CartItem = ({ item }: any) => {
  const { incrementCartItems, decrementCartItems, deleteItemById } = useCart();

  return (
    <>
      <div className=" flex bg-white mb-3 shadow-md  rounded p-3">
        <Link href={`/product/${item.id}`}>
          <div className="">
            <img
              src={item.image}
              alt={item.title}
              className="h-[149px] w-[149px] object-contain p-2 "
            />
          </div> 
        </Link>

        <div className="p-2 w-full">
          <div className="flex justify-between">
            <h2 className=" text-lg text-black font-semibold font-sans line-clamp-1">
              {item.title}
            </h2>
          </div>
          <p className="text-sm line-clamp-1 mr-20  ">{item.description}</p>
          <p className="text-black font-semibold mt-4 flex items-center">
            &#36;{(item.price * item.quantity).toFixed(2)}
            <RxCross2 />
            {item.quantity}
          </p>
          <div className="flex justify-between items-center w-full  mt-4">
            <div className="flex  space-x-1 ">
              <p>Quantity:</p>
              <button onClick={() => decrementCartItems(item.id)}>
                <PiMinusSquareBold style={{ fill: "#64748b" }} />
              </button>
              <p className="text-black font-semibold text-md text-semibold ">
                {item.quantity}
              </p>
              <button onClick={() => incrementCartItems(item.id)}>
                <PiPlusSquareBold style={{ fill: "#64748b " }} />
              </button>
            </div>
            <div>
              <button onClick={() => deleteItemById(item.id)}>
                <RiDeleteBin6Line style={{ fill: "red" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
