import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import { MainStackParamList } from '../constants/types';
import Home from '../screens/Home';
import Options from '../screens/Options';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import NavBar from '../components/NavBar';

const MainStack = createStackNavigator<MainStackParamList>();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home" 
      component={Home}
      options={({ navigation, route }) => {
        return ({
        title: route.params,
        header: () => <NavBar navigation={navigation}/>,
      })}} 
    />
    <MainStack.Screen
      name="Options" 
      component={Options} 
      options={({ navigation, route }) => {
        return ({
        title: route.params,
        header: () => <NavBar navigation={navigation}/>,
      })}} 
    />
    <MainStack.Screen
      name="SignIn" 
      component={SignIn} 
      options={{ headerShown: false,}} 
    />
    <MainStack.Screen
      name="SignUp" 
      component={SignUp} 
      options={{ headerShown: false,}} 
    />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
)