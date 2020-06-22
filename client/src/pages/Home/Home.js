import React, { Component } from "react";
import { Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import NavBar from "../../components/Nav/NavBar";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavBar />
        <div id="buttons">
          <Button as={Link} to="/workout" >Start Your Workout</Button>
          <br></br><br></br>
          <Button as={Link} to="/rewards" >View your habit tracker</Button>
          <br></br><br></br>
          {/* <Button as={Link} to="/goal" >Get a Goal OTD</Button> */}
        </div>
      </div>
    );
  }
}

export default Home;
