export async function fetchProducts(filters = {}) {
  try {
    let url = "/api/products";

    if (Object.keys(filters).length > 0) {
      const params = new URLSearchParams();

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
    const url = 'https://live-metal-prices.p.rapidapi.com/v1/latest/XAU/USD/GRAM';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
        'x-rapidapi-host': 'live-metal-prices.p.rapidapi.com'
      }
    };
    
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Failed to fetch gold price');
    }
    
    const data = await response.json();
    return data.rates.XAU;
  } catch (err) {
    console.error("Error fetching gold price:", err.message);
    return null;
  }
}
