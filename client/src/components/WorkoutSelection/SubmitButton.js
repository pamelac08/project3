import React from "react";

const SubmitButton = (props) => (
  <div className="ui button">
    <button className="ui teal button" onClick={props.onClick}>
      Submit
    </button>
  </div>
);

export default SubmitButton;
