"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "../lib/api";
import Carousel from "./components/Carousel";
import Filter from "./components/Filter";

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async (minPrice, maxPrice, minPopularity) => {
    const data = await fetchProducts({
      minPrice: minPrice || 0,
      maxPrice: maxPrice || Infinity,
      minPopularity: minPopularity || 0,
    });
    setProducts(data);
  };

  const applyFilter = (filterData) => {
    getProducts(
      filterData.minPrice,
      filterData.maxPrice,
      filterData.minPopularity
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10 text-center">
      <h1 className="m-8 avenir-book text-[45px]">Product List</h1>
      <Filter applyFilter={applyFilter} />
      {products.length > 0 ? (
        <Carousel products={products} />
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
}
