import React from 'react';
import { Container, Text } from './elements';

const HeaderText = ({ text, handleOnPress }) => {
  return (
    <Container onPress={() => handleOnPress()}>
      <Text>{text}</Text>
    </Container>
  );
};

export default HeaderText;
