<<<<<<< HEAD
import React, { Component } from 'react';
import './App.css';
import moduleName from '../public/'
=======
import React, { Component } from "react";
import Layout from './components/Layout/Layout'
import NavBar from './components/NavBar/NavBar'
import "./App.css";

>>>>>>> 4952b23ae26c840bee4045e3a866d1299207766b
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
