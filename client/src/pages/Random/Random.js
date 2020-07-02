import React, { Component } from "react";
import { Message, Grid, Button } from "semantic-ui-react";
import Navbar from "../../components/Nav/NavBar";
import AppHeader from "../../components/Header/header";
import API from "../../utils/API";

class Random extends Component {
  state = {
      goal: "",
      interval: "todayonly",
      frequency: 1
  };

  goals = [
    "Drink 64 oz of Water",
    "Eat no added sugar",
    "No sodas",
    "Walk 10,000 steps",
    "Eat veggies at dinner",
  ];

  randomGoal() {
    let goal = this.goals[Math.floor(Math.random()*this.goals.length)]; 
    this.setState({goal});
  }

  componentDidMount() {
    this.randomGoal();
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log("this.state.goal: ", this.state.goal);

    API.saveHabit({
      name: this.state.goal,
      interval: this.state.interval,
      frequency: this.state.frequency
    })
      .then((res) => {
        console.log(res);
        alert("add to the tracker!")
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Navbar />
        <AppHeader/>
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

              <Message>
                  {this.state.goal}
              </Message>

              <Button color="teal" size="massive" onClick={this.handleSubmit}>
                Add to Tracker
              </Button>
              
            </Grid.Column>
            <Grid.Column> </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default Random;
