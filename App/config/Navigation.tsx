import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainStackParamList } from '../constants/types';
import Home from '../screens/Home';
import Options from '../screens/Options';
import SignIn from '../screens/SignIn';

const MainStack = createStackNavigator<MainStackParamList>();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home" 
      component={Home}
      options={{ headerShown: false,}} 
    />
    <MainStack.Screen
      name="Options" 
      component={Options} 
      options={{ headerShown: false,}} 
    />
    <MainStack.Screen
      name="SignIn" 
      component={SignIn} 
      options={{ headerShown: false,}} 
    />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
)