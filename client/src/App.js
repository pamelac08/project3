import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from "react-router-dom";
import {Button,Form,Grid,Header,Message,Segment,} from "semantic-ui-react";

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
import AppHeader from "./components/Header/header";

import { userContext } from "./userContext";
import LOGINAPI from "./utils/LoginAPI";

class App extends Component {
  state = {
    email: "",
    password: "",
    user: {},
    signup: false,
    authenticated: false,
  };

  componentDidMount() {
    this.isUserAuthenticated();
  };

  isUserAuthenticated() {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    if (user.accessToken) {
      this.setState({
        authenticated: true,
        user,
      });
    };
  };

  saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();

    LOGINAPI.loginUser({
      email: this.state.email,
      password: this.state.password,
    })
      .then((res) => {
        console.log("res - login: ", res.data);

        this.saveUser(res.data);

        this.setState({
          email: "",
          password: "",
          user: res.data,
          authenticated: true,
        });
      })
      .catch((err) => console.log(err));
  };

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  signup = (event) => {
    event.preventDefault();
    this.setState({ signup: true });
  };

  logout = this.logout.bind(this);
  logout() {
    this.setState({ user: {} });
    localStorage.removeItem("user");
    return <Redirect to="/" />
  };


  render() {
    if (this.state.signup) {
      return (
        <Router>
          <Route exact path="/signup" component={Signup} />
        </Router>
      );
    }
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
                        <Route exact path="/random" component={Random}/>
                        <Route exact path="/admin" component={Admin} />
                        <Route path="/" component={Home} />
                      </Switch>
                    </Router>
                    <Footer/>
                  </div>
        </userContext.Provider>
      );
    } else {
      return (
        <div>
          <Router>
          <AppHeader />
          <div>
            <Grid
              textAlign="center"
              style={{ height: "100vh" }}
              verticalAlign="top"
            >
              <Grid.Column style={{ maxWidth: 500 }}>
                <Header as="h2" color="teal" textAlign="center">
                  Log-in to your account
                </Header>
                <Form size="large">
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="E-mail address"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />

                    <Button
                      color="teal"
                      fluid
                      size="large"
                      onClick={this.handleSubmitForm}
                    >
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  New to us? <Button onClick={this.signup} as={Link} to="/signup">Sign Up</Button>
                </Message>
              </Grid.Column>
            </Grid>
          </div>
          <Footer/>
          </Router>
        </div>
      );
    }
  }
}

export default App;
