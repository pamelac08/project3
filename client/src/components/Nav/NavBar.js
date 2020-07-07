import React, { Component } from "react";
import { Button, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./style.css";

export default class nav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeItem: ""
    };
  };
  
  componentDidMount() {
    this.setState({activeItem: this.props.active});
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted>
        <Menu.Item>
          <Button 
            name="Home"
            active={activeItem === "Home"}
            as={Link} 
            to="/" 
            secondary>
            Home
          </Button>
        </Menu.Item>

        <Menu.Item>
          <Button 
            name="Start Workout"
            active={activeItem === "Start Workout"}
            as={Link} to="/workout" secondary>
            Start Workout
          </Button>
        </Menu.Item>

        <Menu.Item>
          <Button 
            name="Rewards Tracker"
            active={activeItem === "Rewards Tracker"}
            as={Link} to="/rewards" secondary>
            Rewards Tracker
          </Button>
        </Menu.Item>

        <Menu.Item>
          <Button 
            name="Random Goal OTD"
            active={activeItem === "Random Goal OTD"}
            as={Link} to="/random" secondary>
            Random Goal OTD</Button>
        </Menu.Item>

        <Menu.Item>
          <Button 
            name="Admin Menu"
            active={activeItem === "Admin Menu"}
            as={Link} to="/admin" secondary>
            Admin Menu
          </Button>
        </Menu.Item>

        <Menu.Menu position='right'>
          {/* <Menu.Item
              name='Login'
              active={activeItem === 'Login'}
              // onClick={this.handleItemClick}
          >
          <Button as={Link} to="/login" secondary>Log In</Button>

          </Menu.Item> */}

          <Menu.Item>
          <Button onClick={this.props.logout} secondary>Logout</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
