import React from "react";
import { Input, Label } from "semantic-ui-react";

const InputField = ({ placeholder, onChange, error }) => (
  <>
    <Input placeholder={placeholder} onChange={onChange} />
    <br />
    {error && (
      <Label basic color="red" pointing>
        {error}
      </Label>
    )}
  </>
);

export default InputField;
