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
                controlid="validationFormik05"
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
                  {value.state.categories.map((el) => (
                    <Dropdown.Item
                      key={Math.random()}
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
                controlid="validationFormik05"
                float="left"
              >
                <FormControl
                  list="nombres"
                  placeholder="Buscar por nombre"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  value={this.state.value}
                  onChange={event => this.handleValueChange("nameValue", event)}
                  onFocus={()=>this.showButton("nameButton")}
                  onBlur={()=>this.hideButton("nameButton")}
                />
                  <datalist id="nombres">
                    {value.state.namesList.map(el => (
                      <option value={el} />
                    ))}
                  </datalist>
           
                {this.state.nameButton ? 
                <Button
                 className="inputButton"
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
                controlid="validationFormik05"
                float="left"
              >
                <FormControl
                 list="ingredients"
                  placeholder="Buscar por ingrediente"
                  aria-label="ingrediente"
                  aria-describedby="basic-addon1"
                  value={this.state.value}
                  onChange={event =>
                    this.handleValueChange("ingredientValue", event)
                  }
                  onFocus={()=>this.showButton("ingredientButton")}
                  onBlur={()=>this.hideButton("ingredientButton")}
                />   <datalist id="ingredients">
                {value.state.ingredients.map(el => (
                  <option value={el} />
                ))}
              </datalist>
                 {this.state.ingredientButton ? 
                <Button
                  className="inputButton"
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
