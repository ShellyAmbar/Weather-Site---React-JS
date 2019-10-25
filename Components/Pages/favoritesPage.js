import React, { Component } from "react";
import CardFavorite from "../cardFavorite";
import Grid from "@material-ui/core/Grid";

class FavoritePage extends Component {
  constructor(props) {
    super(props);
    var favorites = [];
    favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    this.state = {
      favoritesList: favorites
    };
  }
  render() {
    return (
      <div
        style={{
          width: "100%",

          height: "100%",
          justifyContent: "center",
          display: "flex",
          padding: "20px",
          alignItems: "center"
        }}
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {this.state.favoritesList.map((weather, index) => {
            return (
              <CardFavorite
                key={index}
                Date={weather.Date}
                Link={weather.Link}
                Temperature={weather.Temperature}
                WeatherText={weather.WeatherText}
                Icon={weather.Icon}
              />
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default FavoritePage;
