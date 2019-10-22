import React, { Component } from "react";

class SaveSearches extends Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0] });
    console.log(data.results[0]);
  }

  render() {
    const mongoose = require("mongoose");

    mongoose.connect(
      "mongodb+srv://ambarshely:" +
        process.env.MONGO_ATLAS_PW +
        "@node-rest-hurulo-1e3ha.mongodb.net/test?retryWrites=true&w=majority",
      { useMongoClient: true }
    );

    return <div></div>;
  }
}

export default SaveSearches;
