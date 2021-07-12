import React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import idbPromise from "../../utils/helpers";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = (item) => {};

  const onChange = (e) => {};

  return (
    <div className="flex-row">
      <div>
        <img src={`/images/${item.image}`} alt="" />
      </div>
      <div>
        <div>
          {item.name}, ${item.price}
        </div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
