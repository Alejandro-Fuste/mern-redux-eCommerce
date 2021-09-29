import React from "react";

const CartHolder = ({ children, id }) => {
  return <div id={id}>{children}</div>;
};

export default CartHolder;
