// Team.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const teamMembers = [
  { name: 'Alice Brown', role: 'CEO', image: 'path/to/image1.jpg' },
  { name: 'Bob Green', role: 'CTO', image: 'path/to/image2.jpg' },
  { name: 'Carol White', role: 'Designer', image: 'path/to/image3.jpg' },
  { name: 'David Black', role: 'Developer', image: 'path/to/image4.jpg' },
];

const Team = () => (
  <Container className="py-5" id="team" height="100vh">
    <Row>
      <Col>
        <h2>Meet Our Team</h2>
      </Col>
    </Row>
    <Row>
      {teamMembers.map((member, index) => (
        <Col md={3} key={index}>
          <Card className="mb-3">
            <Card.Img variant="top" src={member.image} />
            <Card.Body>
              <Card.Title>{member.name}</Card.Title>
              <Card.Text>{member.role}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Team;
