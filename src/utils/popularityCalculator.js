export function calculatePopularity(score) {
  score = score * 5; // Convert to 5-star scale

  const decimal = score % 1;

  if (decimal < 0.25) {
    return Math.floor(score);
  } else if (decimal < 0.75) {
    return Math.floor(score) + 0.5;
  }

  return Math.ceil(score);
}
