import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainStackParamList } from '../constants/types';
import colors from "../constants/colors";

type LoginOptionsProps = NativeStackScreenProps<MainStackParamList, "LoginOptions">

const LoginOptions: React.FC<LoginOptionsProps> = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.signInText} onPress={() => navigation.push("SignIn")}>Sign In</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.signUpText} onPress={() => navigation.push("SignUp")}>Sign Up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  leftContainer: {

  },
  rightContainer: {

  },
  signInText: {

  },
  signUpText: {

  }
});

export default LoginOptions