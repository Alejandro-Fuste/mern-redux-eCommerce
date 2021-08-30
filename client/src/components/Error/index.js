import React from "react";

function Error({ className, ariaLabel, text }) {
  return (
    <>
      <h3 id="noItemsMessage">
        <span role="img" aria-label="shocked" id="noItemsImage">
          😱
        </span>
        You haven't added anything to your cart yet!
      </h3>
    </>
  );
}

export default Error;
