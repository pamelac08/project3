import React, { Component } from "react";
import WOCDropDown from './WODropDown';
import WOButton from './WOButton';


const CreateWorkout = () => (
  <div>
    <WOButton></WOButton>
  <WOCDropDown fieldName={"Area of Focus"} optionData={
    [
      {
        key: "Abs",
        text: "Abs",
        value: "abs"
      },
      {
        key: "Arms",
        text: "Arms",
        value: "arms"
      },
      {
        key: "Back",
        text: "Back",
        value: "back"
      },
      {
        key: "Chest",
        text: "Chest",
        value: "chest"
      },
      {
        key: "Full-body",
        text: "Full-body",
        value: "full-body"
      },
      {
        key: "Legs",
        text: "Legs",
        value: "legs"
      },
      {
        key: "Shoulders",
        text: "Shoulders",
        value: "shoulders"
      },
    ]
  }
/>
  <WOCDropDown fieldName={"Equipment"} optionData={
    [
      {
        key: "test",
        text: "test",
        value: "test"
      },
      {
        key: "test",
        text: "test",
        value: "test"
      },
      {
        key: "test",
        text: "test",
        value: "test"
      },
    ]
  }
/>
</div>
)

export default CreateWorkout;