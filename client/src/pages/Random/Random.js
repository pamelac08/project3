import React, { Component } from "react";
import { Message, Grid, Button } from "semantic-ui-react";
import Navbar from "../../components/Nav/NavBar";
import AppHeader from "../../components/Header/header";
import API from "../../utils/API";
import { userContext } from "../../userContext";
import moment from "moment";
import { Link } from "react-router-dom";

class Random extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      goal: "",
      interval: "todayonly",
      frequency: 1
    };
  }
  
  goals = [
    "Drink 64 oz of Water",
    "Eat no added sugar",
    "No sodas",
    "Walk 10,000 steps",
    "Eat veggies at dinner",
  ];

  componentDidMount() {
    this.getStoredDateAndGoal();
  };

  getStoredDateAndGoal() {
    const todayDate = moment().format("YYYYMMDD");
    const date = JSON.parse(localStorage.getItem("date")) || "";
    if (date === todayDate) {
      const storedGoal = JSON.parse(localStorage.getItem("goal"));
      this.setState({
        goal: storedGoal
      });
    } else {
      this.randomGoal(todayDate);
    };
  };

  randomGoal(today) {
    let goal = this.goals[Math.floor(Math.random() * this.goals.length)];
    this.setState({ 
      goal: goal
    });
    localStorage.setItem("goal", JSON.stringify(goal));
    localStorage.setItem("date", JSON.stringify(today));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    API.saveHabit({
      name: this.state.goal,
      interval: this.state.interval,
      frequency: this.state.frequency,
      user: event.target.value
    })
      .then((res) => {
        console.log(res);
        alert("add to the tracker!");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <userContext.Consumer>
        {({ user, logoutUser }) => {
          return (
            <div>
              <Navbar logout={logoutUser} active="Random Goal OTD"/>
              <AppHeader />
              <Grid
                columns="three"
                textAlign="center"
                style={{ height: "100vh" }}
                verticalAlign="top"
              >
                <Grid.Row>
                  <Grid.Column> </Grid.Column>
                  <Grid.Column>
                    <Message info>
                      <Message.Header>Goal Of The Day!</Message.Header>
                      <p>* *</p>
                      <p>Click below to add this goal to your habit tracker</p>
                    </Message>

                    <Message>{this.state.goal}</Message>

                    <Button
                      color="teal"
                      size="massive"
                      value={user.username}
                      onClick={this.handleSubmit}
                    >
                      Add to Tracker
                    </Button>
                    <br></br><br></br>
                    <Button
                    color="teal"
                    size="massive"
                    as={Link}
                    to="/habits"
                    >
                      Go to Tracker
                    </Button>
                  </Grid.Column>
                  <Grid.Column> </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          );
        }}
      </userContext.Consumer>
    );
  };
};
export default Random;
