import React, { Component } from 'react';
import {Card, CardColumns} from 'react-bootstrap';
import { Consumer } from "../../Provider/Provider";

export class Cocktails extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>
    
    {value.state.categories.map(el => (
                <Card.Body key={el.index} href="#">
                      {el}
                    </Card.Body>
                  ))}
      </div>
          );
        }}
      </Consumer>
    )
  }
}

export default Cocktails
