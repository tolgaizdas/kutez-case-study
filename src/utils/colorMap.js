export function getColorValue(color) {
  const colorMapping = {
    yellow: "#E6CA97",
    rose: "#E1A4A9",
    white: "#D9D9D9",
  };

  return colorMapping[color] || "#000000";
}
