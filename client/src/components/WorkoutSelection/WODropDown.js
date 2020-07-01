
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const WOCDropDown = props => (
  <Dropdown
    placeholder={props.fieldName}
    fluid
    multiple
    search
    selection
    options={props.optionData}
  />
)

export default WOCDropDown