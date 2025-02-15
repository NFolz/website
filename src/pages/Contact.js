import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);

    // Store messages locally (temporary solution)
    const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    messages.push(formData);
    localStorage.setItem('contactMessages', JSON.stringify(messages));

    // Clear form
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent! I will check it soon.');
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Contact Me</h1>

      <Row>
        {/* Contact Information */}
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

        {/* LinkedIn + Contact Form */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Connect with Me</Card.Title>
              <Card.Text>
                Let’s connect on LinkedIn!
              </Card.Text>
              <Button 
                variant="primary" 
                href="https://www.linkedin.com/in/nicolas-folz/" 
                target="_blank"
                className="d-flex align-items-center"
              >
                <FaLinkedin size={20} className="me-2" />
                Visit my LinkedIn
              </Button>
            </Card.Body>
          </Card>

          {/* Contact Form */}
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Send Me a Message</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                  />
                </Form.Group>

                <Button type="submit" variant="success">Send Message</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
