import React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import helpers from "../../utils/helpers";
import "./style.css";

const { idbPromise } = helpers;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;

    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <div className="cartItemDiv">
      <div>
        <img
          src={`/images/${item.image}`}
          alt="item image"
          className="cartImage"
        />
      </div>
      <div id="cartItemInnerDiv">
        <div id="cartItemLeft">
          {item.name}

          <span>
            Qty:{" "}
            <input
              type="number"
              placeholder="1"
              value={item.purchaseQuantity}
              onChange={onChange}
              id="cartItemInput"
            />
          </span>
        </div>
        <div id="cartItemRight">
          <span>${item.price}</span>
          <span
            id="trash"
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️ Remove
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
