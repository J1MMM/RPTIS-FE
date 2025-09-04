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

export const toLowerCase = (text) => {
  if (!text) return "";
  return String(text).toLowerCase();
};

export const capitalizeFirstLetter = (text) => {
  if (!text) return "";
  const str = String(text).toLowerCase(); // optional: convert the rest to lowercase
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatCamelCase = (text) => {
  if (!text) return "";

  // Insert a space before capital letters, then lowercase the rest
  const spaced = text.replace(/([A-Z])/g, " $1").toLowerCase();

  // Capitalize the first letter only
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
};

export function toOrdinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}