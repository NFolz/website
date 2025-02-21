import React from 'react';
import { Container, Card, Button, Row, Col, Image } from 'react-bootstrap';
import vrp from '../assets/vrp.png';
import qpo from '../assets/qpo.png';
import webtech from '../assets/webtech.png';
import shaimaa from '../assets/shaimaa.png';

function Projects() {
  const projects = [
    {
      title: "Vehicle Routing Optimization App",
      subtitle: "Western Quantum Club, 2024-present",
      description: "Led the development of a vehicle routing application for local distribution companies optimized using quantum computing. My team is planning to pitch the business idea later this semester!",
      image: vrp,
      link: "https://github.com/JakeNizio/QLO_Demo"
    },
    {
      title: "Portfolio Optimization Algorithm",
      subtitle: "Western Quantum Club, 2024",
      description: "Developed an equity portfolio builder that uses a novel quantum computing algorithm that optimizes for low risk and high returns.",
      image: qpo,
      link: "https://github.com/NFolz/QuantumPortfolioOptimization"
    },
    {
      title: "Travel Destinations Web App",
      subtitle: "Web Technologies Course, 2024",
      description: "Used a MERN stack with a RESTful API to build a web app that allows users to plan their European travels.",
      image: webtech,
      link: "https://github.com/Western-Webtech/lab-4-NFolz"
    },
    {
      title: "Ophthalmology Healthcare App",
      subtitle: "Software Design, 2025-present",
      description: "Working with an international client to develop an app that safely collects ophthalmological patient data to prevent the spread of eye diseases.",
      image: shaimaa,
      link: "https://github.com/ShaimaaAliECE/group-project-se3350-group35"
    }
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Projects</h1>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="h-100">
              <Image src={project.image} alt={project.title} fluid rounded className="p-3" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="fw-bold">{project.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{project.subtitle}</Card.Subtitle>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="secondary" href={project.link} target="_blank">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
