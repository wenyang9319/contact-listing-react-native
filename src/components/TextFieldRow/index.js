import React from 'react';
import { TextInput } from 'react-native';
import { Container, Label, TextField } from './elements';

const TextFieldRow = ({ label, attribute, defaultText, onChangeText }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextField
        value={defaultText}
        onChangeText={(text) => onChangeText(attribute, text)}
      />
    </Container>
  );
};

export default TextFieldRow;
