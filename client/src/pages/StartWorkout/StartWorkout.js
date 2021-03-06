import React, { Component } from "react";
import { Grid, Header, Message, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./style.css";
import NavBar from "../../components/Nav/NavBar";
import Moment from "react-moment";
import moment from "moment";
import cheerio from "cheerio";
import AppHeader from "../../components/Header/header";
import { userContext } from "../../userContext";

class StartWorkout extends Component {
  _isMounted = false;

  state = {
    wod: [],
    date: new Date(),
    isLoading: true,
  };

  componentDidMount() {
    this._isMounted = true;
    this.getWOD();
  };
  
  getWOD = () => {
    if (this.state.isLoading) {
    let date = moment().format("YYMMDD");
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const urlFirst = "https://www.crossfit.com/";

    const url = proxyurl + urlFirst + date;

    fetch(url)
      .then((response) => response.text())
      .then((response) => {
          let $ = cheerio.load(response);
          let workout = [];

          $("._1kOqu24U9_kCLpSukpmYDZ div p").each((i, element) => {
            let result = {};

            result = $(element).text();
            workout.push(result);
          });
          let lastIndex = workout.length - 1;
          let wodFilter = workout.filter((workout, i) => i !== lastIndex);

          this.setState({
                wod: wodFilter,
                isLoading: false
          });
      });
    };
  };

  componentWillUnmount() {
    this._isMounted = false;   
  };

  render() {
    return (
      <userContext.Consumer>
        {({ user, logoutUser}) => {
          return (
            <div>
              <NavBar logout={logoutUser} active="Start Workout" />
              <AppHeader />
              <Grid
                textAlign="center"
                style={{ height: "25vh" }}
                verticalAlign="middle"
              >
                <Grid.Column style={{ maxWidth: 500 }}>
                  <Header as="h2" color="teal" textAlign="center">
                    Crossfit WOD for{" "}
                    <Moment format="MM/DD/YYYY">{this.state.date}</Moment>
                  </Header>
                  <Message>
                    {this.state.wod.length  ? (
                      <div>
                        {this.state.wod.map((wod, i) => (
                          <div key={i}>
                            {wod}
                            <br></br>
                          </div>
                        ))}
                        <br></br>
                        <a
                          href="https://www.crossfit.com/workout/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Go to Crossfit Workout Page
                        </a>
                    </div>
                    ) : <div>No workout is available</div>}
                  </Message>
                </Grid.Column>
              </Grid>

              <div> -- OR --</div>
              <br></br>
              <Button
                id="generateWorkoutButton"
                as={Link}
                to="/create-workout"
                color="teal"
                size="massive"
              >
                Generate Custom Workout
              </Button>
            </div>
          );
        }}
      </userContext.Consumer>
    );
  }
}

export default StartWorkout;
