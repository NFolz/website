import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="py-3">
      <Container fluid>
        <Row className="w-100 align-items-center">
          {/* Left-aligned brand */}
          <Col xs={3} sm={2} md={2} lg={2} xl={2} className="text-start">
            <Navbar.Brand as={Link} to="/" className="fw-bold">
              Nicolas Folz
            </Navbar.Brand>
          </Col>

          {/* Spacing column */}
          <Col xs={1} sm={2} md={2} lg={2} xl={2}></Col>

          {/* Right-aligned links, evenly spaced */}
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="d-flex justify-content-between w-100">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="/experiences">Experiences</Nav.Link>
                <Nav.Link as={Link} to="/fun">Fun</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
