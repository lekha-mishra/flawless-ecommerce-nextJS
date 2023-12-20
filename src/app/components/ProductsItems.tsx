/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import * as React from "react";
import Button from "./Button";
import { useCart } from "../hooks/useCart";
import toast from "react-hot-toast";
const ProductItem = ({ product }: any) => {
  // const [selectedId, setSelectedId] = React.useState(null);
  const { cartItems, addItem } = useCart();
  const [isProductInCart, setIsProductInCart] = React.useState(false);

  const isItemInCart = cartItems.some((item: any) => item.id === product.id);

  function handleCartItem() {
    addItem(product);
    toast.success("Product added successfully to the cart");
  }
  // React.useEffect(
  //   function () {
  //     setIsProductInCart(false);
  //     if (cartItems) {
  //       const exixtingIndex = cartItems.findIndex(
  //         (item: any) => item.id === product.id
  //       );
  //       if (exixtingIndex > -1) {
  //         setIsProductInCart(true);
  //       }
  //     }
  //   },
  //   [cartItems]
  // );
  const { title, price, image, id, rating } = product;

  return (
    <div className="rounded shadow-md">
      <Link
        href={`/product/${id}`}
        className=" sm:w-full rounded-md "
        // onClick={() => handleSelectedId(id)}
      >
        <div className="p-10 py-3 flex items-center justify-center">
          <img src={image} alt="image1" className=" h-[200px] object-contain" />
        </div>

        <div className="flex justify-between px-2 py-2 md:py-0 items-start md:h-[102px]">
          <div>
            <h1 className="font-medium  line-clamp-2">{title}</h1>
            <div className=" mt-2 rounded-full flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="green"
                className="w-3 h-3 inline-block "
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="inline-block font-semibold text-green-600 ml-1 text-xs">
                {rating?.rate || 0}
              </p>
            </div>

            <div className="flex items-center mt-2">
              <h1 className="font-bold text-xs mr-2">&#36;{price}</h1>
              <h1 className="line-through text-xs inline-block text-gray-400">
                &#36;4500
              </h1>
              <h1 className="text-green-600 font-semibold inline-block text-xs ">
                &nbsp; 10% off
              </h1>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex justify-center items-center gap-x-2 px-2">
        {/* {isProductInCart ? (
          <Link
            href="/cartDetail"
            className="bg-stone-100 hover:bg-stone-200 flex justify-center rounded-md py-2 text-sm  my-2 w-full text-black"
          >
            Go to Cart
          </Link>
        ) : ( */}
        <button
          className="bg-stone-100 hover:bg-stone-200 rounded-md py-2 text-sm  my-2 w-full text-black"
          onClick={handleCartItem}
        >
          Add to cart
        </button>
        {/* )} */}

        <Link
          href={`/product/${id}`}
          className="bg-stone-100 hover:bg-stone-200 flex justify-center text-sm rounded-md py-2  my-2 w-full text-black"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
