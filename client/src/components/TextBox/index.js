import React from "react";
import "./style.css";

const TextBox = ({ textHeading, pText, textBookHeading, textBoxParagraph }) => {
  return (
    <>
      <h2 id={textBookHeading}>{textHeading}</h2>
      <p id={textBoxParagraph}>{pText}</p>
    </>
  );
};

export default TextBox;
