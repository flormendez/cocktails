import React, { Component } from "react";
import Layout from './components/Layout/Layout'
import NavBar from './components/NavBar/NavBar'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
       <Layout />
      </div>
    );
  }
}

export default App;
