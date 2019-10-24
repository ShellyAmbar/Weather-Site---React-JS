import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavBar extends Component {
  render() {
    return (
      <Navbar
        className="NavBar"
        style={{
          background: "linear-gradient(45deg, 	#7FFFD4 30%, 	#00FFFF 90%)"
        }}
      >
        <Navbar.Brand href="/">WeatherYouAre</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/FavoritePage">Favorites</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
export default NavBar;
