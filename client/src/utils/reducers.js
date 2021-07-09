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
        case UPDATE_PRODUCTS:
         return {
             ...state, 
             products: [...action.products]
         };

         case ADD_TO_CART:
         return {
             ...state,
             cartOpen: true,
             cart: [...state.cart, action.product]
         };
         
         case ADD_MULTIPLE_TO_CART:
         return {
             ...state,
             cart: [...state.cart, ...action.products]
         };

         case UPDATE_CART_QUANTITY:
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
