import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import headshot from "../assets/Ivey_Headshot.jpg"; // Ensure correct image path

const HomePage = () => {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="align-items-center w-100">
        {/* Headshot Column */}
        <Col md={5} className="text-center">
          <Image
            src={headshot}
            alt="Nicolas Folz"
            roundedCircle
            fluid
            className="shadow-lg"
            style={{ maxWidth: "500px", maxHeight: "500px" }}
          />
        </Col>

        {/* Welcome Message Column */}
        <Col md={7}>
          <Card className="border-0 shadow-lg p-4">
            <Card.Body>
              <Card.Title className="fw-bold" style={{ fontSize: "2.5rem" }}>
                Welcome to My Website!
              </Card.Title>
              <Card.Text className="mt-3" style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
                Hey! I'm <strong>Nicolas Folz</strong>. I'm an undergraduate student passionate
                about the intersection of business, technology, and entrepreneurship. 
                Here, you'll find insights into my experiences, projects, and more.
                This website is a work in progress; your feedback is appreciated!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
