import {} from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <h1>Jeep Apps</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Link to="/tambah-pemakaian-baru">
          <Button variant="primary" className="md:w-100">
            Tambah Pemakaian Baru
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default Home;
