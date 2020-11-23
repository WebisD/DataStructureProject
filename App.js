import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen.js';
import LDDE from './LDDE/LDDE.js';
import HASH from './HASH/HASH.js';
import HEAP from './HEAP/HEAP.js';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Double Linked List" component={LDDE} />
        <Drawer.Screen name="Hash table" component={HASH} />
        <Drawer.Screen name="Heap" component={HEAP} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}