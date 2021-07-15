import React from 'react';
import { Wrapper, ImageHolder, PersonName } from './elements';

const ContactRow = ({ contact, handleOnPress }) => {
  const { firstName = '', lastName = '' } = contact;
  return (
    <Wrapper onPress={() => handleOnPress(contact)}>
      <ImageHolder />
      <PersonName>
        {firstName} {lastName}
      </PersonName>
    </Wrapper>
  );
};

export default ContactRow;
