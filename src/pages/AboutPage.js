import React from 'react';
import { Container, Row, Col, Card, Image, ListGroup } from 'react-bootstrap';
import backgroundImage from '../assets/quantum_headshot.jpg';  // Replace with actual image paths
import educationImage from '../assets/Ivey-Business-School-building.jpg';
import awardsImage from '../assets/AAC.jpg';
import funFactsImage from '../assets/hiking.jpg';

const awards = [
  {
    category: "Academic Awards",
    items: [
      { name: "Dean's Honour List (2022-2024)", link: null },
      { name: "J.J. Wettlaufer Award (2024)", link: "https://www.ivey.uwo.ca/hba/admissions/tuition-finances/award-finder/?ft_page=4" },
      { name: "Western Admission Scholarship (2021)", link: null }
    ]
  },
  {
    category: "Athletic Awards",
    items: [
      { name: "Academic All-Canadian (2022-2024)", link: null },
      { name: "Vaughn J. Peckham Volleyball Scholarship (2021-2024)", link: null },
      { name: "Ken Davies Memorial Award (2021)", link: "https://www.ontariovolleyball.org/news_article/show/1163575-nicolas-folz-recognized-as-the-2021-ken-davies-memorial-award-recipient" }
    ]
  }
];

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
              <Card.Title className="fw-bold">Background</Card.Title>
              <Card.Text>
                I was born and raised in Ottawa, Canada, where I attended full French schooling from K-12. In 2021, I was accepted to Western University, where I could pursue my passions for technology, business, and volleyball.
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
              <Card.Title className="fw-bold">Education</Card.Title>
              <Card.Text>
                I am currently pursuing a dual-degree in software engineering and business at the Ivey Business School at Western University. I began my journey in 2021, and plan to graduate my five-year program in April of 2026.

                My favorite courses so far have been Finance, Strategy, Operations, Computer Networks, Quantum Computing, and Calculus. I'm looking forward to my Engineering Capstone Project and Corporations in Society!
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
                <Card.Title className="fw-bold">Awards</Card.Title>
              {awards.map((category, index) => (
                <div key={index}>
                  <h5>{category.category}</h5>
                  <ListGroup variant="flush">
                    {category.items.map((award, idx) => (
                      <ListGroup.Item key={idx}>
                        {award.link ? (
                          <a href={award.link} target="_blank" rel="noopener noreferrer">
                            {award.name}
                          </a>
                        ) : (
                          award.name
                        )}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              ))}
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
              <Card.Title className="fw-bold">Fun Facts</Card.Title>
              <Card.Text>
                When I'm not studying, coding, or playing volleyball, you can find me hiking, refining my ukelele skills, or playing Catan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
  );
}

export default About;
