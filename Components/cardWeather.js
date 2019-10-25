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
    this.state = {
      expanded: false
    };
  }

  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  handleExpandClickFavorite = () => {
    const { Date, Link, Temperature, WeatherText, Icon } = this.props;
    var weatherObject = {
      Date: Date,
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
    const { Date, i, Link, Temperature, WeatherText, Icon } = this.props;
    return (
      <div>
        <MDBCol>
          <MDBCard style={{ width: "20rem" }}>
            <MDBCardImage
              className="img-fluid"
              src={`https://www.accuweather.com/images/weathericons/${Icon}.svg`}
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>{Date}</MDBCardTitle>
              <MDBCardText>
                {WeatherText + " Temperature:  " + Temperature}
              </MDBCardText>

              <MDBBtn href={Link}>navigate to website</MDBBtn>
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
