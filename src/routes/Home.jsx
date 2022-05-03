import { useEffect, useState } from "react";
import { Card, Container, Image, Stack, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useKmContext } from "../contexts/KmContext";
import logo from "../images/jeep400.png";
import { convertDate, convertTime } from "../utils/ConvertDateTime";

const Home = () => {
  const [lastPemakaian, setlastPemakaian] = useState(null);
  const { readLastPemakaian } = useKmContext();
  useEffect(() => {
    if (lastPemakaian == null) {
      readLastPemakaian().then((res) => {
        if (res.error) return console.log("error", res.message);
        setlastPemakaian(res);
      });
    }
  }, []);
  //
  return (
    <Container>
      <Stack className="my-4">
        <Container className="d-flex align-items-center gap-2">
          <Image src={logo} alt="logo" height={60} width={60} />
          <h1 className="fw-bold">Jeep Apps</h1>
        </Container>
      </Stack>
      {lastPemakaian && (
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Pemakaian Terakhir</Card.Title>
            <Row>
              <Col>
                <small>Berangkat</small>
                <div className="ps-2 fw-bold">
                  <div>{convertDate(lastPemakaian.tgl_berangkat)}</div>
                  <div>{convertTime(lastPemakaian.jam_berangkat)}</div>
                </div>
              </Col>

              <Col>
                <small>Kembali</small>
                <div className="ps-2 fw-bold">
                  <div>{convertDate(lastPemakaian.tgl_kembali)}</div>
                  <div>{convertTime(lastPemakaian.jam_kembali)}</div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <small>Tujuan</small>
                <div className="ps-2 fw-bold">{lastPemakaian.tujuan}</div>
              </Col>

              <Col>
                <small>Keperluan</small>
                <div className="ps-2 fw-bold">{lastPemakaian.keperluan}</div>
              </Col>
            </Row>

            <Row>
              <Col>
                <small>Awal</small>
                <div className="ps-2 fw-bold">{lastPemakaian.km_awal}</div>
              </Col>
              <Col>
                <small>Akhir</small>
                <div className="ps-2 fw-bold">{lastPemakaian.km_akhir}</div>
              </Col>
              <Col>
                <small>Jumlah</small>
                <div className="ps-2 fw-bold">{lastPemakaian.km_pemakaian}</div>
              </Col>
            </Row>

            <div className="text-muted small">
              Dibuat : {convertDate(lastPemakaian.timestamp)}
            </div>
          </Card.Body>
        </Card>
      )}
      <Card className="mb-4">
        <Card.Body>asdsd</Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
