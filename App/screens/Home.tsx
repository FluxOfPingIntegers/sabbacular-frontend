import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainStackParamList } from '../constants/types';
import colors from "../constants/colors";


type HomeScreenProps = NativeStackScreenProps<MainStackParamList, "Home">

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <>
      <View>
        <View>
          <Image source={require('../assets/images/desert.jpg')} />
        </View>
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