import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FavoritePage from "../Components/Pages/favoritesPage";
import WeatherPage from "../Components/Pages/weatherPage";

class MainRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={WeatherPage} />
          <Route path="/FavoritePage" component={FavoritePage} />
        </div>
      </Router>
    );
  }
}

export default MainRouter;
