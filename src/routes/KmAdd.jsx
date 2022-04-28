import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Modal, Navbar } from "react-bootstrap";

import FormAdd from "../components/km/FormAdd";

const KmAdd = () => {
  const [show, setShow] = useState(false);

  const handleModalShow = () => setShow(true);
  const handleModalClose = () => setShow(false);
  //
  return (
    <>
      <Modal show={show} onHide={handleModalClose}>
        <Modal.Body>
          <h2>Pemakaian Baru berhasil ditambahkan.</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <Navbar bg="light" className="mb-4">
        <Container>
          <h2>Tambah Pemakaian Baru</h2>
        </Container>
      </Navbar>

      <Container>
        <Link to="/">
          <Button variant="secondary" className="mb-4 md:w-100">
            Kembali
          </Button>
        </Link>

        <Card className="border-0 bg-light">
          <Card.Body>
            <FormAdd handleModalShow={handleModalShow} />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default KmAdd;
