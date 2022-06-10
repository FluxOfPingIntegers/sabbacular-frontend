import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';

import { MainStackParamList } from '../constants/types';
import Home from '../screens/Home';
import Options from '../screens/Options';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import colors from '../constants/colors';

const MainStack = createStackNavigator<MainStackParamList>();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home" 
      component={Home}
      options={({ navigation, route }) => ({
        title: route.params,
        headerLeft: () => (
          <>
          <TouchableOpacity
            onPress={() => navigation.push("SignIn")}
            style={{ padding: 10, justifyContent: "center", flex: 1 }} 
          >
            <Text style={{fontSize: 20, color: colors.blue }}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push("SignUp")}
            style={{ padding: 10, justifyContent: "center", flex: 1 }} 
          >
            <Text style={{fontSize: 20, color: colors.blue }}>Sign Up</Text>
          </TouchableOpacity>
          </>
        )
      })} 
    />
    <MainStack.Screen
      name="Options" 
      component={Options} 
      options={{ headerShown: false,}} 
    />
    <MainStack.Screen
      name="SignIn" 
      component={SignIn} 
      options={({ navigation, route }) => ({
        title: route.params,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ paddingHorizontal: 10 }} 
          >
            <Text style={{fontSize: 30, color: colors.blue }}>Sign In</Text>
          </TouchableOpacity>
        )
      })} 
    />
    <MainStack.Screen
      name="SignUp" 
      component={SignUp} 
      options={({ navigation, route }) => ({
        title: route.params,
        headerLeft: () => (
          <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{ paddingHorizontal: 20 }} 
          >
            <Text style={{fontSize: 30, color: colors.blue }}>Sign Up</Text>
          </TouchableOpacity>
          ),
      })} 
    />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
)