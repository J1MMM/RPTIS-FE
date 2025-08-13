export const sumByField = (arr, field) => {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  return arr.reduce((total, row) => {
    const value = Number(row?.[field]);
    return isNaN(value) ? total : total + value;
  }, 0);
};

export function roundToNearestTen(value) {
  const num = Number(value);

  if (isNaN(num)) {
    console.warn("Invalid number:", value);
    return 0;
  }

  return Math.round(num / 10) * 10;
}
