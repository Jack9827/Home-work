// Home.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home = () => (
  <Container fluid className="home-container text-center d-flex align-items-center justify-content-center" id="home" height="100vh">
    <div>
      <h1>Welcome to DigitalCraft Studios</h1>
      <p>Your one-stop solution for all digital needs.</p>
      <Button variant="primary" href="#about">Learn More</Button>
    </div>
  </Container>
);

export default Home;
