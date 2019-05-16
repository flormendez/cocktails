import React, { Component } from 'react';
import Figure from "../CardFigure/CardFigure";
import Cocktails from "../Cocktails/Cocktails"
import "./Main.css"

export class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Figure />
        <Cocktails />
      </div>
    )
  }
}

export default Main
