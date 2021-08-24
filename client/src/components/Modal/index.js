import React from "react";
import Modal from "react-bootstrap/Modal";

function modal({ nameForClass, logo, title, message }) {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-50w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <img src={logo} alt="logo" />
          <Modal.Title id="example-custom-modal-styling-title">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Oh snap! You added an item to your cart!{message}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default modal;
