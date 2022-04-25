import { LOAD_AND_FETCH } from "../action_type";
function products_reducer(state, { type, payload }) {
  switch (type) {
    case LOAD_AND_FETCH:
      return {
        ...state,
        isLoading: false,
        allProducts: payload,
        featuredProducts: payload.slice(0, 6),
      };

    default:
      throw new Error(`No Matching "${type}" - action type`);
  }
}

export default products_reducer;
