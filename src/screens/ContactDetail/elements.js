import React from 'react';
import styled from 'styled-components/native';

export const ImageHolder = styled.View`
  background-color: #ff8c00;
  height: 150px;
  width: 150px;
  border-radius: 75px;
  align-self: center;
  margin: 25px;
`;

export const Container = styled.ScrollView`
  flex: 1;
  flex-direction: column;
`;

export const Header = styled.Text`
  font-weight: bold;
  font-size: 20px;
  padding-vertical: 5px;
  padding-horizontal: 10px;
  background-color: #e4e4e4;
`;
