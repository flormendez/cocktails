import React, { Component } from 'react';
import { Figure } from 'react-bootstrap';


class CardFigure extends Component {
  render() {
    return (
  
    <Figure className="figCard">
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="holder.js/171x180"
  />
  <Figure.Caption>
  Acá iría la imagen random/ las coincidencias de las búsquedas
    </Figure.Caption>
</Figure>

        
      
    )
  }
}

export default CardFigure
