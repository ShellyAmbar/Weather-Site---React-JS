import React, { Component } from "react";
import CardFavorite from "../cardFavorite";
import Grid from "@material-ui/core/Grid";

class FavoritePage extends Component {
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
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
        </Grid>
      </div>
    );
  }
}

export default FavoritePage;
