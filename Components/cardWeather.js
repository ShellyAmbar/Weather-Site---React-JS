import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

export default class CardWeather extends Component {
  constructor(props) {
    super(props);

    const newDate = new Date(this.props.Date).toUTCString();
    const { Link, Temperature, WeatherText, Icon } = this.props;
    this.state = {
      Date: newDate,
      Link: Link,
      Temperature: Temperature,
      WeatherText: WeatherText,
      Icon: Icon
    };
  }

  handleExpandClickFavorite = () => {
    var weatherObject = {
      Date: this.state.Date,
      Link: this.state.Link,
      Temperature: this.state.Temperature,
      WeatherText: this.state.WeatherText,
      Icon: this.state.Icon
    };
    var favorites = [];
    favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    favorites.push(weatherObject);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  render() {
    return (
      <div>
        <MDBCol>
          <MDBCard style={{ width: "20rem", height: "22rem" }}>
            <MDBCardImage
              style={{ height: 100, width: 200 }}
              src={`https://www.accuweather.com/images/weathericons/${this.state.Icon}.svg`}
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>{this.state.Date}</MDBCardTitle>
              <MDBCardText>
                {this.state.WeatherText +
                  " Temperature:  " +
                  this.state.Temperature}
              </MDBCardText>

              <MDBBtn style={{ marginButtom: 10 }} href={this.state.Link}>
                navigate to website
              </MDBBtn>
              <MDBBtn onClick={this.handleExpandClickFavorite}>
                Add To Favorites
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    );
  }
}
