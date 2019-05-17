import React, { Component } from 'react';
import Cocktails from "../Cocktails/Cocktails"
import CardFigure from "../CardFigure/CardFigure"


import "./Main.css"

export class Main extends Component {
  state = {
    showList: true
  }

  toggleList = () => {
    this.setState({showList : !this.state.showList})
  }

  render() {
    return (
      <div className="mainContainer">
      {this.state.showList ? <Cocktails toggleList={this.toggleList} /> : <CardFigure />}
      </div>
    )
  }
}

export default Main
