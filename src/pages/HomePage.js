import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import headshot from '../assets/Ivey_Headshot.jpg';  // Make sure to place your image in the correct path

const HomePage = () => {
  return (
    <Container fluid className="my-5">
      <Row className="align-items-center" style={{ minHeight: '100vh' }}>
        {/* Headshot Column */}
        <Col md={6} className="text-center">
          <Image
            src={headshot}
            alt="Nicolas Folz"
            roundedCircle
            fluid
            style={{
              maxWidth: '350px',
              maxHeight: '350px',
              marginBottom: '30px',
            }}
          />
        </Col>

        {/* Welcome Message Column */}
        <Col md={6}>
          <Card style={{ height: '100%' }}>
            <Card.Body>
              <Card.Title style={{ fontSize: '3rem' }}>Welcome to My Website!</Card.Title>
              <Card.Text style={{ fontSize: '1.25rem' }}>
                Hi, I'm <strong>Nicolas Folz</strong>. Welcome to my personal website! I'm a undergraduate student passionate about all things at the intersection of business, technology, and entrepreneurship. You can read more about myself, my experiences, projects, and ways to get in touch! This website is a work-in-progess, and any feedback would be greatly appreciated.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
