import React, {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import reducer from "../reducer/products_reducer";
import data from "../json/items.json";
import {
  LOAD_AND_FETCH,
  LOAD_AND_FETCH_SINGLE_PRODUCT,
  CLEAR_SINGLE_PRODUCT,
} from "../utils/action_type";

const initialState = {
  allProducts: [],
  singleProduct: {},
};

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);

  function loadingState() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  // fetch data from json file
  useEffect(() => {
    dispatch({ type: LOAD_AND_FETCH, payload: data });
  }, []);

  // fetch singleProduct from json file
  function fetchSingleProduct(id) {
    const singleProduct = data.filter((product) => product.id === id);

    dispatch({
      type: LOAD_AND_FETCH_SINGLE_PRODUCT,
      payload: singleProduct,
    });
  }

  // clear value of single product state
  function clearSingleProduct() {
    dispatch({ type: CLEAR_SINGLE_PRODUCT });
  }

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchSingleProduct,
        clearSingleProduct,
        loadingState,
        isLoading,
      }}
    >
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
