/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Menu from "./Menu";
import Link from "next/link";
import { useCart } from "../hooks/useCart";
import { HiOutlineMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import { GiShoppingCart } from "react-icons/gi";

const NavBar = () => {
  const [openCatMenu, setOpenCatMenu] = React.useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { cartCount } = useCart();
  
  const closeMobileMenu = () => {
    setOpenMenu(false);
  };
  
  return (
    <>
      <nav className=" bg-gray-800 shadow-md md:px-5 w-100 flex items-center justify-between sticky top-0 z-50">
        <div className="flex justify-between items-center ml-2">
          <span className="text-2xl font-bold cursor-pointer">
            <img
              src="../assets/logo1.png"
              alt="Flawless"
              className="h-[57px]"
            />
          </span>
        </div>
        <div className="flex items-center">
          <Menu openCatMenu={openCatMenu} setOpenCatMenu={setOpenCatMenu} />
          {openMenu && (
            <MobileMenu
              openCatMenu={openCatMenu}
              setOpenCatMenu={setOpenCatMenu}
              closeMobileMenu={closeMobileMenu}
            />
          )}
          <div className="md:mx-4 my-3 md:my-0 flex items-center space-x-4 ">
            {/* <button className="outline outline-1  font-style: normal  text-gray-800 font-semibold bg-white rounded px-4 py-0.5 duration-500">
              Login
            </button> */}
            <Link href="/cartDetail" prefetch={false}>
              <button
                type="button"
                className="relative mb-0 flex items-center "
                onClick={closeMobileMenu}
              >
                <GiShoppingCart
                  style={{ width: 30, height: 30, color: "white" }}
                />
                <span className="sr-only">Notifications</span>
                <div
                  className={`absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold  text-white bg-red-500  rounded-full -top-2 -end-2 ${
                    cartCount > 9 ? "p-2.5" : ""
                  }`}
                >
                  {cartCount}
                </div>
              </button>
            </Link>

            <div className="md:hidden mt-2 relative mr-2">
              {openMenu ? (
                <button onClick={() => setOpenMenu(false)}>
                  <HiX style={{ width: 36, height: 25, color: "white" }} />
                </button>
              ) : (
                <button onClick={() => setOpenMenu(true)}>
                  <HiOutlineMenu
                    style={{ width: 36, height: 25, color: "white" }}
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
