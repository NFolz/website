import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

function Projects() {
  return (
    <Container className="my-5">
      <h1>My Projects</h1>

      {/* Row for cards */}
      <Row>
        {/* Card 1 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>
                This is an example project I worked on. It uses React, Node.js, and MongoDB to build a full-stack application.
              </Card.Text>
              <Button variant="secondary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>
                This is another project I worked on. It uses Express.js and MongoDB to build a RESTful API.
              </Card.Text>
              <Button variant="secondary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>
                A data visualization project built with React and D3.js to create interactive charts and graphs.
              </Card.Text>
              <Button variant="secondary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Project 4</Card.Title>
              <Card.Text>
                A machine learning model built in Python using scikit-learn to predict housing prices based on various factors.
              </Card.Text>
              <Button variant="secondary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 5 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Project 5</Card.Title>
              <Card.Text>
                A mobile app developed using React Native that allows users to track their daily fitness progress.
              </Card.Text>
              <Button variant="secondary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
