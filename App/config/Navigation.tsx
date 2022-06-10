import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';

import { MainStackParamList } from '../constants/types';
import Home from '../screens/Home';
import Options from '../screens/Options';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import HeaderButton from '../components/HeaderButton';
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
          <View style={{flex: 1, flexDirection: "row", backgroundColor: colors.teal, borderBottomColor: "green"}}>
            <HeaderButton onHeaderButtonPress={onHeaderButtonPress} name="Sign In"/>
            <HeaderButton onHeaderButtonPress={onHeaderButtonPress} name="Sign Up"/>
          </View>
        )
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