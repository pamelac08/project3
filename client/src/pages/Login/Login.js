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
 
  state = {
    email: "",
    password: "",
    user: {}
  };
 
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();

    LOGINAPI.loginUser({
      email: this.state.email,
      password: this.state.password,
    })
      .then((res) => {

        console.log("res - login: ", res.data);

        this.setState({
          email: "",
          password: "",
          user: res.data,
          redirect: true,
        });
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
                  onClick={this.handleSubmitForm}
                >
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
