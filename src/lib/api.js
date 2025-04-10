export async function fetchProducts(filters = {}) {
  try {
    let url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/products`;

    if (Object.keys(filters).length > 0) {
      const params = new URLSearchParams();

      if (filters.goldPrice) params.append("goldPrice", filters.goldPrice);
      if (filters.minPrice) params.append("minPrice", filters.minPrice);
      if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);
      if (filters.minPopularity)
        params.append("minPopularity", filters.minPopularity);

      url = `${url}?${params.toString()}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function fetchGoldPrice() {
  try {
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/gold-price`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch gold price");
    }

    const data = await response.json();
    return data.goldPrice;
  } catch (err) {
    console.error("Error fetching gold price:", err.message);
    return null;
  }
}
