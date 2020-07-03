import React, { Component } from "react";
import WOCDropDown from "../../components/WorkoutSelection/WODropDown";
import WOButton from "../../components/WorkoutSelection/WOButton";
import SubmitButton from "../../components/WorkoutSelection/SubmitButton";
import NavBar from "../../components/Nav/NavBar";
import AppHeader from "../../components/Header/header";
import API from "../../utils/API";

import {Message} from "semantic-ui-react";
import "./style.css";

class CreateWorkout extends Component {

  state = {
    allMovements: [],
    areaFocus: "",
    // cardioEquip: "",
    // weightEquip: "",
    // generatedWorkout: [],
    workoutType: "",
    workoutTime: "",
    movementOne: "",
    movementTwo: "",
    movementThree: "",
    movementFour: "",
    movementFive: "",
    repsOne: "",
    repsTwo: "",
    repsThree: "",
    repsFour: "",
    repsFive: ""
  };

  workoutType = ["amrap", "emom", "fortime"];

  amrap(areaFocus) {
    let workoutTime = Math.floor(Math.random() * (20-12) + 12);
    console.log("workoutTime: ", workoutTime);

    let workoutFilterbyFocus = this.state.allMovements.filter(movement => 
      movement.focus === areaFocus || movement.focus === "cardio");
    console.log("amrap workoutFilter Array: ", workoutFilterbyFocus);

    let movementOne = workoutFilterbyFocus[Math.floor(Math.random()*workoutFilterbyFocus.length)];
    console.log("movementOne: ", movementOne);
    let movementTwo = workoutFilterbyFocus[Math.floor(Math.random()*workoutFilterbyFocus.length)];
    console.log("movementTwo: ", movementTwo);
    let movementThree = workoutFilterbyFocus[Math.floor(Math.random()*workoutFilterbyFocus.length)];
    console.log("movementThree: ", movementThree);

    let repsOne = Math.floor(Math.random() * (20-10) + 10);
    console.log("repsOne: ", repsOne);
    let repsTwo = Math.floor(Math.random() * (20-10) + 10);
    console.log("repsTwo: ", repsTwo);
    let repsThree = Math.floor(Math.random() * (20-10) + 10);
    console.log("repsThree: ", repsThree);

    this.setState({
      workoutTime: workoutTime,
      movementOne: movementOne.name,
      movementTwo: movementTwo.name,
      movementThree: movementThree.name,
      repsOne: repsOne,
      repsTwo: repsTwo,
      repsThree: repsThree
    })
  };

  emom(areaFocus) {
    let workoutTime = Math.floor(Math.random() * (15-10) + 10);
    console.log("workoutTime: ", workoutTime);

    let workoutFilterbyFocus = this.state.allMovements.filter(movement => 
      movement.focus === areaFocus || movement.focus === "cardio");
    console.log("amrap workoutFilter Array: ", workoutFilterbyFocus);

    let movementOne = workoutFilterbyFocus[Math.floor(Math.random()*workoutFilterbyFocus.length)];
    console.log("movementOne: ", movementOne);
    let movementTwo = workoutFilterbyFocus[Math.floor(Math.random()*workoutFilterbyFocus.length)];
    console.log("movementTwo: ", movementTwo);
    let movementThree = workoutFilterbyFocus[Math.floor(Math.random()*workoutFilterbyFocus.length)];
    console.log("movementThree: ", movementThree);

    let repsOne = Math.floor(Math.random() * (7-4) + 4);
    console.log("repsOne: ", repsOne);
    let repsTwo = Math.floor(Math.random() * (7-4) + 4);
    console.log("repsTwo: ", repsTwo);
    let repsThree = Math.floor(Math.random() * (7-4) + 4);
    console.log("repsThree: ", repsThree);

    this.setState({
      workoutTime: workoutTime,
      movementOne: movementOne.name,
      movementTwo: movementTwo.name,
      movementThree: movementThree.name,
      repsOne: repsOne,
      repsTwo: repsTwo,
      repsThree: repsThree
    })
  };

  fortime(areaFocus) {
    // let workoutTime = Math.floor(Math.random() * (20-12) + 12);
    // console.log("workoutTime: ", workoutTime);

    let workoutFilterbyFocus = this.state.allMovements.filter(movement => 
      movement.focus === areaFocus || movement.focus === "cardio");
    console.log("amrap workoutFilter Array: ", workoutFilterbyFocus);

    let movementOne = workoutFilterbyFocus[Math.floor(Math.random()*workoutFilterbyFocus.length)];
    console.log("movementOne: ", movementOne);
    let movementTwo = workoutFilterbyFocus[Math.floor(Math.random()*workoutFilterbyFocus.length)];
    console.log("movementTwo: ", movementTwo);
    let movementThree = workoutFilterbyFocus[Math.floor(Math.random()*workoutFilterbyFocus.length)];
    console.log("movementThree: ", movementThree);
    let movementFour = workoutFilterbyFocus[Math.floor(Math.random()*workoutFilterbyFocus.length)];
    console.log("movementThree: ", movementFour);
    let movementFive = workoutFilterbyFocus[Math.floor(Math.random()*workoutFilterbyFocus.length)];
    console.log("movementThree: ", movementFive);

    let repsOne = Math.floor(Math.random() * (20-10) + 10);
    console.log("repsOne: ", repsOne);
    let repsTwo = Math.floor(Math.random() * (20-10) + 10);
    console.log("repsTwo: ", repsTwo);
    let repsThree = Math.floor(Math.random() * (20-10) + 10);
    console.log("repsThree: ", repsThree);
    let repsFour = Math.floor(Math.random() * (20-10) + 10);
    console.log("repsFour: ", repsFour);
    let repsFive = Math.floor(Math.random() * (20-10) + 10);
    console.log("repsFive: ", repsFive);

    this.setState({
      // workoutTime: workoutTime,
      movementOne: movementOne.name,
      movementTwo: movementTwo.name,
      movementThree: movementThree.name,
      movementFour: movementFour.name,
      movementFive: movementFive.name,
      repsOne: repsOne,
      repsTwo: repsTwo,
      repsThree: repsThree,
      repsFour: repsFour,
      repsFive: repsFive
    })

  };


