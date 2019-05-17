import React, { Component } from "react";

const Context = React.createContext();
const URL = "https://www.thecocktaildb.com/api/json/v1/1/";
class Provider extends Component {
  state = {
    categories: [],
    categoriesLoaded: false,
    ingredients: [],
    ingredientsLoaded: false,
    cocktails: [],
    cocktailsLoaded: false,
    cocktail: null,
    cocktailLoaded: false,
  };

  getCategories = () => {
    fetch(URL + "list.php?c=list", {
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
  getIngredients = () => {
    fetch(URL + "list.php?i=list", {
      method: "GET",
      headers: new Headers({})
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          categoriesIngredients: true,
          ingredients: result.drinks.map(e => e.strIngredient1)
        });
      })
      .catch(error => {
        this.setState({
          error
        });
      });
  };
  getCocktails = (field, name) => {
    this.setState({
      cocktailsLoaded: false
    })
    fetch(URL + "search.php?"+field+"=" + name, {
      method: "GET",
      headers: new Headers({})
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          cocktailsLoaded: true,
          cocktails: result.drinks.map(el=>{ return {
            id: el.idDrink,
            name: el.strDrink,
            category: el.strCategory,
            thumb: el.strDrinkThumb,
            ingredient: el.strIngredient1
          }})
        });
      })
      .catch(error => {
        this.setState({
          error
        });
      });
  };
  getCocktail = id => {
    this.setState({
      cocktailLoaded: false
    })
    fetch(URL + "lookup.php?i=" + id, {
      method: "GET",
      headers: new Headers({})
    })
      .then(res => res.json())
      .then(result => {
        let drink = result.drinks[0];
        this.setState({
          cocktailLoaded: true,
          cocktail: {
            id: drink.idDrink,
            name: drink.strDrink,
            category: drink.strCategory,
            thumb: drink.strDrinkThumb,
            glass: drink.strGlass,
            recipe: drink.strInstructions
          }
        });
      })
      .catch(error => {
        this.setState({
          error
        });
      });
  };

  componentDidMount() {
    this.getCategories();
    this.getIngredients();
    this.getCocktails ("s","margarita");
    this.getCocktail("17216");
  }

  render() {

    return (
      <Context.Provider
        value={{
          state: this.state,
          getCocktail: this.getCocktail,
          getCocktails: this.getCocktails
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;
export { Consumer, Provider };
