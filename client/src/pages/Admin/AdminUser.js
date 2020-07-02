import _ from "lodash";
import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment, Dropdown, } from "semantic-ui-react";
import LOGINAPI from "../../utils/LoginAPI";
import "./style.css";
import NavBar from "../../components/Nav/NavBar";
import AppHeader from "../../components/Header/header";

class AdminUser extends Component {
  state = {
    
    emailNew: "",
    usernameNew: "",
    roleNew: "",
    
    userEmails: [],
  };

  getUsers() {
    LOGINAPI.getAllUsers()
      .then((res) => {
        console.log("all users res: ", res.data);
        let allUsers = res.data;
        let userEmail = [];

        allUsers.map((user) =>
          userEmail.push({
            useremail: user.email,
            userid: user._id,
          })
        );

        // console.log("movementname object array: ", movementName);
        this.setState({
          userEmails: userEmail,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    // console.log("component did mount working");
    this.getUsers();
    // console.log("this.state.movementNames: ", this.state.movementNames);
  };

  getOptions = (array) =>
    _.times(array.length, (index) => ({
      key: index,
      text: array[index].useremail,
      value: array[index].userid,
    }));

  updateUser = (event) => {
    event.preventDefault();

    // this.state.nameNew = _id in database
    // console.log("this.state.nameNew in update: ", this.state.nameNew);
    // console.log("this.state.equipmentNew in update: ", this.state.equipmentNew);

    LOGINAPI.updateUser(this.state.emailNew, {
      username: this.state.usernameNew,
      roles: this.state.roleNew
    })
      .then((res) => {
        // console.log(res.json())
        this.setState({
            emailNew: "",
            usernameNew: "",
            roleNew: "",
        });
      })
      .catch((err) => console.log(err));
  };

  deleteUser = (event) => {
    event.preventDefault();

    LOGINAPI.deleteUser(this.state.emailNew)
      .then((res) => {
        this.setState({
          emailNew: "",
        });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleDropdownChange = (event, data) => {
    this.setState({
      [data.name]: data.value,
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <AppHeader/>

        <div id="update-div">
          <Grid
            textAlign="left"
            style={{ height: "100vh" }}
            verticalAlign="middle"
          >
            <Grid.Column>
              <Header as="h2" color="blue" textAlign="center">
                Update/Delete Users
              </Header>
              <Form size="large">
                <Segment stacked>
                  <Form.Select
                    fluid
                    control={Dropdown}
                    id="dropdown-users"
                    label="User to Update"
                    placeholder="Users"
                    scrolling
                    options={this.getOptions(this.state.userEmails)}
                    name="emailNew"
                    onChange={this.handleDropdownChange}
                  ></Form.Select>
                   <Form.Input
                    value={this.state.usernameNew}
                    onChange={this.handleInputChange}
                    name="usernameNew"
                    fluid
                    label="New Username"
                    placeholder="New Username"
                    type="text"
                  />
                  <Form.Input
                    value={this.state.roleNew}
                    onChange={this.handleInputChange}
                    name="roleNew"
                    fluid
                    label="New Role"
                    placeholder="User or Admin"
                    type="text"
                  />

                  <Button
                    color="blue"
                    fluid
                    size="small"
                    onClick={this.updateUser}
                  >
                    Update
                  </Button>
                  <Button
                    color="blue"
                    fluid
                    size="small"
                    onClick={this.deleteUser}
                  >
                    Delete
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default AdminUser;
