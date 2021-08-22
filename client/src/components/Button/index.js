import React from "react";
import Button from "react-bootstrap/Button";

function CustomButton({ name, type, nameForClass, onClick }) {
  return (
    <>
      <Button
        variant="primary"
        type={type}
        className={nameForClass}
        onClick={onClick}
      >
        {name}
      </Button>
    </>
  );
}

export default CustomButton;
