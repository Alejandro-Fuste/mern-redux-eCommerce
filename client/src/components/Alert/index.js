import React, { useState } from "react";

function Alert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You added an item to your cart!</Alert.Heading>
      </Alert>
    );
  }
}

export default Alert;
