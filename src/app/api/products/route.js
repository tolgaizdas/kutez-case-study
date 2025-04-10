import { NextResponse } from "next/server";
import products from "../../../../products.json";
import { calculatePrice } from "@/utils/priceCalculator";
import { fetchGoldPrice } from "@/lib/api";
import { calculatePopularity } from "@/utils/popularityCalculator";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const minPrice = parseFloat(searchParams.get("minPrice")) || 0;
  const maxPrice = parseFloat(searchParams.get("maxPrice")) || Infinity;
  const minPopularity = parseFloat(searchParams.get("minPopularity")) || 0;
  const goldPrice =
    parseFloat(searchParams.get("goldPrice")) || (await fetchGoldPrice());

  const filteredProducts = products
    .map((product) => {
      const price = calculatePrice(
        product.popularityScore,
        product.weight,
        goldPrice
      );
      return { ...product, price };
    })
    .filter(
      (product) =>
        product.price >= minPrice &&
        product.price <= maxPrice &&
        calculatePopularity(product.popularityScore) >= minPopularity
    );

  return NextResponse.json(filteredProducts);
}
