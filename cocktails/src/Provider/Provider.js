import React, { Component } from "react";

const Context = React.createContext();
const URL = "https://www.thecocktaildb.com/api/json/v1/1/";
class Provider extends Component {
  state = {
    categories: [],
    categoriesLoaded: false,
    ingredients: [],
    ingredientsLoaded: false,
    drinks: [],
    drinksLoaded: false,
    selectedDrink: {}
  };

  getCategories = PATH => {
    fetch(URL + PATH, {
      method: "GET",
      headers: new Headers({})
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          categoriesLoaded: true,
          categories: result.drinks.map(e => e.strCategory)
        });
      })
      .catch(error => {
        this.setState({
          error
        });
      });
  };
  getIngredients = PATH => {
    fetch(URL + PATH, {
      method: "GET",
      headers: new Headers({})
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          categoriesIngredients: true,
          ingredients: result.drinks.map(e => e.strIngredient1)
        });
        console.log("antes")
      })
      .then(console.log("despues"))
      .catch(error => {
        this.setState({
          error
        });
      });
  };
 
  componentDidMount() {
    this.getCategories("list.php?c=list");
    this.getIngredients("list.php?i=list");
  }
  render() {

    return (
      <Context.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
const Consumer = Context.Consumer;
export { Consumer, Provider };
