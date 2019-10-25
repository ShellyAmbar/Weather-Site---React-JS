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

class CardFavorite extends Component {
  constructor(props) {
    super(props);

    const newDate = new Date(this.props.Date).toUTCString();
    this.state = {
      key: this.props.key,
      Date: newDate,
      Link: this.props.Link,
      Temperature: this.props.Temperature,
      WeatherText: this.props.WeatherText,
      Icon: this.props.Icon
    };
  }

  render() {
    return (
      <MDBCol>
        <MDBCard style={{ width: "20rem", height: "22rem" }}>
          <MDBCardImage
            style={{ height: 100, width: 200 }}
            src={`https://www.accuweather.com/images/weathericons/${this.state.Icon}.svg`}
          />
          <MDBCardBody>
            <MDBCardTitle>{this.state.Date}</MDBCardTitle>
            <MDBCardText>
              {this.state.WeatherText +
                " Temperature:  " +
                this.state.Temperature}
            </MDBCardText>

            <MDBBtn href={this.state.Link}>navigate to website</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default CardFavorite;
