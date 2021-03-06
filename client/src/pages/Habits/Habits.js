import React, { Component } from "react";
import { Grid, Header, Button, Form, Segment } from "semantic-ui-react";
import NavBar from "../../components/Nav/NavBar";
import AppHeader from "../../components/Header/header";
import API from "../../utils/API";
import HabitCard from "../../components/Card/Card";
import "./style.css";
import { userContext } from "../../userContext";
class Habits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      habitName: "",
      habitInterval: "",
      habitFrequency: "",
      reward: "",
      redirect: false,
      habits: [],
      habitsFilter: [],
    };
  }

  componentDidMount() {
    this.getHabits();
  }

  getHabits() {
    API.getAllHabits().then((res) => {
      let allHabits = res.data;
      let habitArray = [];

      allHabits.map((habit) =>
        habitArray.push({
          name: habit.name,
          interval: habit.interval,
          frequency: habit.frequency,
          reward: habit.reward,
          id: habit._id,
          user: habit.user,
          counter: habit.counter,
        })
      );
      console.log("habitArray object array, in didMount: ", habitArray);
      this.setState({
        habits: habitArray,
      });
    });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();

    API.saveHabit({
      name: this.state.habitName,
      interval: this.state.habitInterval,
      frequency: this.state.habitFrequency,
      reward: this.state.reward,
      user: event.target.value,
    })
      .then((res) => {
        this.setState({
          habitName: "",
          habitInterval: "",
          habitFrequency: "",
          reward: "",
        });
        this.getHabits();
      })
      .catch((err) => console.log(err));
  };

  checkForCompletion = (event) => {
    event.preventDefault();
    let frequency = parseInt(event.target.dataset.freq);
    let nextIncrement = parseInt(event.target.name);
    let nextIncrementNum = (nextIncrement += 1);

    if (frequency === nextIncrementNum) {
      API.incrementHabitCounter(event.target.value, {
        counter: 0,
      })
        .then((res) => {
          console.log("counter reset");
          alert("congrats, collect your reward.  Habit Counter has reset!");
        })
        .catch((err) => console.log(err));
    } else {
      this.incrementCounter(event);
    }
  };

  incrementCounter = (event) => {
    event.preventDefault();
    let nextIncrement = parseInt(event.target.name);
    let nextIncrementNum = (nextIncrement += 1);

    API.incrementHabitCounter(event.target.value, {
      counter: nextIncrementNum,
    })
      .then((res) => {
        console.log("counter incremented");
        this.getHabits();
      })
      .catch((err) => console.log(err));
  };

  // refreshPage() {
  //   window.location.reload(false);
  // }

  deleteHabit = (event) => {
    event.preventDefault();

    API.deleteHabit(event.target.value)
      .then((res) => {
        console.log("delete habit complete");
        this.getHabits();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <userContext.Consumer>
        {({ user, logoutUser }) => {
          return (
            <div>
              <NavBar logout={logoutUser} active="Rewards Tracker" />
              <AppHeader />

              <div className="allCards">
                {this.state.habits
                  .filter((habit) => habit.user === user.username)
                  .map((habit, i) => (
                    <HabitCard
                      key={i}
                      name={habit.name}
                      reward={habit.reward}
                      interval={habit.interval}
                      frequency={habit.frequency}
                      counter={habit.counter}
                      checkComplete={this.checkForCompletion}
                      delete={this.deleteHabit}
                      value={habit.id}
                    />
                  ))}
              </div>
              <div className="submitForm">
                <Grid
                  columns="three"
                  textAlign="left"
                  style={{ height: "100vh" }}
                  verticalAlign="middle"
                >
                  <Grid.Row>
                    <Grid.Column></Grid.Column>
                    <Grid.Column>
                      <Form>
                        <Segment stacked>
                          <Header as="h3"> Enter a New Habit! </Header>
                          <Form.Input
                            fluid
                            label="Habit"
                            type="text"
                            value={this.state.habitName}
                            name="habitName"
                            onChange={this.handleInputChange}
                          />
                          <Form.Input
                            fluid
                            label="Interval"
                            type="text"
                            value={this.state.habitInterval}
                            name="habitInterval"
                            onChange={this.handleInputChange}
                          />
                          <Form.Input
                            fluid
                            label="Frequency"
                            type="text"
                            value={this.state.habitFrequency}
                            name="habitFrequency"
                            onChange={this.handleInputChange}
                          />
                          <Form.Input
                            fluid
                            label="Reward"
                            type="text"
                            value={this.state.reward}
                            name="reward"
                            onChange={this.handleInputChange}
                          />
                          <Button
                            color="teal"
                            fluid
                            size="large"
                            value={user.username}
                            onClick={this.handleSubmitForm}
                          >
                            {" "}
                            Add{" "}
                          </Button>
                        </Segment>
                      </Form>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </div>
          );
        }}
      </userContext.Consumer>
    );
  }
}

export default Habits;
