import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Image,
  Stack,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useKmContext } from "../contexts/KmContext";
import logo from "../images/jeep400.png";
import {
  convertDate,
  convertDateTime,
  convertTime,
} from "../utils/ConvertDateTime";

// import "./Home.css";

const Home = () => {
  const {
    readLastPemakaian,
    readKmBulan,
    readLastKm,
    lastPemakaian,
    lastKm,
    kmBulan,
  } = useKmContext();

  const [bulanIni, setBulanIni] = useState();

  function getBulanIni() {
    let bln = new Date().getMonth();
    setBulanIni(bln + 1);
  }
  useEffect(() => {
    // if (lastPemakaian != null) return console.log("data sudah ada");
    readLastPemakaian();
    readKmBulan();
    readLastKm();

    getBulanIni();
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

      <Link to="/tambah-pemakaian" className="mb-4 d-block text-center">
        <Button variant="primary" className="">
          Tambah Pemakaian
        </Button>
      </Link>

      {lastPemakaian && (
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Pemakaian Terakhir</Card.Title>
            <div className="text-muted small">
              Dibuat : {convertDateTime(lastPemakaian.timestamp)}
            </div>
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
          </Card.Body>
        </Card>
      )}

      <Row>
        <Col>
          <Card className="mb-4 card_satu">
            <Card.Body className="d-flex align-items-start">
              <div>Km Terakhir</div>
              <div
                className="fw-bold text-end card_nilai"
                style={{ fontSize: "2rem" }}
              >
                {lastKm}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-4 card_dua">
            <Card.Body className="d-flex align-items-start">
              <div>Total Km Bulan ini</div>
              <div
                className="fw-bold text-end card_nilai"
                style={{ fontSize: "2rem" }}
              >
                {kmBulan[bulanIni]}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
