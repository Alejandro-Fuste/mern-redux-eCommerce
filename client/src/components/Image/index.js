import React from "react";

const Image = ({ src, alt, id }) => {
  return (
    <>
      <span>
        <img src={src} alt={alt} id={id} />
      </span>
    </>
  );
};

export default Image;
