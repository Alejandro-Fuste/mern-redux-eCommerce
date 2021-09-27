import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        textAlign: "center",
        color: "#434e54",
      }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
