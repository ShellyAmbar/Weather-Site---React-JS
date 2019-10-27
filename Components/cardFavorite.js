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

import Delete from "@material-ui/icons/Delete";

class CardFavorite extends Component {
  constructor(props) {
    super(props);

    const newDate = new Date(this.props.Date).toUTCString();
    this.state = {
      Date: newDate,
      Link: this.props.Link,
      Temperature: this.props.Temperature,
      WeatherText: this.props.WeatherText,
      Icon: this.props.Icon
    };
  }

  onClickDeleteLike = () => {};

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
            <Fab
              onClick={this.onClickDeleteLike}
              style={{ marginLeft: 20, color: "#FF0000" }}
              size="medium"
              aria-label="add"
            >
              <Delete />
            </Fab>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default CardFavorite;
