import React from "react";
import Button from "react-bootstrap/Button";

function CustomButton({ name, type, nameForClass }) {
  return (
    <>
      <Button variant="primary" type={type} className={nameForClass}>
        {name}
      </Button>
    </>
  );
}

export default CustomButton;
