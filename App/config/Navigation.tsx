import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import { MainStackParamList } from '../constants/types';
import Home from '../screens/Home';
import Options from '../screens/Options';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import HeaderButton from '../components/HeaderButton';
import HeaderIcon from '../components/HeaderIcon';
import colors from '../constants/colors';

const MainStack = createStackNavigator<MainStackParamList>();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home" 
      component={Home}
      options={({ navigation, route }) => {
        const onHeaderButtonPress = (a:string) => navigation.push(a) 
        return ({
        title: route.params,
        header: () => (
          <View style={
            {
              flex: 1, 
              flexDirection: "row", 
              backgroundColor: colors.teal, 
            }
          }>
            <HeaderButton onHeaderButtonPress={onHeaderButtonPress} name="Sign In"/>
            <HeaderButton onHeaderButtonPress={onHeaderButtonPress} name="Sign Up"/>
            <HeaderIcon onHeaderButtonPress={onHeaderButtonPress} icon="menu" linkRoute="Options" align="right" />
          </View>
        ),
      })}} 
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