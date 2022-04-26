import {
  LOAD_AND_FETCH,
  LOAD_AND_FETCH_SINGLE_PRODUCT,
  CLEAR_SINGLE_PRODUCT,
} from "../utils/action_type";
function products_reducer(state, { type, payload }) {
  switch (type) {
    case LOAD_AND_FETCH:
      return {
        ...state,
        isLoading: false,
        allProducts: payload,
      };
    case LOAD_AND_FETCH_SINGLE_PRODUCT:
      return {
        ...state,
        isLoading: false,
        singleProduct: payload[0],
      };
    case CLEAR_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: {},
      };

    default:
      throw new Error(`No Matching "${type}" - action type`);
  }
}

export default products_reducer;
