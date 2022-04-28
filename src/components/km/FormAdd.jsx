import { useEffect, useRef } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const FormAdd = ({ handleModalShow }) => {
  const km_awal = useRef(0);
  const km_akhir = useRef(0);
  const km_pemakaian = useRef(0);

  const tgl_berangkat = useRef();
  const tgl_kembali = useRef();
  const jam_berangkat = useRef();
  const jam_kembali = useRef();

  const getDateNow = () => {
    console.log("set tanggal waktu");
    [tgl_berangkat, tgl_kembali, jam_berangkat, jam_kembali].map((d) => {
      d.current.valueAsDate = new Date();
    });
    // tgl_berangkat.current.valueAsDate = new Date();
    // jam_berangkat.current.valueAsDate = new Date();
  };

  const hitungPemakain = () => {
    km_pemakaian.current.value = km_akhir.current.value - km_awal.current.value;
  };

  function handleSubmit(e) {
    e.preventDefault();

    let data = {};
    ["no_spj", "tgl_berangkat"].map((nama) => {
      data[nama] = e.target[nama].value;
    });

    console.log(data);
    // console.log(e.target["no_spj"].value);

    // jika berhasil
    // handleModalShow();
  }

  useEffect(() => {
    getDateNow();
  }, []);

  //
  return (
    <Form onSubmit={handleSubmit}>
      {/* NO SPJ */}
      <Form.Group className="mb-3" controlId="no_spj">
        <Form.Label>No SPJ</Form.Label>
        <Form.Control type="text" placeholder="..." />
        <Form.Text className="text-muted">Jika tidak ada dikosongi.</Form.Text>
      </Form.Group>

      <Card className="mb-4">
        <Card.Body>
          {/* TANGGAL BERANGKAT */}
          <Form.Group className="mb-3" controlId="tgl_berangkat">
            <Form.Label>Tanggal Berangkat</Form.Label>
            <Form.Control type="date" ref={tgl_berangkat} />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          {/* JAM BERANGKAT */}
          <Form.Group className="mb-3" controlId="jam_berangkat">
            <Form.Label>Jam Berangkat</Form.Label>
            <Form.Control type="time" ref={jam_berangkat} />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          {/* TANGGAL KEMBALI */}
          <Form.Group className="mb-3" controlId="tgl_kembali">
            <Form.Label>Tanggal Kembali</Form.Label>
            <Form.Control type="date" ref={tgl_kembali} />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          {/* JAM KEMBALI */}
          <Form.Group className="mb-3" controlId="jam_kembali">
            <Form.Label>Jam Kembali</Form.Label>
            <Form.Control type="time" ref={jam_kembali} />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          {/* TUJUAN */}
          <Form.Group className="mb-3" controlId="tujuan">
            <Form.Label>Tujuan</Form.Label>
            <Form.Control type="text" placeholder="..." />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          {/* KEPERLUAN */}
          <Form.Group className="mb-3" controlId="keperluan">
            <Form.Label>Keperluan</Form.Label>
            <Form.Control type="text" placeholder="..." />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col>
              {/* KM AWAL */}
              <Form.Group className="mb-3" controlId="km_awal">
                <Form.Label>Km Awal</Form.Label>
                <Form.Control
                  type="number"
                  ref={km_awal}
                  onChange={hitungPemakain}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Col>
            <Col>
              {/* KM AKHIR */}
              <Form.Group className="mb-3" controlId="km_akhir">
                <Form.Label>Km Akhir</Form.Label>
                <Form.Control
                  type="number"
                  ref={km_akhir}
                  onChange={hitungPemakain}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Col>
          </Row>
          {/* KM PEMAKAIAN */}
          <Form.Group className="mb-3" controlId="km_pemakaian">
            <Form.Label>Km Pemakaian</Form.Label>
            <Form.Control type="number" readOnly ref={km_pemakaian} />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Card.Body>
      </Card>
      {/* BUTTON */}
      <Row>
        <Col>
          <Button variant="warning" type="reset" className="w-100">
            Reset
          </Button>
        </Col>
        <Col>
          <Button type="submit" className="w-100">
            Simpan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormAdd;
