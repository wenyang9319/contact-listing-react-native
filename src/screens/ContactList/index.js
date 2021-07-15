import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Container, Divider } from './../../components/General';

import { useDispatch, useSelector } from 'react-redux';
import { refreshList } from './../../store/contactSlice';

import ContactRow from './../../components/ContactRow';

export default function App() {
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

  const handleOnPress = () => {};

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
}
