import React from "react";
import "./style.css";

const TextBox = ({ children, id }) => {
  return <div id={id}>{children}</div>;
};

export default TextBox;
