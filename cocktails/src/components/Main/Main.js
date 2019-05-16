import React, { Component } from 'react';
import Figure from "../CardFigure/CardFigure";
import "./Main.css"

export class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Figure />
      </div>
    )
  }
}

export default Main
