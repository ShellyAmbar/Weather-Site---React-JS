import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FavoritePage from "../Components/Pages/favoritesPage";
import WeatherPage from "../Components/Pages/weatherPage";

class MainRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={WeatherPage} />
            <Route path="/FavoritePage" component={FavoritePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MainRouter;
