import React, { Component } from 'react';
import { InputGroup, Dropdown, DropdownButton, FormControl, Col, Form } from 'react-bootstrap';
import './SideBar.css'

class SideBar extends Component {
  render() {
    return (
      <div>

    <Form.Group className="side-bar" controlId="validationFormik05" float="left">
              <br />

    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Categorías"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Ordinary Drink</Dropdown.Item>
      <Dropdown.Item href="#">Cocktail </Dropdown.Item>
      <Dropdown.Item href="#">Milk - Shake</Dropdown.Item>
      <Dropdown.Item href="#">Licores </Dropdown.Item>
      <Dropdown.Item href="#">Tragos de fiesta</Dropdown.Item>
      <Dropdown.Item href="#">Cervezas</Dropdown.Item>
      <Dropdown.Item href="#">Suaves</Dropdown.Item>

    </DropdownButton>
      <br />
    <FormControl
      placeholder="Buscar por nombre"
      aria-label="name"
      aria-describedby="basic-addon1"
    />
            <br />

      <FormControl
      placeholder="Buscar por ingrediente"
      aria-label="ingrediente"
      aria-describedby="basic-addon1"
    />

    </Form.Group>
      </div>

    )
  }
}

export default SideBar
