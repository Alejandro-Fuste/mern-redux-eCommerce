import React from "react";
import Button from "react-bootstrap/Button";

function CustomButton({ name, key, type, nameForClass, id, onClick }) {
  return (
    <>
      <Button
        key={key}
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
