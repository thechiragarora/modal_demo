import React from "react";
import { Message, Icon } from "semantic-ui-react";

const CustomMessage = ({ type, content, iconName }) => (
  <Message {...type}>
    <p>{iconName ? <Icon name={iconName} color="blue" />: ''}{content}</p>
  </Message>
);

export default CustomMessage;
