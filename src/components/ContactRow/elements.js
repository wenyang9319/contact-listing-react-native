import React from 'react';
import styled from 'styled-components/native';

export const ImageHolder = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: #ff8c00;
`;

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding: 5px;
`;

export const PersonName = styled.Text`
  margin-horizontal: 8px;
  font-size: 16px;
`;
