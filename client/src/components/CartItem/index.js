import React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import idbPromise from "../../utils/helpers";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = (item) => {};
};

export default CartItem;
