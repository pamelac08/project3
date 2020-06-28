import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./pages/Login/Login";
import Signup from "./pages/Sign up/Signup";
import StartWorkout from "./pages/StartWorkout/StartWorkout";
import Admin from "./pages/Admin/Admin";
import Rewards from "./pages/Rewards/Rewards";
import Habits from "./pages/Habits/Habits";
import Home from "./pages/Home/Home";
import Random from "./pages/Random/Random";
import "./App.css";
import Header from "./components/Header/header";
import Navbar from "./components/Nav/NavBar";
import CreateWorkout from './pages/CreateWorkout/CreateWorkout';


class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
          <Route exact path="/navbar" component={Navbar} />
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/workout" component={StartWorkout} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/rewards" component={Rewards} />
            <Route exact path="/habits" component={Habits} />
            <Route exact path="/create-workout" component={CreateWorkout}/>
            <Route exact path="/random" component={Random}/>
          </Switch>
        </Router>
      </div>
    );
  };
};

export default App;
