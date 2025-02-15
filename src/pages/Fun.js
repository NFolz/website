import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";

const Fun = () => {
  return (
    <Container className="mt-5">
      <h2>Fun</h2>

      {/* Page Description */}
      <Card className="my-4">
        <Card.Body>
          <Card.Title className="fw-bold">About This Page</Card.Title>
          <Card.Text>
            Welcome to my fun page! Here, I share events I've attended, books I'm reading, and songs I've been learning on the ukulele.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Recent Events */}
      <h3>Recent Events</h3>
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Mona Sabet Speaker Series</Card.Title>
              <Card.Subtitle className="text-muted">Ivey Entrepreneurship Speaker Series, February 2025</Card.Subtitle>
              <Card.Text>Attended an entrepreneurship conference with Mona Sabet as the keynote speaker. Learned about the mistakes entrepreneurs make, and ways to solve them.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Volleyball Senior's Night</Card.Title>
              <Card.Subtitle className="text-muted">Alumni Hall, Februaru 2025</Card.Subtitle>
              <Card.Text>Had my volleyball team's seniors night, where myself and three other graduating teammates were recognized, before facing off against Windsor.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Trip to Hawai'i</Card.Title>
              <Card.Subtitle className="text-muted">December - 2024</Card.Subtitle>
              <Card.Text>Took a family trip to Hawai'i over the Christmas break, celebrating my parents' 25th wedding anniversary. Great hikes and amazing beaches.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Books I've Read */}
      <h3>Book Review</h3>
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Never Play it Safe</Card.Title>
              <Card.Subtitle className="text-muted">by I forget</Card.Subtitle>
              <Card.Text>
                I love the seven levers presented to never play it safe: Time, Failure, Practice, etc...
                <a href="https://www.goodreads.com/book/show/5907.The_Alchemist" target="_blank" rel="noopener noreferrer"> Read more</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>A Short History of the World</Card.Title>
              <Card.Subtitle className="text-muted">by H.G. Wells</Card.Subtitle>
              <Card.Text>
                Satisfied my curiosity about humanity's humble beginnings, and how historic events have shaped modern society. I would suggest it to anyone curious about human history!
                <a href="https://www.goodreads.com/book/show/4069.Meditations" target="_blank" rel="noopener noreferrer"> Read more</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>The Intelligent Investor</Card.Title>
              <Card.Subtitle className="text-muted">By someone Green</Card.Subtitle>
              <Card.Text>
                Classic finance book. My new foundation for personal investing. 
                <a href="https://www.goodreads.com/book/show/41881472-atomic-habits" target="_blank" rel="noopener noreferrer"> Read more</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Ukulele Songs */}
      <h3>Ukulele Songs I'm Learning</h3>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>A Message</Card.Title>
              <Card.Subtitle className="text-muted">Coldplay</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Good Life</Card.Title>
              <Card.Subtitle className="text-muted">One Republic</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Somewhere Over the Rainbow</Card.Title>
              <Card.Subtitle className="text-muted">Israel Kamakawiwo'ole</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Fun;
