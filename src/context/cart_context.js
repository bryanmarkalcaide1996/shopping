import React, { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cart_reducer";
import {
  ADD_TO_CART,
  SET_QUANTITY,
  TOTAL_AMOUNT,
  CLEAR_CART,
} from "../utils/action_type";

const getLocaleStorage = () => {
  let cartData = JSON.parse(localStorage.getItem("cart"));
  if (cartData) {
    return cartData;
  } else {
    return [];
  }
};

const CartContext = createContext();
const initialState = {
  cart: getLocaleStorage(),
  totalAmount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addToCart({ id, productName, imageUrl, description, unitPrice }) {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, productName, imageUrl, description, unitPrice, qty: 1 },
    });
  }

  function setQty(name, id) {
    dispatch({ type: SET_QUANTITY, payload: { name, id } });
  }

  function clearCart() {
    dispatch({ type: CLEAR_CART });
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: TOTAL_AMOUNT });
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, setQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { useCartContext, CartProvider };
