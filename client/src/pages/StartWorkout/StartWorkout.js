import React, { Component } from "react";
import { Grid, Header, Message, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./style.css";
import NavBar from "../../components/Nav/NavBar";
import Moment from "react-moment";
import moment from "moment";
import cheerio from "cheerio";
import AppHeader from "../../components/Header/header";

class StartWorkout extends Component {

  _isMounted = false;

  state = {
    wod: [],
    date: new Date(),
    isLoading: true
  };

  componentDidMount() {
    this._isMounted = true;
    // console.log("this.state.date: ", JSON.stringify(this.state.date));
    let newDate = moment().format("YYMMDD");
    // console.log("newdate: ", newDate);
    this.getWOD(newDate);
  }

  getWOD = (date) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.crossfit.com/";
    //   console.log("url: " + proxyurl + url + date);

    fetch(proxyurl + url + date)
      .then((response) => response.text())
      .then((response) => {

        // console.log("contents: ", response)
        let $ = cheerio.load(response);
        // console.log("$ scrape response: ", $);

        let workout = [];

        $("._1kOqu24U9_kCLpSukpmYDZ div p").each((i, element) => {
          let result = {};

          result = $(element).text();
          // console.log("result: " + i + " " + JSON.stringify(result))
          workout.push(result);
        });
        // console.log("workout array, scrape response: ", workout);
        this.setState({
          wod: workout,
          isLoading: false
        });
      });
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <NavBar />
        <AppHeader/>
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

            {this.state.wod.length ? (
              <Message>
                {this.state.wod.map((wod, i) => (
                  <div key={i}>
                    {wod}
                    <br></br>
                  </div>
                ))}
              </Message>
            ) : (
              "No workout is available"
            )}
          </Grid.Column>
        </Grid>

        <div> -- OR --</div>
<br></br>
        <Button id="generateWorkoutButton" as={Link} to="/create-workout" color="teal" size="massive">
          Generate Custom Workout
        </Button>
      </div>
    );
  }
}

export default StartWorkout;
