import React, { Component } from "react";
import {
  InputGroup,
  Dropdown,
  DropdownButton,
  FormControl,
  Col,
  Form,
  Button
} from "react-bootstrap";
import "./SideBar.css";
import { Consumer } from "../../Provider/Provider";
class SideBar extends Component {
  state = {
    nameValue: "",
    ingredientValue: ""
  };
  handleValueChange = (category, event) => {
    this.setState({
      [category]: event.target.value
    });
  };
  handleSubmit = (category, event) => {};
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>
              <Form
                className="side-bar"
                controlId="validationFormik05"
                float="left"
              >
                <br />

                <DropdownButton
                  onSelect={event => value.getCocktails("filter", "c", event)}
                  as={InputGroup.Prepend}
                  variant="outline-secondary"
                  title="Categorías"
                  id="input-group-dropdown-1"
                >
                  {value.state.categories.map(el => (
                    <Dropdown.Item
                      key={el.index}
                      eventKey={el
                        .replace(/\s/g, "_")
                        .replace(/\//g, "")
                        .replace(/__/g, "_")}
                    >
                      {el}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </Form>

              <br />
              <Form
                className="side-bar"
                controlId="validationFormik05"
                float="left"
              >
                <FormControl
                  placeholder="Buscar por nombre"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  value={this.state.value}
                  onChange={event => this.handleValueChange("nameValue", event)}
                />
                <Button
                  variant="primary"
                  type="submit"
                  onClick={event => {
                    event.preventDefault();
                    console.log(this.state.nameValue);
                    value.getCocktails("search", "s", this.state.nameValue);
                  }}
                >
                  Buscar por nombre
                </Button>
              </Form>
              <br />

              <Form
                className="side-bar"
                controlId="validationFormik05"
                float="left"
              >
                <FormControl
                  placeholder="Buscar por ingrediente"
                  aria-label="ingrediente"
                  aria-describedby="basic-addon1"
                  value={this.state.value}
                  onChange={event =>
                    this.handleValueChange("ingredientValue", event)
                  }
                />
                <Button
                  variant="primary"
                  type="submit"
                  onClick={event => {
                    event.preventDefault();
                    console.log(this.state.ingredientValue);
                    value.getCocktails("search", "i", this.state.ingredientValue);
                  }}
                >
                  Buscar por ingrediente
                </Button>
              </Form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SideBar;
