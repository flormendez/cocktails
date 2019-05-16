import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button
  } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Cocktails</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar
