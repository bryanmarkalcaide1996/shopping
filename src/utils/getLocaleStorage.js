export const getLocaleStorage = () => {
  let cartData = JSON.parse(localStorage.getItem("cart"));
  if (cartData) {
    return cartData;
  } else {
    return [];
  }
};
