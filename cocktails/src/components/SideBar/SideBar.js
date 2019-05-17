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
    ingredientValue: "",
    ingredientButton: false,
    nameButton: false
  };
  handleValueChange = (category, event) => {
    this.setState({
      [category]: event.target.value
    });
  };
  showButton = (button) => {
    this.setState({
        [button] : true
    })
  };
  hideButton = (button) => {
    this.setState({
        [button] : false
    })
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
                  onFocus={()=>this.showButton("nameButton")}
                  onBlur={()=>this.hideButton("nameButton")}
                />
                {this.state.nameButton ? 
                <Button
                  variant="primary"
                  type="submit"
                  onClick={event => {
                    event.preventDefault();
                    value.getCocktails("search", "s", this.state.nameValue);
                  }}
                >
                  Buscar por nombre
                </Button>: "" }
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
                  onFocus={()=>this.showButton("ingredientButton")}
                  onBlur={()=>this.hideButton("ingredientButton")}
                />
                 {this.state.ingredientButton ? 
                <Button
                  variant="primary"
                  type="submit"
                  onClick={event => {
                    event.preventDefault();
                    value.getCocktails("filter", "i", this.state.ingredientValue);
                  }}
                >
                  Buscar por ingrediente
                </Button> : ""}
              </Form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SideBar;
