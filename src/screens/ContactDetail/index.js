import React, { useLayoutEffect } from 'react';

import { Container, Divider } from './../../components/General';

import HeaderText from '../../components/HeaderText';
import HeaderImage from '../../components/HeaderImage';

const ContactDetail = ({ navigation, route = {} }) => {
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

  return <Container></Container>;
};

export default ContactDetail;
