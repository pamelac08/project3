import React, { Component } from "react";
import WOCDropDown from "./WODropDown";
import WOButton from "./WOButton";
import NavBar from "../../components/Nav/NavBar";
import AppHeader from "../../components/Header/header";

class CreateWorkout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <AppHeader/>
        <WOButton></WOButton>
        <WOCDropDown
          fieldName={"Area of Focus"}
          optionData={[
            {
              key: "Abs",
              text: "Abs",
              value: "abs",
            },
            {
              key: "Arms",
              text: "Arms",
              value: "arms",
            },
            {
              key: "Back",
              text: "Back",
              value: "back",
            },
            {
              key: "Chest",
              text: "Chest",
              value: "chest",
            },
            {
              key: "Full-body",
              text: "Full-body",
              value: "full-body",
            },
            {
              key: "Legs",
              text: "Legs",
              value: "legs",
            },
            {
              key: "Shoulders",
              text: "Shoulders",
              value: "shoulders",
            },
          ]}
        />
        <WOCDropDown
          fieldName={"Equipment"}
          optionData={[
            {
              key: "test1",
              text: "test1",
              value: "test1",
            },
            {
              key: "test2",
              text: "test2",
              value: "test2",
            },
            {
              key: "test3",
              text: "test3",
              value: "test3",
            },
          ]}
        />
      </div>
    );
  }
}

export default CreateWorkout;
