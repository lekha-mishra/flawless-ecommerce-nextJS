"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const MobileMenu = ({ openCatMenu, setOpenCatMenu, closeMobileMenu }: any) => {
  const [category, setCategory] = useState([]);

  useEffect(function () {
    async function getProductCategory() {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const categories = await res.json();
      setCategory(categories);
    }
    getProductCategory();
  }, []);

  return (
    <ul className="flex flex-col md:hidden absolute top-[63px] left-0 w-full  bg-gray-700 ">
      <li className="mx-4 my-3 md:my-0">
        <Link
          href="/"
          className="text-white font-style: normal"
          prefetch={false}
          onClick={closeMobileMenu}
        >
          Home
        </Link>
      </li>
      <li className="mx-4 my-3 md:my-0">
        <Link
          href="/about"
          className="text-white font-style: normal"
          prefetch={false}
          onClick={closeMobileMenu}
        >
          About
        </Link>
      </li>
      <li
        className="mx-4 my-3 md:my-0 flex flex-col items-start justify-between"
        onClick={() => setOpenCatMenu(!openCatMenu)}
      >
        <div className="text-white font-style: normal w-full flex items-center justify-between">
          Categories
          <FaChevronDown style={{ color: "white" }} />
        </div>
        {openCatMenu && (
          <ul className="top-full left-0  text-white p-2 w-full z-20">
            {category.map((category, index) => (
              <Link
                href={`/product/category/${category}`}
                prefetch={false}
                key={index}
                onClick={closeMobileMenu}
              >
                <li className=" p-2 hover:bg-black/[0.03] rounded-md capitalize">
                  {category}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </li>
      <li className="mx-4 my-3 md:my-0 relative">
        <Link
          href="/contact"
          prefetch={false}
          className="text-white font-style: normal"
          onClick={closeMobileMenu}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
