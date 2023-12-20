/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable @next/next/no-img-element */

"use client";
import * as React from "react";
import ProductItem from "../components/ProductsItems";
import Loader from "../components/Loader";
const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(function () {
    async function getProduct() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    getProduct();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className=" gap-x-1">
          <div className="  mx-1 w-100 xs:grid rounded-md xs:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 xs:max-md:gap-x-2 gap-x-6 gap-y-6 p-5  ">
            {products.map((product: any) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
