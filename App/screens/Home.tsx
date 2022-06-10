import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainStackParamList } from '../constants/types';
import colors from "../constants/colors";

type HomeScreenProps = NativeStackScreenProps<MainStackParamList, "Home">

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <>
      <View style={styles.textContainer}>
        <Text
          style={{color: colors.link}}
          onPress={() => navigation.push("Options")}
        >Goto Options Screen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Home