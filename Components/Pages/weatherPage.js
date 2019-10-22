import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import SearchForm from "../searchForm";
import TabsOptions from "../tabsOptions";
class WeatherPage extends Component {
  render() {
    return (
      <div>
        <header
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <h1 style={{ color: "blue" }}>Weather You Are </h1>
          <p> Get the weather from any location you choose..</p>
        </header>

        <SearchForm />
      </div>
    );
  }
}

export default WeatherPage;
