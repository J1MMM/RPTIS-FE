export const formatPeso = (amount) => {
  const parsed = Number(amount);
  if (isNaN(parsed)) return "₱0.00";
  return parsed.toLocaleString("en-PH", {
    style: "currency",
    currency: "PHP",
  });
};

export const formatPercent = (value) => {
  const parsed = Number(value);
  if (isNaN(parsed)) return "0%";
  return `${(parsed * 100).toFixed(0)}%`;
};

export const toFixedTwo = (num) => {
  const parsed = Number(num);
  if (isNaN(parsed)) return 0;
  return Number(parsed.toFixed(2));
};

export const roundOff = (num) => {
  const parsed = Number(num);
  if (isNaN(parsed)) return 0;
  return Math.round(parsed);
};
