import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 16px;
  flex: 2;
  margin-left: 10px;
`;

export const TextField = styled((props) => (
  <TextInput ref={props.innerRef} {...props} />
))`
  flex: 5;
  font-size: 16px;
  border: lightgray;
  padding: 5px;
  border-radius: 5px;
`;
