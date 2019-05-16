import React, { Component } from 'react';
import { InputGroup, Dropdown, DropdownButton, FormControl } from 'react-bootstrap';


class SideBar extends Component {
  render() {
    return (
      <div>
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
      </div>

    )
  }
}

export default SideBar
