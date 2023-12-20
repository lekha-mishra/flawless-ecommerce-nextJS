import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { getProductCategory } from "../services/apiProducts";

const Menu = ({ openCatMenu, setOpenCatMenu }: any) => {
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
    <>
      <ul
        className={`hidden space-x-6 md:flex md:item-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto  md:pl-0 pl-7 md:opacity-100 transition-all ease-in duration-500`}
      >
        <li className=" md:my-0 py-6 ">
          <Link
            href="/"
            className="text-white font-style: normal  "
            prefetch={false}
          >
            Home
          </Link>
        </li>
        <li className=" md:my-0 py-6">
          <Link
            href="/about"
            className="text-white font-style: normal "
            prefetch={false}
          >
            About
          </Link>
        </li>
        <li
          className=" md:my-0 flex items-center space-x-2 relative py-6 "
          onMouseEnter={() => {
            setOpenCatMenu(true);
          }}
          onMouseLeave={() => setOpenCatMenu(false)}
        >
          <div className="text-white font-style: normal ">Categories</div>
          <FaChevronDown style={{ color: "white" }} />
          {openCatMenu && (
            <ul className="bg-white flex flex-col  justify-center absolute bg-opacity-100 top-[72px] left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                {category.map((category, index) => (
                  <Link href={`/product/category/${category}`} prefetch={false} key={index}>
                    <li className=" p-2 hover:bg-black/[0.03] rounded-md capitalize">
                      {category}
                    </li>
                  </Link>
                ))}
            </ul>
          )}
        </li>
        <li className=" md:my-0 py-6">
          <Link
            href="/contact"
            prefetch={false}
            className="text-white font-style: normal "
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
