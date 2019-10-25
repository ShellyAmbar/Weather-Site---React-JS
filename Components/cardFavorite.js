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

    this.state = {
      key: this.props.key,
      Date: this.props.Date,
      Link: this.props.Link,
      Temperature: this.props.Temperature,
      WeatherText: this.props.WeatherText,
      Icon: this.props.Icon
    };
  }

  render() {
    return (
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage
            className="img-fluid"
            src={`https://www.accuweather.com/images/weathericons/${this.state.Icon}.svg`}
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>{this.state.Date}</MDBCardTitle>
            <MDBCardText>
              {this.state.WeatherText +
                " Temperature:  " +
                this.setState.Temperature}
            </MDBCardText>

            <MDBBtn href={this.state.Link}>navigate to website</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default CardFavorite;
