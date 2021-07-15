import React, { useState, useEffect, useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { Container, Divider } from './../../components/General';

import { useDispatch, useSelector } from 'react-redux';
import { refreshList } from './../../store/contactSlice';

import ContactRow from './../../components/ContactRow';

import HeaderImage from '../../components/HeaderImage';
import AddImage from '../../assets/images/add.png';
import SearchImage from '../../assets/images/search.png';

const ContactList = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contact);

  const handleReload = () => {
    setRefreshing(true);
    dispatch(refreshList());
    setRefreshing(false);
  };

  useEffect(() => {
    handleReload();
  }, []);

  const handleOnAddButtonClicked = () => {};

  const handleOnSearchButtonClicked = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Contacts',
      headerLeft: () => (
        <HeaderImage
          image={SearchImage}
          handleOnPress={handleOnSearchButtonClicked}
        />
      ),
      headerRight: () => (
        <HeaderImage
          image={AddImage}
          handleOnPress={handleOnAddButtonClicked}
        />
      ),
    });
  }, [navigation]);

  const handleOnPress = (contact) => {
    navigation.push('ContactDetail', { contactId: contact.id });
  };

  return (
    <Container>
      <FlatList
        data={contacts}
        onRefresh={handleReload}
        refreshing={refreshing}
        renderItem={({ item }) => {
          return <ContactRow contact={item} handleOnPress={handleOnPress} />;
        }}
        ItemSeparatorComponent={() => <Divider />}
      />
    </Container>
  );
};
export default ContactList;
