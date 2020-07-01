import React, { Component } from "react";
import { Grid, Header, Button, Form, Segment, Card } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import NavBar from "../../components/Nav/NavBar";
import API from "../../utils/API";
import habitCard from "../../components/Card/Card";

class Habits extends Component {
  state = {
    habitName: "",
    habitInterval: "",
    habitFrequency: "",
    reward: "",
    redirect: false,
  };

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
    })
      .then((res) => {
        this.setState({
          habitName: "",
          habitInterval: "",
          habitFrequency: "",
          reward: "",
          redirect: true,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/rewards" />;
    }

    return (
      <div>
        <NavBar />
        <habitCard/>
        <Grid
          columns="three"
          textAlign="left"
          style={{ height: "100vh" }}
          verticalAlign="center"
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
    );
  }
}

export default Habits;
