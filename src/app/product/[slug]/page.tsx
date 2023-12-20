/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { getProductId } from "@/app/services/apiProducts";
import ProductInfo from "../../components/ProductInfo";
import Loader from "@/app/components/Loader";

const ProductDetail = ({ params: { slug } }: any) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      async function getProductId() {
        try {
          const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
          const data = await res.json();
          setProduct(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      }
      getProductId();
    },
    [slug]
  );

  return <div>{loading ? <Loader /> : <ProductInfo product={product} />}</div>;
};

export default ProductDetail;
