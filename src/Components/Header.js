import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../assets/css/header.scss";
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Navbar expand="lg" className="header-box">
          <Navbar.Brand href="#home">Covid19Bharat</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Essentials</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
