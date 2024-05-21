// Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="#home">DigitalCraft Studios</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/testimonials">Testimonials</Nav.Link>
        <Nav.Link href="/team">Team</Nav.Link>
        <Nav.Link href="/gallery">Gallery</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarComponent;
