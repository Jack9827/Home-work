// Services.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
  { title: 'Web Design', description: 'Beautiful and responsive web design.' },
  { title: 'Development', description: 'High-performance web development services.' },
  { title: 'SEO', description: 'Optimizing your site for search engines.' },
  { title: 'Marketing', description: 'Effective digital marketing strategies.' },
];

const Services = () => (
  <Container className="py-5" id="services" height="100vh">
    <Row>
      <Col>
        <h2>Our Services</h2>
      </Col>
    </Row>
    <Row>
      {services.map((service, index) => (
        <Col md={3} key={index}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Services;