  generateWorkout(areaFocus) {

    let workoutTypeRandom = this.workoutType[Math.floor(Math.random()*this.workoutType.length)];
    console.log("workoutTypeRandom: ", workoutTypeRandom);

    this.setState({
      workoutType: workoutTypeRandom
    });

    switch (workoutTypeRandom) {
      case "amrap":
        console.log("amrap");
        this.amrap(areaFocus);
        break;
      case "emom":
        console.log("emom");
        this.emom(areaFocus);
        break;
      case "fortime":
        console.log("fortime");
        this.fortime(areaFocus);
        break;
      default:
        console.log("default");
        this.amrap(areaFocus);
    } 
  };


  componentDidMount() {
    API.getAllMovements() 
    .then((res) => {
      console.log("get all movements, res.data: ", res.data)
      this.setState({
        allMovements: res.data
      });
    });
  };

  handleDropdownChange = (event, data) => {
    console.log(data.value);

    this.setState({
      [data.name]: data.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

  //  console.log("event.target", event.target);
   console.log("areaFocus: ", this.state.areaFocus);

  //  function for generating workout, pass state info of input
    this.generateWorkout(this.state.areaFocus);

  };

  




  render() {
    return (
      <div>
        <NavBar />
        <AppHeader/>
        <WOButton></WOButton>
        <WOCDropDown
          name={"areaFocus"}
          onChange={this.handleDropdownChange}
          fieldName={"Area of Focus"}
          optionData={[
            {
              key: "1",
              text: "Upper Body",
              value: "upper",
            },
            {
              key: "2",
              text: "Full Body",
              value: "full",
            },
            {
              key: "3",
              text: "Lower Body",
              value: "lower",
            },
          ]}
        />
        <WOCDropDown
          name="cardioEquip"
          onChange={this.handleDropdownChange}
          fieldName={"Cardio Equipment"}
          optionData={[
            {
              key: "1",
              text: "Box",
              value: "Box",
            },
            {
              key: "2",
              text: "Jump Rope",
              value: "Jump Rope",
            },
            {
              key: "3",
              text: "Rowing Machine",
              value: "Rower",
            },
          ]}
        />
        <WOCDropDown
          name="weightEquip"
          onChange={this.handleDropdownChange}
          fieldName={"Weight Equipment"}
          optionData={[
            {
              key: "1",
              text: "Barbell",
              value: "Barbell",
            },
            {
              key: "2",
              text: "Dumbbell",
              value: "Dumbbell",
            },
            {
              key: "3",
              text: "Kettlebell",
              value: "Kettlebell",
            },
            {
              key: "4",
              text: "Medicine Ball",
              value: "Medicine Ball",
            },
          ]}
        />
        {/* <WOCDropDown
          name=""
          onChange={this.handleDropdownChange}
          fieldName={"Strength"}
          optionData={[
            {
              key: "1",
              text: "Burpees",
              value: "",
            },
            {
              key: "2",
              text: "Lunges",
              value: "",
            },
            {
              key: "3",
              text: "Push-ups",
              value: "",
            },
          ]}
        /> */}
        <SubmitButton
          onClick={this.handleSubmit}
        ></SubmitButton>

        
          {this.state.workoutType ? (
           <Message>
          Your Custom Workout for Today: <br></br>
          <p>{this.state.workoutType}</p>

          {this.state.workoutType !== "fortime" ? (
          <p>{this.state.workoutTime} mins</p>
          ) : ("")
          }

          <p>{this.state.repsOne} reps of {this.state.movementOne}</p>
          <p>{this.state.repsTwo} reps of {this.state.movementTwo}</p>
          <p>{this.state.repsThree} reps of {this.state.movementThree}</p>
          {this.state.movementFour ? (
            <p>{this.state.repsFour} reps of {this.state.movementFour}</p>
          ) : ("")
          }
           {this.state.movementFive ? (
          <p>{this.state.repsFive} reps of {this.state.movementFive}</p>
          ) : ("")
          }
          
           </Message>
          ):("")
          }
       
      </div>
    );
  }
}

export default CreateWorkout;
