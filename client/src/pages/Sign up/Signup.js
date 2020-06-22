import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import LOGINAPI from "../../utils/LoginAPI";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
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

    LOGINAPI.createUser({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    })
      .then((res) => {
        this.setState({
          username: "",
          email: "",
          password: "",
          redirect: true,
        });
        if (this.state.redirect) {
          return <Redirect to="/" />;
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="top"
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h2" color="olive" textAlign="center">
              Sign Up
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Name"
                  type="name"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />

                <Button
                  color="olive"
                  fluid
                  size="large"
                  onClick={this.handleSubmitForm}
                >
                  Create Account
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Signup;
