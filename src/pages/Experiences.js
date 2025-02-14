import React from 'react';
import { Card, Col, Row, Image } from 'react-bootstrap';
import volleyball from '../assets/volleyball.jpg';  // Replace with actual image paths
import quantumgroup from '../assets/quantum_team.jpg';
import movember from '../assets/movember.jpg';
import p2p from '../assets/p2p.jpg';
import osl from '../assets/osl.png';
import vball from '../assets/Volleyball_Training.png';

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
                <Card.Title>Varsity Volleyball Team Captain</Card.Title>
                <Card.Text>
                  Worked as a volunteer at XYZ organization, managing events and assisting with community outreach programs.
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
                <Card.Title>Co-Founder, Western Quantum Club</Card.Title>
                <Card.Text>
                  Led the ABC club, organized weekly meetings, and worked to create engaging activities for club members.
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
                <Card.Title>VP Movember, Mustang Athlete Student Council</Card.Title>
                <Card.Text>
                  Acted as a mentor for incoming students, offering advice and guidance to help them navigate university life.
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
                <Card.Title>Finance & Operations Intern, Pillar to Post</Card.Title>
                <Card.Text>
                  Worked on developing internal tools using React and JavaScript to automate and streamline business processes.
                </Card.Text>
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
                <Card.Title>Finance Intern</Card.Title>
                <Card.Text>
                  Conducted data analysis to optimize franchise recruitment processes, creating automated reports and dashboards.
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
                <Card.Title>Volleyball Coach</Card.Title>
                <Card.Text>
                  Managed a team of developers to build and launch a new internal platform, improving cross-department collaboration.
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
