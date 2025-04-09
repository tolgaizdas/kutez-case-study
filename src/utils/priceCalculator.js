export function calculatePrice(popularityScore, weight, goldPrice) {
  return Math.round((popularityScore + 1) * weight * goldPrice).toFixed(2);
}
