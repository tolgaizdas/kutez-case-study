import { NextResponse } from "next/server";

export async function GET(request) {
  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=gram-gold&vs_currencies=usd";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.COINGECKO_API_KEY,
    },
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch gold price" },
      { status: 500 }
    );
  }
  const data = await response.json();
  return NextResponse.json({ goldPrice: Number(data["gram-gold"].usd.toFixed(2)) });
}
