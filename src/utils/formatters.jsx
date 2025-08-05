export const formatPeso = (amount) => {
  return amount?.toLocaleString("en-PH", {
    style: "currency",
    currency: "PHP",
  });
};

export const formatPercent = (value) => `${(value * 100).toFixed()}%`;
