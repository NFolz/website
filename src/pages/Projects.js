import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

function Projects() {
  return (
    <Container className="my-5">
      <h1>My Projects</h1>

      {/* Row for cards */}
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold">Vehicle Routing Optimization App</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Western Quantum Club, 2024-present</Card.Subtitle>
              <Card.Text>
                Led the development of a vehicle routing application, optimized using quantum computing. See our code and our business pitch.
              </Card.Text>
              <Button variant="secondary" href="https://example.com" target="_blank">
          Learn More
        </Button>
            </Card.Body>
          </Card>
        </Col>



        {/* Card 2 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
            <Card.Title className="fw-bold">Travel Destinations Web App</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Web Technologies Course, 2024</Card.Subtitle>
              <Card.Text>
                Used a MERN stack with a RESTful API that allows users to plan their European travels.
              </Card.Text>
              <Button variant="secondary" href="https://example.com" target="_blank">
          Learn More
        </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
            <Card.Title className="fw-bold">Portfolio Optimization Program</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Western Quantum Club, 2024</Card.Subtitle>
              <Card.Text>
                An equity portfolio builder that uses a novel quantum computing algorithm that optimizes for low risk and high returns.
              </Card.Text>
              <Button variant="secondary" href="https://example.com" target="_blank">
          Learn More
        </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
            <Card.Title className="fw-bold">Optomology Healthcare App</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Software Design, 2025-present</Card.Subtitle>
              <Card.Text>
                Working with an international client to develop an app that safely collects optomological patient data to prevent the spread of eye diseases.
              </Card.Text>
              <Button variant="secondary" href="https://example.com" target="_blank">
          Learn More
        </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
