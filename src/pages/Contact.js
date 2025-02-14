import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Contact Me</h1>

      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Contact Information</Card.Title>
              <Card.Text>
                <strong>Email:</strong> example@example.com
              </Card.Text>
              <Card.Text>
                <strong>Phone:</strong> +1 234 567 890
              </Card.Text>
              <Card.Text>
                <strong>Location:</strong> Western University, Canada
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Connect with Me</Card.Title>
              <Card.Text>
                I would love to connect with you! Feel free to reach out to me via email, phone, or connect with me on LinkedIn.
              </Card.Text>
              <Button 
                variant="primary" 
                href="https://www.linkedin.com/in/nicolas-folz/" 
                target="_blank"
              >
                Visit my LinkedIn Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
