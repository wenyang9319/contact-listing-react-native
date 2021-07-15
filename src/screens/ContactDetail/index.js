import React, { useLayoutEffect, useEffect } from 'react';

import { Text } from 'react-native';
import { Divider } from './../../components/General';

import HeaderText from '../../components/HeaderText';
import TextFieldRow from '../../components/TextFieldRow';

import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, ImageHolder } from './elements';

import {
  startEditContact,
  setContact,
  saveEditingContact,
} from './../../store/contactSlice';

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
    dispatch(saveEditingContact());
    navigation.goBack();
  };

  const handleTextChanged = (key, text) => {
    dispatch(setContact({ key, value: text }));
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
      <TextFieldRow
        attribute='firstName'
        label='First Name'
        onChangeText={handleTextChanged}
        defaultText={firstName}
        autoFocus
      />
      <Divider />
      <TextFieldRow
        attribute='lastName'
        label='Last Name'
        onChangeText={handleTextChanged}
        defaultText={lastName}
      />
      <Header>Sub Information</Header>
      <TextFieldRow
        attribute='email'
        label='Email'
        onChangeText={handleTextChanged}
        defaultText={email}
      />
      <Divider />
      <TextFieldRow
        attribute='phone'
        label='Phone'
        onChangeText={handleTextChanged}
        defaultText={phone}
      />
    </Container>
  );
};

export default ContactDetail;
