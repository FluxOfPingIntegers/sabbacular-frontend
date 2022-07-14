import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import { MainStackParamList } from '../constants/types';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import NavBar from '../components/NavBar';

const MainStack = createStackNavigator<MainStackParamList>();
const appTitle = "Sabbacular";
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home" 
      component={Home}
      options={({ navigation }) => {
        return ({
        title: appTitle,
        header: () => <NavBar navigation={navigation} title={"Home"}/>,
      })}} 
    />
    <MainStack.Screen
      name="Login" 
      component={Login} 
      options={({ navigation }) => {
        return ({
        title: appTitle,
        header: () => <NavBar navigation={navigation} title={"Login"}/>,
      })}} 
    />
    <MainStack.Screen
      name="SignIn" 
      component={SignIn} 
      options={({ navigation }) => {
        return ({
        title: appTitle,
        header: () => <NavBar navigation={navigation} title={"Sign In"}/>,
      })}}
    />
    <MainStack.Screen
      name="SignUp" 
      component={SignUp} 
      options={({ navigation }) => {
        return ({
        title: appTitle,
        header: () => <NavBar navigation={navigation} title={"Sign Up"}/>,
      })}}
    />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
)