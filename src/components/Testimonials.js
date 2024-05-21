// Testimonials.js
import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

const testimonials = [
  { name: 'John Doe', feedback: 'Amazing service and fantastic results!' },
  { name: 'Jane Smith', feedback: 'Highly recommend DigitalCraft Studios.' },
  { name: 'Mike Johnson', feedback: 'Professional and dedicated team.' },
];

const Testimonials = () => {
  const [show, setShow] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShow(true);
  };

  return (
    <Container className="py-5" id="testimonials">
      <Row>
        <Col>
          <h2>What Our Clients Say</h2>
        </Col>
      </Row>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col md={4} key={index}>
            <Button variant="primary" onClick={() => handleShow(testimonial)}>
              {testimonial.name}
            </Button>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Testimonial</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedTestimonial.feedback}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Testimonials;
