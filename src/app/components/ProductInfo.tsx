/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { IoIosShareAlt } from "react-icons/io";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { BsPatchCheckFill } from "react-icons/bs";
import Button from "./Button";
import Link from "next/link";
import toast from "react-hot-toast";
import { useCart } from "../hooks/useCart";

const ProductInfo = ({ product }: any) => {
  const { title, price, image, description, rating } = product;
  const { cartItems } = useCart();
  // console.log(rating.rate)
  // const [isProductInCart, setIsProductInCart] = useState(false);

  return (
    <div className="xl:container mx-auto p-5 ">
      <div className="md:mt-8 xl:px-20 min-h-screen">
        <div className="lg:flex items-start gap-x-2">
          <div className="md:flex justify-end shadow-md p-2 lg:sticky top-16 z-40">
            <div className="w-full rounded">
              <div className="flex justify-center items-center lg:w-[450px] h-[300px] md:h-[450px]">
                <img
                  src={image}
                  alt="image1"
                  className=" object-contain p-5 h-full "
                />
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-y-2 sm:gap-x-2 my-2">
                <div className="w-full flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 rounded-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6 mr-2"
                  >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>

                  <Button product={product}>Add to cart</Button>
                </div>
                <div className="w-full flex items-center justify-center bg-red-500 rounded-md hover:bg-red-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                    <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                  </svg>

                  <Link href="#">
                    <button
                      className="py-3  text-white "
                      onClick={() =>
                        toast.error("Please add product to the cart")
                      }
                    >
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded shadow-md sm:p-6 p-4 my-2 md:my-0  lg:w-2/3 ">
            <h2 className="font-bold text-2xl capitalize">{title}</h2>

            <div className="flex pt-2 items-center">
              <p className="font-bold text-sm text-green-600">In stock</p>
            </div>
            <div className="mt-12 border-t-gray-500">
              <p className="text-green-600 text-sm font-bold">Special Price</p>
              <div className="flex items-center ">
                <h1 className="font-bold inline-block text-2xl mr-2">
                  &#36;{price}
                </h1>
                <h1 className="line-through inline-block  text-gray-400">
                  &#36;4500
                </h1>
                <h1 className="text-green-600 font-semibold inline-block">
                  &nbsp; 10% off
                </h1>
              </div>
              <button className="bg-green-600 px-2 mt-2 rounded-full flex items-center">
                <p className="inline-block text-white mr-1">
                  {rating?.rate || 0}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-4 h-4 inline-block "
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="my-12">
              <h2 className="font-bold">PRODUCT DETAILS</h2>
              <p className="text-sm mt-2 ">{description}</p>
            </div>
            <div className="mt-12">
              <h2 className="font-bold uppercase">Available offers</h2>
              <div className="mt-2 flex items-center gap-2">
                <BsPatchCheckFill style={{ color: "#16a34a" }} />
                <p className="inline text-sm">
                  Bank Offer10% off on Axis Bank Credit Card EMI Transactions,
                  up to ₹1,500 on orders of ₹5,000 and aboveT&C
                </p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <BsPatchCheckFill style={{ color: "#16a34a" }} />
                <p className="inline text-sm">
                  Bank Offer10% off on Axis Bank Credit Card EMI Transactions,
                  up to ₹1,500 on orders of ₹5,000 and aboveT&C
                </p>
              </div>
            </div>
            <div className="mt-12 ">
              <h2 className="font-bold uppercase">Delivery options</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter pincode"
                  className="border-2 pr-5 pl-2 py-2 mt-2 rounded"
                />
                <span className="absolute top-1/3 left-[55%] sm:left-1/2 md:left-[22%] lg:left-[33%] xl:left-[27%] 2xl:left-[18%] ">
                  Check
                </span>
              </div>
              <p className="text-xs mt-2">
                Please enter PIN code to check delivery time & Pay on Delivery
                Availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
