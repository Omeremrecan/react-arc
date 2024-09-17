import React from "react";
import { TextboxTypes } from "./Textbox.types";
import TextboxStyle from "./Textbox.style";

const { Container, Input, Label } = TextboxStyle;

const Textbox = (props: TextboxTypes.Props) => {
  return (
    <Container>
      <Input
        value={props.value}
        onChange={(e) => {
          if (props.onChange) {
            props.onChange(e.target.value);
          }
        }}
      />
      <Label>{props.label}</Label>
    </Container>
  );
};

export default Textbox;
