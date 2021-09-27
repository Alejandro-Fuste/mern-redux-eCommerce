import React from "react";
import "./style.css";

function Jumbotron({ children, id }) {
  return <div id={id}>{children}</div>;
}

export default Jumbotron;
