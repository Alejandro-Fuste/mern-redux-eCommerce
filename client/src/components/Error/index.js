import React from "react";

function Error({ h3ClassName, spanClassName, ariaLabel, text }) {
  return (
    <>
      <h3 className={h3ClassName}>
        <span role="img" aria-label={ariaLabel} className={spanClassName}>
          😱
        </span>
        {text}
      </h3>
    </>
  );
}

export default Error;
