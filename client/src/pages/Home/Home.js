import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { Button } from 'semantic-ui-react';
// import { Link } from "react-router-dom";

// import Header from '../../components/Header/header';
import NavBar from '../../components/Nav/NavBar';

import StartWorkout from "../StartWorkout/StartWorkout";
import Rewards from "../Rewards/Rewards";
import Habits from "../Habits/Habits";
import Admin from "../Admin/Admin";
import HomeLanding from "../HomeLanding/HomeLanding";



function Home() {
    return (
      <Router>  
        <div className="Home">
            <NavBar/>
            {/* <Header/> */}

            <Switch>
                <Route exact path="/home" component={HomeLanding}/>
                <Route exact path="/workout" component={StartWorkout}/>
                <Route exact path="/admin" component={Admin}/>
                <Route exact path="/rewards" component={Rewards}/>
                <Route exact path="/habits" component={Habits}/>
            </Switch>
        </div>
      </Router> 
    )
    
}

export default Home;
