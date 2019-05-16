import React, { Component } from "react";
import Layout from '../components/Layout/Layout'
import NavBar from '../components/NavBar/NavBar'
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';


class App extends Component {
  
  

  render() {
    library.add(faStroopwafel)
    return (
      <div className="App">
       <NavBar />
       <Layout />
      </div>
    );
  }
}

export default App;
