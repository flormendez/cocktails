import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Consumer } from "../../Provider/Provider";

class CardFigure extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>
              {" "}
              {value.state.cocktailLoaded ? (
                <Card key={value.state.cocktail.id}>
                  <Card.Img
                    variant="top"
                    className="img"
                    src={value.state.cocktail.thumb}
                  />
                  {console.log(value.state.cocktail.thumb)}
                  <Card.Body>
                    <Card.Title>{value.state.cocktail.name}</Card.Title>
                    <Card.Text>{value.state.cocktail.category}</Card.Text>
                  </Card.Body>
                </Card>
              ) : (
                "Not LOADED"
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default CardFigure;
