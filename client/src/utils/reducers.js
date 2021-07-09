import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from "./actions";

const initialState = {
  products: [],
  categories: [],
  currentCategory: "",
  cart: [],
  cartOpen: false,
};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case :
         return {};

         case :
         return {};
         
         case :
         return {};

         case :
         return {};

         case :
         return {};

         case :
         return {};

         case :
         return {};

         case :
         return {};

         case :
         return {};

         default:
             return state;
    }
};

export default reducers;
