import React, { Component } from "react";
import { Button, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class nav extends Component {
  state = {};

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted>
        <Menu.Item
          name="Home"
          active={activeItem === "Home"}
          // onClick={this.handleItemClick}
        >
          <Button as={Link} to="/home" secondary>
            Home
          </Button>
        </Menu.Item>

        <Menu.Item
          name="Start Workout"
          active={activeItem === "Start Workout"}
          // onClick={this.handleItemClick}
        >
          <Button as={Link} to="/workout" secondary>
            Start Workout
          </Button>
        </Menu.Item>

        <Menu.Item
          name="Rewards Tracker"
          active={activeItem === "Rewards Tracker"}
          // onClick={this.handleItemClick}
        >
          <Button as={Link} to="/rewards" secondary>
            Rewards Tracker
          </Button>
        </Menu.Item>

        <Menu.Item
          name="Random Goal OTD"
          active={activeItem === "Random Goal OTD"}
          // onClick={this.handleItemClick}
        >
          <Button as={Link} to="/random" secondary>Random Goal OTD</Button>
        </Menu.Item>

        <Menu.Item
          name="Admin Menu"
          active={activeItem === "Admin Menu"}
          // onClick={this.handleItemClick}
        >
          <Button as={Link} to="/admin" secondary>
            Admin Menu
          </Button>
        </Menu.Item>

        {/* <Menu.Menu position='right'>
                    <Menu.Item
                        name='Login'
                        active={activeItem === 'Login'}
                        // onClick={this.handleItemClick}
                    >
                    <Button as={Link} to="/login" secondary>Log In</Button>

                    </Menu.Item>

                    <Menu.Item
                        name='Sign Up'
                        active={activeItem === 'Sign Up'}
                        // onClick={this.handleItemClick}
                    >
                    <Button as={Link} to="/signup" secondary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu> */}
      </Menu>
    );
  }
}
