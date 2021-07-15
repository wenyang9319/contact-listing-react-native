import React from 'react';
import { Container, Image } from './elements';

const HeaderImage = ({ image, handleOnPress }) => {
  return (
    <Container onPress={() => handleOnPress()}>
      <Image source={image} />
    </Container>
  );
};

export default HeaderImage;
