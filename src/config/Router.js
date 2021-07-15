import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ContactDetail from '../screens/ContactDetail';
import ContactList from '../screens/ContactList';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name='ContactList' component={ContactList} />
    <MainStack.Screen name='ContactDetail' component={ContactDetail} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
