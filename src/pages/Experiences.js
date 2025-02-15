import React from 'react';
import { Card, Col, Row, Image } from 'react-bootstrap';
import volleyball from '../assets/volleyball.jpg';  // Replace with actual image paths
import quantumgroup from '../assets/quantum_team.jpg';
import movember from '../assets/movember.jpg';
import p2p from '../assets/p2p.jpg';
import osl from '../assets/osl.png';
import vball from '../assets/Volleyball_Training.png';
import StockTicker from "../components/stockPrice";  // Import the StockTicker component

const Experiences = () => {
  return (
    <div className="container mt-5">
      <h2>Experiences</h2>

      {/* Extracurricular Experiences */}
      <div className="my-5">
        <h3>Extra-Curricular Experiences</h3>
        <Row>
          <Col md={4}>
            <Card>
              <Image 
                src={volleyball} 
                alt="Varsity Volleyball Team Captain" 
                fluid 
                rounded 
                style={{ height: '200px', objectFit: 'cover' }} // Image styling
              />
              <Card.Body>
                <Card.Title className="fw-bold">Captain</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Western Varsity Men's Volleyball Team, 2021-present</Card.Subtitle>
                <Card.Text>
                  Named team captain in my fourth year by coaches, teammates, and alumni. I'm actively placing a special emphasis on humility, mental training practices, and academic excellence habits, adding to an already rich program culture.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Image 
                src={quantumgroup} 
                alt="President of ABC Club" 
                fluid 
                rounded 
                style={{ height: '200px', objectFit: 'cover' }} // Image styling
              />
              <Card.Body>
                <Card.Title className="fw-bold">Co-Founder & Co-President</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Western Quantum Club, 2022-present</Card.Subtitle>
                <Card.Text>
                  Led the strategic vision of the club, which seeks to educate and inspire undergraduate students in the exciting field of quantum computing. I've collaborated with academia, industry experts, and corporate sponsors to deliver a pioneering quantum computing club experience to all members by organizing hackathons and managing client projects.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Image 
                src={movember} 
                alt="VP, Movember Campaign" 
                fluid 
                rounded 
                style={{ height: '200px', objectFit: 'cover' }} // Image styling
              />
              <Card.Body>
                <Card.Title className="fw-bold">VP - Movember Initiatives</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Mustang Athlete Student Council, 2024-present</Card.Subtitle>
                <Card.Text>
                    Organized a campus-wide Movember campaign to raise awareness for men's health. I collaborated with 14 varsity teams and raised over $7,000 for the cause. I even got the chance to interview Canadian Olympic Champion Damian Warner while I was at it!  
                    <a> </a>
                    <a href="https://www.linkedin.com/posts/nicolas-folz_this-movember-together-with-the-mustangs-activity-7268772083604537344-zRXH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADecxnYBokYS18lPZjyzXnOnwaqhSTeZFt8" target="_blank" rel="noopener noreferrer">Watch our promotional video here.</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Work Experiences */}
      <div>
        <h3>Work Experiences</h3>
        <Row>
          <Col md={4}>
            <Card>
              <Image 
                src={p2p} 
                alt="Finance & Operations Intern" 
                fluid 
                rounded 
                style={{ height: '200px', objectFit: 'cover' }} // Image styling
              />
              <Card.Body>
              <Card.Title className="fw-bold">Finance & Operations Intern</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Pillar to Post, May-October 2024</Card.Subtitle>
                <Card.Text>
                  Optimized the franchisee recruitment process by drawing insights from surveys, financial performance, and market reports, enhancing the new executive franchisee recruitment model. Met with various stakeholders to design a new chart of accounts and financial reporting tool, creating automated reports and dashboards. Streamlined complex accounting processes using VBA.
                </Card.Text>
                <StockTicker symbol="FSV.TO" /> 
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Image 
                src={osl} 
                alt="Data Analyst Intern" 
                fluid 
                rounded 
                style={{ height: '200px', objectFit: 'cover' }} // Image styling
              />
              <Card.Body>
              <Card.Title className="fw-bold">Finance Intern</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">OSL Retail Services, May-September 2023</Card.Subtitle>
                <Card.Text>
                  Conducted data analysis and worked with an international, cross-functional team to claim over $1M from international duty drawbacks for a retail subsidiary.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Image 
                src={vball} 
                alt="Tutor" 
                fluid 
                rounded 
                style={{ height: '200px', objectFit: 'cover' }} // Image styling
              />
              <Card.Body>
              <Card.Title className="fw-bold">Academic Tutor</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Self-Employed, 2020-present</Card.Subtitle>
                <Card.Text>
                  Entrepreneurial venture that provides tutoring services for high-school and university students, specializing in Algebra, Calculus, Physics, and Chemistry.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Experiences;
