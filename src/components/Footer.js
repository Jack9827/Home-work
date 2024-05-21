import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3">
    <Container>
      <p>&copy; 2024 DigitalCraft Studios. All Rights Reserved.</p>
      <div>
        <a href="https://www.facebook.com" className="text-white mx-2">Facebook</a>
        <a href="https://www.twitter.com" className="text-white mx-2">Twitter</a>
        <a href="https://www.instagram.com" className="text-white mx-2">Instagram</a>
      </div>
    </Container>
  </footer>
);

export default Footer;
