import React, { Component, useEffect, useState } from "react";
import FetchUserData from "./Database/saveSearches";
import NavBar from "./Components/navBar";
import TabsOptions from "./Components/tabsOptions";
import SearchForm from "./Components/searchForm";
import ModalAlert from "./Components/modalAlert";
import FavoritePage from "./Components/Pages/favoritesPage";
import WeatherPage from "./Components/Pages/weatherPage";
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
