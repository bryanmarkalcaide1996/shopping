import {
  LOAD_PRODUCTS,
  UPDATE_FILTER,
  UPDATE_FILTERED_LIST,
  SORT_VALUE,
} from "../utils/action_type";

function filter_reducer(state, { type, payload }) {
  switch (type) {
    case LOAD_PRODUCTS:
      return { ...state, allItems: payload };

    case UPDATE_FILTER:
      const { name } = payload;
      return { ...state, filter: { ...state.filter, category: name } };

    case UPDATE_FILTERED_LIST:
      const categoryName = state.filter.category;

      if (categoryName === "All") {
        return { ...state, filteredList: state.allItems };
      } else {
        return {
          ...state,
          filteredList: payload.filter(
            (item) => item.category === categoryName
          ),
        };
      }

    case SORT_VALUE:
      return { ...state };

    default:
      break;
  }
}

export default filter_reducer;
