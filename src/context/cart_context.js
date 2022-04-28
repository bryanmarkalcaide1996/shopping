import React, {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import reducer from "../reducer/cart_reducer";
import {
  ADD_TO_CART,
  SET_QUANTITY,
  TOTAL_AMOUNT,
  CLEAR_CART,
  REMOVE_ITEM,
  SHOW_MODAL,
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
  showModal: false,
  totalAmount: 0,
  totalQty: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: TOTAL_AMOUNT });
  }, [state.cart]);

  useEffect(() => {
    dispatch({ type: SHOW_MODAL, payload: showModal });
    setTimeout(() => {
      dispatch({ type: CLEAR_CART });
    }, 1500);
  }, [showModal]);

  function addToCart({ id, productName, imageUrl, description, unitPrice }) {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, productName, imageUrl, description, unitPrice, qty: 1 },
    });
  }

  function setQty(name, id) {
    dispatch({ type: SET_QUANTITY, payload: { name, id } });
  }

  function removeItem(id) {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  }

  function clearCart() {
    dispatch({ type: CLEAR_CART });
  }

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, setQty, clearCart, removeItem, setModal }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { useCartContext, CartProvider };
