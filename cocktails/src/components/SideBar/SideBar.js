import React, { Component } from "react";
import {
  InputGroup,
  Dropdown,
  DropdownButton,
  FormControl,
  Col,
  Form
} from "react-bootstrap";
import "./SideBar.css";
import { Consumer } from "../../Provider/Provider";
class SideBar extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>
              <Form.Group
                className="side-bar"
                controlId="validationFormik05"
                float="left"
              >
                <br />

                <DropdownButton
                  as={InputGroup.Prepend}
                  variant="outline-secondary"
                  title="Categorías"
                  id="input-group-dropdown-1"
                >
                  {value.state.categories.map(el => (
                    <Dropdown.Item key={el.index} href="#">
                      {el}
                    </Dropdown.Item>
                  ))}
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
          );
        }}
      </Consumer>
    );
  }
}

export default SideBar;
