import React, { Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar bg="none" expand="lg" className="fixed-top">
        <Navbar.Brand href="#home">SC</Navbar.Brand>
        <Navbar.Toggle className='toggler-right' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse bg="primary"id="basic-navbar-nav">
          <Nav className='ml-auto'>
            <Nav.Link className="page-scroll" href="#about">About</Nav.Link>
            <Nav.Link className="page-scroll" href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;