import React, { Component } from "react";

import NavBar from "./Components/navBar";

import MainRouter from "./RouterNavigation/mainRouter";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="NavBar">
          <NavBar />
        </div>

        <main></main>
        <MainRouter />
      </div>
    );
  }
}

export default App;
