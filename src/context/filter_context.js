import { useContext, createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/filter_reducer";
import {
  LOAD_PRODUCTS,
  UPDATE_FILTER,
  UPDATE_FILTERED_LIST,
  SORT_VALUE,
} from "../utils/action_type";
import data from "../json/items.json";

const FilterContext = createContext();
const initialState = {
  allItems: [],
  filteredList: [],
  filter: {
    category: "All",
    price: "Lowest",
    search: "",
  },
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: data });
  }, []);

  useEffect(() => {
    dispatch({ type: UPDATE_FILTERED_LIST, payload: data.slice() });
  }, [state.filter]);

  function updateFilter(name) {
    dispatch({ type: UPDATE_FILTER, payload: { name } });
  }

  return (
    <FilterContext.Provider value={{ ...state, updateFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

// Use created context
const useFilterContext = () => {
  return useContext(FilterContext);
};

export { useFilterContext, FilterProvider };
