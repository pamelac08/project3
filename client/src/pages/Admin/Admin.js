import _ from "lodash";
import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment, Dropdown, } from "semantic-ui-react";
import API from "../../utils/API";
import LOGINAPI from "../../utils/LoginAPI";
import "./style.css";
import NavBar from "../../components/Nav/NavBar";
import AppHeader from "../../components/Header/header";
// import { Link } from "react-router-dom";

class Admin extends Component {
  state = {
    name: "",
    equipment: "",
    focus: "",
    scaled: "",
    nameNew: "",
    equipmentNew: "",
    focusNew: "",
    scaledNew: "",
    movementNames: [],

    emailNew: "",
    usernameNew: "",
    roleNew: "",
    userEmails: [],
  };

  getMovements() {
    API.getAllMovements()
      .then((res) => {
        console.log("all movements res: ", res.data);
        let allMovements = res.data;
        let movementName = [];

        allMovements.map((movement) =>
          movementName.push({
            movementname: movement.name,
            movementid: movement._id,
          })
        );

        // console.log("movementname object array: ", movementName);
        this.setState({
          movementNames: movementName,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    // console.log("component did mount working");
    this.getMovements();
    this.getUsers();
    // console.log("this.state.movementNames: ", this.state.movementNames);
  };

  getOptions = (array) =>
    _.times(array.length, (index) => ({
      key: index,
      text: array[index].movementname,
      value: array[index].movementid,
    }));

  updateMovement = (event) => {
    event.preventDefault();

    if (this.state.equipmentNew) {
    API.updateMovement(this.state.nameNew, {
      equipment: this.state.equipmentNew,
    })
      .then((res) => {
        // console.log(res.json())
        this.setState({
          equipmentNew: "",
        });
      })
      .catch((err) => console.log(err));
    }

    if (this.state.focusNew) {
      API.updateMovement(this.state.nameNew, {
        focus: this.state.focusNew,
      })
        .then((res) => {
          // console.log(res.json())
          this.setState({
            focusNew: "",
          });
        })
        .catch((err) => console.log(err));
    }

    if (this.state.scaledNew) {
      API.updateMovement(this.state.nameNew, {
        scaled: this.state.scaledNew,
      })
        .then((res) => {
          // console.log(res.json())
          this.setState({
            scaled: "",
          });
        })
        .catch((err) => console.log(err));
    }
  };

  deleteMovement = (event) => {
    event.preventDefault();

    API.deleteMovement(this.state.nameNew)
      .then((res) => {
        this.setState({
          nameNew: "",
        });
      })
      .catch((err) => console.log(err));
  };

  handleSubmitFormNew = (event) => {
    event.preventDefault();

    API.createMovement({
      name: this.state.name,
      equipment: this.state.equipment,
      focus: this.state.focus,
      scaled: this.state.scaled,
    })
      .then((res) => {
        // console.log(res.json())
        this.setState({
          name: "",
          equipment: "",
          focus: "",
          scaled: "",
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



  getUserOptions = (array) =>
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



  render() {
    return (
      <div>
        <NavBar />
        <AppHeader/>
        <div id="insert-div">
          <Grid
            textAlign="left"
            style={{ height: "50vh" }}
            verticalAlign="middle"
          >
            <Grid.Column>
              <Header as="h2" color="teal" textAlign="center">
                Add a Movement to Database
              </Header>
              <Form size="large">
                <Segment stacked>
                  <Form.Input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    fluid
                    label="Name of Movement"
                    type="text"
                  />
                  <Form.Input
                    value={this.state.equipment}
                    onChange={this.handleInputChange}
                    name="equipment"
                    fluid
                    label="Equipment Required"
                    placeholder="Barbell/Dumbbell/KettleBell"
                    type="text"
                  />
                  <Form.Input
                    value={this.state.focus}
                    onChange={this.handleInputChange}
                    name="focus"
                    fluid
                    label="Area of Focus"
                    placeholder="Upper/Lower/Full"
                    type="text"
                  />
                  <Form.Input
                    value={this.state.scaled}
                    onChange={this.handleInputChange}
                    name="scaled"
                    fluid
                    label="Scaled Option (if applicable)"
                    type="text"
                  />

                  <Button
                    color="teal"
                    fluid
                    size="large"
                    onClick={this.handleSubmitFormNew}
                  >
                    Submit
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>

        <div id="update-div">
          <Grid
            textAlign="left"
            style={{ height: "50vh" }}
            verticalAlign="middle"
          >
            <Grid.Column>
              <Header as="h2" color="teal" textAlign="center">
                Update/Delete Movements from Database
              </Header>
              <Form size="large">
                <Segment stacked>
                  <Form.Select
                    fluid
                    control={Dropdown}
                    id="dropdown-movements"
                    label="Movement to Update"
                    placeholder="Movement to Update"
                    scrolling
                    options={this.getOptions(this.state.movementNames)}
                    name="nameNew"
                    onChange={this.handleDropdownChange}
                  ></Form.Select>
                  <Form.Input
                    value={this.state.equipmentNew}
                    onChange={this.handleInputChange}
                    name="equipmentNew"
                    fluid
                    label="Equipment Required"
                    placeholder="Barbell/Dumbbell/KettleBell"
                    type="text"
                  />
                  <Form.Input
                    value={this.state.focusNew}
                    onChange={this.handleInputChange}
                    name="focusNew"
                    fluid
                    label="Area of Focus"
                    placeholder="Upper/Lower/Full"
                    type="text"
                  />
                  <Form.Input
                    value={this.state.scaledNew}
                    onChange={this.handleInputChange}
                    name="scaledNew"
                    fluid
                    label="Scaled Option (if applicable)"
                    type="text"
                  />

                  <Button
                    color="teal"
                    fluid
                    size="small"
                    onClick={this.updateMovement}
                  >
                    Update
                  </Button>
                 <br></br>
                  <Button
                    color="teal"
                    fluid
                    size="small"
                    onClick={this.deleteMovement}
                  >
                    Delete
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>

        <div id="update-user-div">
          <Grid
            textAlign="left"
            style={{ height: "50vh" }}
            verticalAlign="middle"
          >
            <Grid.Column>
              <Header as="h2" color="teal" textAlign="center">
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
                    options={this.getUserOptions(this.state.userEmails)}
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
                    color="teal"
                    fluid
                    size="small"
                    onClick={this.updateUser}
                  >
                    Update
                  </Button>
                  <Button
                    color="teal"
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
        {/* <Button as={Link} to="/adminuser">Go to User Admin</Button> */}
      </div>
    );
  }
}

export default Admin;
