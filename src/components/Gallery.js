// Gallery.js
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const projectImages = [
  { src: 'path/to/project1.jpg', alt: 'Project 1' },
  { src: 'path/to/project2.jpg', alt: 'Project 2' },
  { src: 'path/to/project3.jpg', alt: 'Project 3' },
];

const Gallery = () => (
  <Container className="py-5" id="gallery" height="100vh">
    <Row>
      <Col>
        <h2>Our Projects</h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <Carousel>
          {projectImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image.src}
                alt={image.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  </Container>
);

export default Gallery;
