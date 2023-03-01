import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import './Navbar.css';

export const CustomNavbar = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Studio Andreza Mocelin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100">
            <Nav.Link className="ms-auto" href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Quem somos</Nav.Link>
            <NavDropdown title="Serviços" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pilates</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Treinamento Funcional</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hipopressivo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Massagens</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
