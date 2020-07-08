import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Signup from "./pages/SignUp/Signup";
import StartWorkout from "./pages/StartWorkout/StartWorkout";
import Admin from "./pages/Admin/Admin";
import Rewards from "./pages/Rewards/Rewards";
import Habits from "./pages/Habits/Habits";
import Random from "./pages/Random/Random";
import CreateWorkout from "./pages/CreateWorkout/CreateWorkout";
import "./App.css";

import Footer from "./components/Footer/Footer";

import { userContext } from "./userContext";
import LOGINAPI from "./utils/LoginAPI";

class App extends Component {
  state = {
    user: {},
    authenticated: false,
  };

  componentDidMount() {
    this.isUserAuthenticated();
  }

  isUserAuthenticated() {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    if (user.accessToken) {
      this.setState({
        authenticated: true,
        user,
      });
    }
  }

  saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  handleSubmitForm = this.handleSubmitForm.bind(this);
  handleSubmitForm(event) {
    event.preventDefault();

    LOGINAPI.loginUser({
      email: event.target.value,
      password: event.target.name,
    })
      .then((res) => {
        console.log("res - login: ", res.data);

        this.saveUser(res.data);

        this.setState({
          user: res.data,
          authenticated: true,
        });
      })
      .catch((err) => console.log(err));
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  logout = this.logout.bind(this);
  logout() {
    this.setState({ user: {} });
    localStorage.removeItem("user");
    return <Redirect to="/" />;
  }

  render() {
    if (!this.isEmpty(this.state.user)) {
      const value = {
        user: this.state.user,
        logoutUser: this.logout,
      };

      return (
        <userContext.Provider value={value}>
          <div className="App">
            <Router>
              <Switch>
                <Route exact path="/workout" component={StartWorkout} />
                <Route exact path="/create-workout" component={CreateWorkout} />
                <Route exact path="/rewards" component={Rewards} />
                <Route exact path="/habits" component={Habits} />
                <Route exact path="/random" component={Random} />
                <Route exact path="/admin" component={Admin} />
                <Route path="/" component={Home} />
              </Switch>
            </Router>
            <Footer />
          </div>
        </userContext.Provider>
      );
    } else {
      const valueLogin = {
        handleSubmitForm: this.handleSubmitForm,
      };
      return (
        <userContext.Provider value={valueLogin}>
          <div className="app">
            <Router>
              <Switch>
                <Route exact path="/signup" component={Signup} />
                <Route path="/" component={Login} />
              </Switch>
            </Router>
            <Footer />
          </div>
        </userContext.Provider>
      );
    }
  }
}

export default App;
