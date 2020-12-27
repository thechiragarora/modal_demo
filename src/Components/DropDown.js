import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const CustomDropDown = ({ placeholder, options, onChange }) => (
  <Dropdown
    placeholder={placeholder}
    fluid
    selection
    options={options}
    compact
    onChange={onChange}
  />
)

export default CustomDropDown
