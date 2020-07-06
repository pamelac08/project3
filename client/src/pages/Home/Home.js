import React, { Component } from "react";
import { Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import NavBar from "../../components/Nav/NavBar";
import AppHeader from "../../components/Header/header";
import "./style.css";

import { userContext } from "../../userContext";

class Home extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      
    };
  }


  render() {

    return (
      <userContext.Consumer>

        {({user, logoutUser}) => {
          return (
            <div className="Home">
              <NavBar 
                logout={logoutUser}
                // activeItem={setActiveItem}
                />
              <AppHeader/>
              <div id="buttons">
                <Button as={Link} to="/workout" color="teal" size="massive" >Start Your Workout</Button>
                <br></br><br></br>
                <Button as={Link} to="/rewards" color="teal" size="massive" >View your habit tracker</Button>
                <br></br><br></br>
                <Button as={Link} to="/random" color="teal" size="massive" >Get a Goal OTD</Button>
              </div>
            </div>
          )
        }}
      </userContext.Consumer>  
    )  
  }
}

export default Home;
