import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Row
  } from "react-bootstrap";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faHome, faCocktail } from "@fortawesome/free-solid-svg-icons";
  import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
        {/* <h1><FontAwesomeIcon icon={faCoffee}/></h1> */}
        <Row className="logo">
        <FontAwesomeIcon icon={faCocktail} />
        &nbsp;
        <h5>Cocktail app</h5>
        </Row>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>        

        <Form inline className="formButtons">
        <Button variant="outline-info" className="logIn">Log In </Button>&nbsp;
        <Button variant="outline-info" className="signUp"> Sign Up </Button>
        </Form>

      </Navbar>
    )
  }
}

export default NavBar
