import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

class LoginForm extends Component {
  state = {};
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
              Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Button color="olive" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="/signup">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginForm;
