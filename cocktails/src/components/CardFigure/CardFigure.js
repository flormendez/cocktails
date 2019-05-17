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
                <Card key={value.state.cocktail.id} style={{ display: 'flex', flexDirection: 'row'}}>
                  <Card.Img
                    style={{ width: '18rem', height: '18rem'}}

                    variant="top"
                    className="img"
                    src={value.state.cocktail.thumb}
                  />
                  <Card.Body>
                    <Card.Title><h2>{value.state.cocktail.name}</h2></Card.Title>
                    <Card.Text>{<h5>Categoría: {value.state.cocktail.category}</h5>}</Card.Text>
                    <Card.Text>{<h5>Tipo de vaso: {value.state.cocktail.glass}</h5>}</Card.Text>
                    <Card.Text>{<h5>Receta</h5>}</Card.Text>
                    <Card.Text>{value.state.cocktail.recipe}</Card.Text>
                    <Button variant="primary" onClick={() => {
                        this.props.backToList()
                      }}>Back to list</Button>
                 
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
