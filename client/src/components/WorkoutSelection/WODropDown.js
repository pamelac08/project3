import React from "react";
import { Dropdown } from "semantic-ui-react";

const WOCDropDown = (props) => (
  <Dropdown
    placeholder={props.fieldName}
    fluid
    // multiple
    search
    selection
    clearable
    options={props.optionData}
    name={props.name}
    onChange={props.onChange}
  />
);

export default WOCDropDown;
