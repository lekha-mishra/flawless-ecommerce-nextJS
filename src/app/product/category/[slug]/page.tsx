"use client";
import Loader from "@/app/components/Loader";
import ProductItem from "@/app/components/ProductsItems";
import React, { useEffect, useState } from "react";

const CategoryInfo = ({ params: { slug } }: any) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = React.useState(true);
  const decodedCategory = decodeURIComponent(slug);

  useEffect(
    function () {
      async function getProductCategory() {
        try {
          const res = await fetch(
            `https://fakestoreapi.com/products/category/${slug}`
          );
          const categories = await res.json();
          setCategories(categories);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      }
      getProductCategory();
    },
    [slug]
  );

  const filteredProducts = categories.filter(
    (product: any) => product.category === decodedCategory
  );

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div
          className={`sm:container mx-auto h-full ${
            filteredProducts.length > 5 ? " 2xl:h-[89vh]" : " lg:h-[89vh]"
          }`}
        >
          <div className=" gap-x-1">
            <div className="  mx-1 w-100 xs:grid  col-span-3 rounded-md xs:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-4 gap-x-5 gap-y-5 p-5">
              {filteredProducts.map((product: any) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryInfo;
