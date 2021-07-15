import React, { useLayoutEffect, useEffect } from 'react';

import { Text } from 'react-native';
import { Divider } from './../../components/General';

import HeaderText from '../../components/HeaderText';

import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, ImageHolder } from './elements';

import { startEditContact } from './../../store/contactSlice';

const ContactDetail = ({ navigation, route = {} }) => {
  const dispatch = useDispatch();

  const {
    editingContact: { email, lastName, firstName, phone },
  } = useSelector((state) => state.contact);

  useEffect(() => {
    const { contactId } = route.params;
    dispatch(startEditContact(contactId));
  }, []);

  const handleCancelButtonPressed = () => {
    navigation.goBack();
  };
  const handleSaveButtonPressed = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => (
        <HeaderText text='Cancel' handleOnPress={handleCancelButtonPressed} />
      ),
      headerRight: () => (
        <HeaderText text='Save' handleOnPress={handleSaveButtonPressed} />
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <ImageHolder />
      <Header>Main Information</Header>
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>
      <Header>Sub Information</Header>
      <Text>{email}</Text>
      <Text>{phone}</Text>
    </Container>
  );
};

export default ContactDetail;
