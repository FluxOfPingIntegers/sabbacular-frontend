import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainStackParamList } from '../constants/types';
import colors from "../constants/colors";

type OptionsScreenProps = NativeStackScreenProps<MainStackParamList, "Options">

const Options: React.FC<OptionsScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.textContainer}>
      <Text
        style={{color: colors.link}}
        onPress={() => navigation.push("Home")}
      >Goto Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Options