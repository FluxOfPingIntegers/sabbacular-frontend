import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainStackParamList } from '../constants/types';
import colors from "../constants/colors";
import CustomLink from '../components/CustomLink';

type OptionsScreenProps = NativeStackScreenProps<MainStackParamList, "Options">

const Options: React.FC<OptionsScreenProps> = ({ navigation }) => {
  return (
    <CustomLink
      navigation={navigation} 
      route={"Home"} 
      linkText={"Go To Home Screen"} 
      linkColor={colors.link}
    />
  )
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Options