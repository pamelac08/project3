import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

// import Header from '../../components/Header/header';
// import NavBar from '../../components/Nav/NavBar';

// import StartWorkout from "../StartWorkout/StartWorkout";
// import Rewards from "../Rewards/Rewards";

function HomeLanding() {
  return (
    <div className="Home">
      {/* <NavBar/> */}
      {/* <Header/> */}
      <Button as={Link} to="/workout">
        Start Your Workout
      </Button>
      <Button as={Link} to="/rewards">
        Habit Tracker
      </Button>
      {/* <Button as={Link} to="/goal" component={Goal}>Get a Goal OTD</Button> */}
    </div>
  );
}

export default HomeLanding;
