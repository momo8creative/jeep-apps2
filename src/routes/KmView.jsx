import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useKmContext } from "../contexts/KmContext";

const KmView = () => {
  const { readPemakaian, pemakaian } = useKmContext();

  useEffect(() => {
    readPemakaian();
  }, []);
  //
  return (
    <Container className="bg-light">
      <h1 className="py-4">Data Pemakaian Jeep</h1>
      {pemakaian.map((data) => (
        <Card key={data.id} className="my-2">
          <Card.Body>
            <h6>ID : {data.id}</h6>
            <Row>
              <Col>
                <div>Km Awal</div>
                <h6>{data.km_awal}</h6>
              </Col>
              <Col>
                <div>Km Akhir</div>
                <h6>{data.km_akhir}</h6>
              </Col>
              <Col>
                <div>Km Jumlah</div>
                <h6>{data.km_pemakaian}</h6>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default KmView;
