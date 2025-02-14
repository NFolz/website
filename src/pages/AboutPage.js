import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import backgroundImage from '../assets/quantum_headshot.jpg';  // Replace with actual image paths
import educationImage from '../assets/Ivey-Business-School-building.jpg';
import awardsImage from '../assets/AAC.jpg';
import funFactsImage from '../assets/hawaii.jpg';

function About() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">About Me</h1>
      
      {/* Background Section */}
      <Row className="mb-4 align-items-center">
        <Col md={4}>
          <Image 
            src={backgroundImage} 
            alt="Background" 
            fluid 
            rounded 
            style={{ width: '200px', height: '200px', objectFit: 'cover' }} // Same size for all images
          />
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Background</Card.Title>
              <Card.Text>
                I am a software engineer passionate about web development and building amazing user experiences. 
                Here's more about my journey and achievements.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Education Section */}
      <Row className="mb-4 align-items-center flex-row-reverse"> {/* Flip the layout */}
        <Col md={4}>
          <Image 
            src={educationImage} 
            alt="Education" 
            fluid 
            rounded 
            style={{ width: '200px', height: '200px', objectFit: 'cover' }} // Same size for all images
          />
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text>
                I am currently pursuing a dual degree in Software Engineering and Business at Western University. 
                My academic journey has been a blend of technical knowledge and business insight.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Awards Section */}
      <Row className="mb-4 align-items-center">
        <Col md={4}>
          <Image 
            src={awardsImage} 
            alt="Awards" 
            fluid 
            rounded 
            style={{ width: '200px', height: '200px', objectFit: 'cover' }} // Same size for all images
          />
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Awards</Card.Title>
              <Card.Text>
                I have received multiple accolades for my academic performance and leadership roles, including the 
                prestigious J.J. Wettlaufer Scholarship Award.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Fun Facts Section */}
      <Row className="mb-4 align-items-center flex-row-reverse"> {/* Flip the layout */}
        <Col md={4}>
          <Image 
            src={funFactsImage} 
            alt="Fun Facts" 
            fluid 
            rounded 
            style={{ width: '200px', height: '200px', objectFit: 'cover' }} // Same size for all images
          />
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Fun Facts</Card.Title>
              <Card.Text>
                When I'm not coding, you can find me playing volleyball, working on creative side projects, or 
                enjoying a good cup of coffee.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
  );
}

export default About;
