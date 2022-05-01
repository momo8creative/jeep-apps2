import React from "react";
import { Modal, Spinner } from "react-bootstrap";

const Loading = ({ show }) => {
  return (
    <Modal show={show} backdrop="static" keyboard={false}>
      <div className="d-flex flex-column  justify-content-center align-items-center p-2 rounded">
        <Spinner animation="border" />
        <div>Loading...</div>
      </div>
    </Modal>
  );
};

export default Loading;
