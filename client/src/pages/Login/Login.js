import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { userContext } from "../../userContext";
import AppHeader from "../../components/Header/header";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    user: {},
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <userContext.Consumer>
        {({ handleSubmitForm }) => {
          return (
            <div>
              <AppHeader />
              <div>
                <Grid
                  textAlign="center"
                  style={{ height: "100vh" }}
                  verticalAlign="top"
                >
                  <Grid.Column style={{ maxWidth: 500 }}>
                    <Header as="h2" color="teal" textAlign="center">
                      Log-in to your account
                    </Header>
                    <Form size="large">
                      <Segment stacked>
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
                          color="teal"
                          fluid
                          size="large"
                          onClick={handleSubmitForm}
                          value={this.state.email}
                          name={this.state.password}
                        >
                          Login
                        </Button>
                      </Segment>
                    </Form>
                    <Message>
                      New to us?{" "}
                      <Button as={Link} to="/signup">
                        Sign Up
                      </Button>
                    </Message>
                  </Grid.Column>
                </Grid>
              </div>
            </div>
          );
        }}
      </userContext.Consumer>
    );
  }
}

export default LoginForm;
