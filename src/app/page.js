"use client";

import { useEffect, useState } from "react";
import { fetchProducts, fetchGoldPrice } from "../lib/api";
import Carousel from "./components/Carousel";
import Filter from "./components/Filter";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [goldPrice, setGoldPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProducts = async (minPrice, maxPrice, minPopularity, goldPrice) => {
    const data = await fetchProducts({
      minPrice: minPrice || 0,
      maxPrice: maxPrice || Infinity,
      minPopularity: minPopularity || 0,
      goldPrice: goldPrice,
    });
    setProducts(data);
  };

  useEffect(() => {
    const initializeData = async () => {
      try {
        setLoading(true);
        const goldPrice = await fetchGoldPrice();
        setGoldPrice(goldPrice);
        await getProducts(0, Infinity, 0, goldPrice);
      } finally {
        setLoading(false);
      }
    };

    initializeData();
  }, []);

  const applyFilter = (filterData) => {
    getProducts(
      filterData.minPrice,
      filterData.maxPrice,
      filterData.minPopularity,
      goldPrice
    );
  };

  return (
    <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10 text-center">
      <h1 className="m-8 avenir-book text-[45px]">Product List</h1>
      <Filter applyFilter={applyFilter} />
      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : products.length > 0 ? (
        <Carousel products={products} />
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
}
