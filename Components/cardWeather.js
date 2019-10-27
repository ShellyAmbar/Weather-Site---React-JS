import React, { Component } from "react";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";
import Fab from "@material-ui/core/Fab";

import Favorite from "@material-ui/icons/Favorite";
export default class CardWeather extends Component {
  constructor(props) {
    super(props);
  }

  handleExpandClickFavorite = () => {
    const { currentDate, Link, Temperature, WeatherText, Icon } = this.props;
    var weatherObject = {
      Date: currentDate,
      Link: Link,
      Temperature: Temperature,
      WeatherText: WeatherText,
      Icon: Icon
    };
    var favorites = [];
    favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    favorites.push(weatherObject);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  render() {
    const newDate = new Date(this.props.currentDate).toUTCString();
    const { Link, Temperature, WeatherText, Icon } = this.props;
    return (
      <div>
        <MDBCol>
          <MDBCard style={{ width: "20rem", height: "22rem" }}>
            <MDBCardImage
              style={{ height: 100, width: 200 }}
              src={`https://www.accuweather.com/images/weathericons/${Icon}.svg`}
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>{newDate}</MDBCardTitle>
              <MDBCardText>
                {WeatherText + " Temperature:  " + Temperature}
              </MDBCardText>

              <MDBBtn href={Link}>navigate to website</MDBBtn>
              <Fab
                onClick={this.handleExpandClickFavorite}
                style={{ marginLeft: 20, color: "#FF0000" }}
                size="medium"
                aria-label="add"
              >
                <Favorite />
              </Fab>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    );
  }
}
