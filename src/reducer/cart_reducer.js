import {
  ADD_TO_CART,
  SET_QUANTITY,
  TOTAL_AMOUNT,
  CLEAR_CART,
} from "../utils/action_type";

function cart_reducer(state, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      if (state.cart.find((item) => item.id === payload.id)) {
        return { ...state };
      } else {
        return { ...state, cart: [...state.cart, payload] };
      }
    case SET_QUANTITY:
      const tempCart = state.cart.map((item) => {
        if (item.id === payload.id) {
          if (payload.name === "decrease") {
            let newQty = item.qty - 1;
            if (newQty <= 1) {
              newQty = 1;
            }
            return { ...item, qty: newQty };
          }
          if (payload.name === "increase") {
            let newQty = item.qty + 1;
            return { ...item, qty: newQty };
          }
        } else {
          return item;
        }
      });

      return { ...state, cart: tempCart };

    case TOTAL_AMOUNT:
      return { ...state };

    case CLEAR_CART:
      return { ...state, cart: [] };

    default:
      break;
  }
}

export default cart_reducer;
