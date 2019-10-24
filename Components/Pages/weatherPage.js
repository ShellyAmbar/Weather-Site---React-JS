import React, { Component } from "react";
import SearchForm from "../searchForm";

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
