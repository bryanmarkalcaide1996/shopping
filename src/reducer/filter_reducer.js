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
      const { name, value } = payload;
      if (name === "category") {
        return { ...state, filter: { ...state.filter, category: value } };
      }
      if (name === "price") {
        return { ...state, filter: { ...state.filter, price: value } };
      }
      break;

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
      const filterSort = state.filter.price;
      if (filterSort !== "lowest") {
        const sortedList = state.filteredList.sort(function (b, a) {
          return a.unitPrice - b.unitPrice;
        });
        return { ...state, filteredList: sortedList };
      }
      return {
        ...state,
        filteredList: state.filteredList.sort(function (a, b) {
          return a.unitPrice - b.unitPrice;
        }),
      };

    default:
      break;
  }
}

export default filter_reducer;
