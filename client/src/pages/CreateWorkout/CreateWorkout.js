import React, { Component } from "react";
import WOCDropDown from "../../components/WorkoutSelection/WODropDown";
import WOButton from "../../components/WorkoutSelection/WOButton";
import SubmitButton from "../../components/WorkoutSelection/SubmitButton";
import NavBar from "../../components/Nav/NavBar";

class CreateWorkout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <WOButton></WOButton>
        <WOCDropDown
          fieldName={"Area of Focus"}
          optionData={[
            {
              key: "",
              text: "Upper Body",
              value: "",
            },
            {
              key: "",
              text: "Full Body",
              value: "",
            },
            {
              key: "",
              text: "Lower Body",
              value: "",
            },
          ]}
        />
        <WOCDropDown
          fieldName={"Cardio Equipment"}
          optionData={[
            {
              key: "",
              text: "Box Step",
              value: "",
            },
            {
              key: "",
              text: "Jump Rope",
              value: "",
            },
            {
              key: "",
              text: "Rowing Machine",
              value: "",
            },
          ]}
        />
        <WOCDropDown
          fieldName={"Weight Equipment"}
          optionData={[
            {
              key: "",
              text: "Barbell",
              value: "",
            },
            {
              key: "",
              text: "Dumbbell",
              value: "",
            },
            {
              key: "",
              text: "Kettlebell",
              value: "",
            },
            {
              key: "",
              text: "Medicine Ball",
              value: "",
            },
          ]}
        />
        <WOCDropDown
          fieldName={"Strength"}
          optionData={[
            {
              key: "",
              text: "Burpees",
              value: "",
            },
            {
              key: "",
              text: "Lunges",
              value: "",
            },
            {
              key: "",
              text: "Push-ups",
              value: "",
            },
          ]}
        />
        <SubmitButton></SubmitButton>
      </div>
    );
  }
}

export default CreateWorkout;
