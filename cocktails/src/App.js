import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

import { Consumer, Provider } from "./Provider/Provider.js";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <NavBar />
          <Layout />
          <Consumer>
            {value => {
              <p>{value.state}</p>
            }}
            
          </Consumer>
        </div>
      </Provider>
    );
  }
}

export default App;
