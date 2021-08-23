import React from "react";
import Button from "react-bootstrap/Button";

function CustomButton({ name, type, nameForClass, id, onClick }) {
  return (
    <>
      <Button
        variant="primary"
        type={type}
        className={nameForClass}
        id={id}
        onClick={onClick}
      >
        {name}
      </Button>
    </>
  );
}

export default CustomButton;
