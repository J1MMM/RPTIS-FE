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

export const splitLastWord = (text = "") => {
  const words = text.trim().split(" ");
  return {
    first: words.slice(0, -1).join(" "),
    last: words.slice(-1)[0] || "",
  };
};

export const toUpperCase = (text) => {
  if (!text) return "";
  return String(text).toUpperCase();
};

export const capitalizeFirstLetter = (text) => {
  if (!text) return "";
  const str = String(text).toLowerCase(); // optional: convert the rest to lowercase
  return str.charAt(0).toUpperCase() + str.slice(1);
};
