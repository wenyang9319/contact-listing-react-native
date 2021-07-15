import React from 'react';
import { TextInput } from 'react-native';
import { Container, Label, TextField } from './elements';

const TextFieldRow = ({
  label,
  attribute,
  defaultText,
  onChangeText,
  innerRef,
  ...props
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextField
        innerRef={innerRef}
        value={defaultText}
        onChangeText={(text) => onChangeText(attribute, text)}
        {...props}
      />
    </Container>
  );
};

export default TextFieldRow;
