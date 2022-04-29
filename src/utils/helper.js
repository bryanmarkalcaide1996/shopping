export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  }).format(number);
};
export const getUniqueValues = (data) => {
  const unique = ["All", ...new Set(data.map((item) => item.category))];
  return unique;
};
