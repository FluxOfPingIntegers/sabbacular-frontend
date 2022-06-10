import React, { useState } from 'react';
import {
  SafeAreaView, 
  TextInput, 
  StyleSheet, 
  Button,
  View, 
  Alert
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../constants/types';
import colors from '../constants/colors';
import { NavigationHelpersContext } from '@react-navigation/native';



type SignUpScreenProps = NativeStackScreenProps<MainStackParamList, "SignUp">

const SignUp: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [usernameConfirm, setUsernameConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');


  const onSignUpPressed = () => {
    if (username === usernameConfirm && password === passwordConfirm) {
      console.log("username and password confirmed!")
      navigation.push("Home");
    } else {
      Alert.alert(
        "Invalid Username/Password",
        "Please make sure all username and password fields match",
        [
          {
            text: "Cancel",
            onPress: () => navigation.push("Home")
          },
          {
            text: "Ok",
            onPress: () => console.log("Ok Pressed!")
          }
        ]
      )
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder={'username'} 
        onChangeText={setUsername}
        value={username}
      />
      <TextInput 
        style={styles.input}
        placeholder={'confirm username'} 
        onChangeText={setUsernameConfirm}
        value={usernameConfirm}
      />
      <TextInput 
        style={styles.input}
        placeholder={'password'} 
        onChangeText={setPassword}
        value={password}
      />
      <TextInput 
        style={styles.input}
        placeholder={'confirm password'} 
        onChangeText={setPasswordConfirm}
        value={passwordConfirm}
      />
      <View style={styles.button}>
        <Button 
          title="Submit" 
          onPress={() => onSignUpPressed()} 
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 5,
    justifyContent: "center",
  },
  input: {
    backgroundColor: colors.offWhite,
    height: 40,
    marginVertical: 20,
    width: "40%",
    marginHorizontal: "30%",
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: "10%",
    marginHorizontal: "45%"
  }
})

export default SignUp