import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import hawaii from '../assets/hawaii.jpg';
import seniornight from '../assets/seniornight.jpg';
import speakerseries from '../assets/speaker_series.jpg';
import neverplayitsafe from '../assets/neverplayitsafe.jpg';
import ashorthistory from '../assets/ashorthistoryoftheworld.jpg';
import intelligentinvestor from '../assets/intelligentinvestor.jpg';
import natsPic from '../assets/natsPlayingPic.jpg';

const Fun = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-5">Fun</h1>
      {/* Recent Events */}
      <h2>Recent Events</h2>
      <Row className="mb-4">
      <Col md={4}>
          <Card>
            <Card.Img variant="top" src={natsPic} />
            <Card.Body>
              <Card.Title>USports National Championship</Card.Title>
              <Card.Subtitle className="text-muted">March 2025</Card.Subtitle>
              <Card.Text>Travelled to Brandon, Manitoba with the Western Men's Volleyball Team to compete for the national title after qualifying with a Bronze medal finish in the OUA.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={speakerseries} />
            <Card.Body>
              <Card.Title>Mona Sabet Speaker Series</Card.Title>
              <Card.Subtitle className="text-muted">Ivey Entrepreneurship Speaker Series, February 2025</Card.Subtitle>
              <Card.Text>Attended an entrepreneurship conference with Mona Sabet as the keynote speaker. Learned about the mistakes entrepreneurs make, and ways to solve them.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={seniornight} />
            <Card.Body>
              <Card.Title>Volleyball Senior's Night</Card.Title>
              <Card.Subtitle className="text-muted">Alumni Hall, February 2025</Card.Subtitle>
              <Card.Text>Had my volleyball team's seniors night, where myself and three other graduating teammates were recognized, before facing off against Windsor.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Books I've Read */}
      <h3>Book Review</h3>
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={neverplayitsafe} />
            <Card.Body>
              <Card.Title>Never Play it Safe</Card.Title>
              <Card.Subtitle className="text-muted">by Chase Jarvis</Card.Subtitle>
              <Card.Text>
                I love the seven levers Chase povided as ways to never play it safe: constrains, failure, attention, time, play, practice, and intuition.
                <a> </a>
                <a href="https://www.goodreads.com/book/show/208844770-never-play-it-safe" target="_blank" rel="noopener noreferrer"> Read more</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={ashorthistory} />
            <Card.Body>
              <Card.Title>A Short History of the World</Card.Title>
              <Card.Subtitle className="text-muted">by H.G. Wells</Card.Subtitle>
              <Card.Text>
                Satisfied my curiosity about humanity's humble beginnings, and how historic events have shaped modern society. I would suggest it to anyone curious about human history!
                <a> </a>
                <a href="https://www.goodreads.com/en/book/show/718477.A_Short_History_of_the_World" target="_blank" rel="noopener noreferrer"> Read more</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={intelligentinvestor} />
            <Card.Body>
              <Card.Title>The Intelligent Investor</Card.Title>
              <Card.Subtitle className="text-muted">By Benjamin Graham</Card.Subtitle>
              <Card.Text>
                Classic finance book. My new foundation for personal investing. 
                <a> </a>
                <a href="https://www.goodreads.com/book/show/106835.The_Intelligent_Investor" target="_blank" rel="noopener noreferrer"> Read more</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Fun;