import React, { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "../reducer/products_reducer";
import data from "../json/items.json";
import { LOAD_AND_FETCH } from "../action_type";

const initialState = {
  isLoading: true,
  allProducts: [],
  featuredProducts: [],
};

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    data &&
      setTimeout(() => {
        dispatch({ type: LOAD_AND_FETCH, payload: data });
      }, 1500);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, data }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Use created context
const useProductsContext = () => {
  return useContext(ProductsContext);
};

// Export
export { useProductsContext, ProductsProvider };
