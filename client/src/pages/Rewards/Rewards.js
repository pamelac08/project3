import React, { Component } from "react";
import { Header, Button, Icon, Grid, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./reward.css";
import NavBar from "../../components/Nav/NavBar";
import AppHeader from "../../components/Header/header";
import API from "../../utils/API";

class Rewards extends Component {
  state = {
    habits: []
  };

  componentDidMount() {
    API.getAllHabits().then((res) => {
      console.log("res.data all habits", res.data);

      let allHabits = res.data;
      let habitArray = [];

      allHabits.map((habit) =>
        habitArray.push({
          name: habit.name,
          interval: habit.interval,
          frequency: habit.frequency,
          reward: habit.reward,
          id: habit._id
        })
      );

      console.log("habitArray object array: ", habitArray);
      // this.setState({
      //   habits: habitArray,
      // });
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <AppHeader />
        <Container>
          <Grid
            columns="three"
            textAlign="left"
            style={{ height: "100vh" }}
            verticalAlign="top"
          >
            <Grid.Row>
              <Grid.Column></Grid.Column>
              <Grid.Column>
                <div>
                  <Header as="h2" icon textAlign="center">
                    <Icon name="heartbeat" size="massive" color="red" />
                    <Header.Content>
                      Enter a new habit to start earning rewards!
                    </Header.Content>
                  </Header>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button as={Link} to="/habits" color="teal" size="massive">
                    Get Started
                  </Button>
                </div>
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Rewards;
