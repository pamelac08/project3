import React, {Component} from "react";
// import { Button, Form, Grid, Header,Message, Segment, Dropdown } from 'semantic-ui-react';
import { Grid, Header, Message, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import "./style.css"

import Moment from "react-moment";
import moment from "moment";
import cheerio from "cheerio";

class StartWorkout extends Component {
    state = {
        wod: [],
        date: new Date()
    }

    componentDidMount() {
        // console.log("this.state.date: ", JSON.stringify(this.state.date));
        let newDate =  moment().format("YYMMDD");
        // console.log("newdate: ", newDate);
        this.getWOD(newDate);
    };

    getWOD = (date) => {    
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "https://www.crossfit.com/";
    //   console.log("url: " + proxyurl + url + date);

        fetch(proxyurl + url + date) 
            .then(response => response.text())
            .then(response => {
                // console.log("contents: ", response)
                let $ = cheerio.load(response);
                // console.log("$ scrape response: ", $);

                let workout = [];
       
                $("._1kOqu24U9_kCLpSukpmYDZ div p").each((i, element) => {
                    let result = {};

                    result = $(element)
                        .text();  
                    // console.log("result: " + i + " " + JSON.stringify(result))
                    workout.push(result);
                });
                // console.log("workout array, scrape response: ", workout);
                this.setState({
                    wod: workout
                });
        });
    };


    render() {
        return(
            <div>
                <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 500}}>
                    <Header as='h2' color='green' textAlign='center'>
                        Crossfit WOD for <Moment format="MM/DD/YYYY">{this.state.date}</Moment>
                    </Header>
                    
                        {this.state.wod.length ? (
                           <Message>
                            {this.state.wod.map((wod) => (
                                <div>{wod}<br></br></div> 
                            ))}
                            </Message>
                        ) : (
                            "No workout is available"
                            
                        )}
                    </Grid.Column>
                </Grid>

                <div> -- OR --</div>

                <Button as={Link} to="/create-workout">
                    Generate Custom Workout
                </Button>

                

            </div>
        )
    }
}


export default StartWorkout;