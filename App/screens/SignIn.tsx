import React, { useState } from 'react';
import {
  SafeAreaView, 
  TextInput, 
  StyleSheet, 
  Button,
  View, 
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../constants/types';
import colors from '../constants/colors';



type SignInScreenProps = NativeStackScreenProps<MainStackParamList, "SignIn">

const SignIn: React.FC<SignInScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const onSignInPressed = () => {
    console.log("Username = ", username, "Password = ", password);
    navigation.push("Home");
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
        placeholder={'password'} 
        onChangeText={setPassword}
        value={password}
      />
      <View style={styles.button}>
        <Button 
          title="Submit" 
          onPress={() => onSignInPressed()} 
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
  },
  input: {
    backgroundColor: colors.offWhite,
    height: 40,
    marginVertical: 20,
    width: "50%",
    marginHorizontal: "25%",
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: "10%",
    marginHorizontal: "45%"
  }
})

export default SignIn