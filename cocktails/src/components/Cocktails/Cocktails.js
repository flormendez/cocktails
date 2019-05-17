import React, { Component } from 'react';
import {Card, CardColumns, CardDeck, CardGroup} from 'react-bootstrap';
import { Consumer } from "../../Provider/Provider";


export class Cocktails extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>
    <CardGroup> 
    <CardColumns>
        {value.state.cocktails.map(el => (
    
    
    <Card key={el.id} onClick={()=>{
      this.props.toggleList();
      value.getCocktail(el.id); 
    }}>
      <Card.Img variant="top" className="img" src={el.thumb}/>
      {console.log(el.thumb)}
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.category}
        </Card.Text>
      </Card.Body>
    </Card>


    ))}    
    </CardColumns>
    </CardGroup>

      </div>
          );
        }}
      </Consumer>
    )
  }
}

export default Cocktails
