import React from "react";

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
