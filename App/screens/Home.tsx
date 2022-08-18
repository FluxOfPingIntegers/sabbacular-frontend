import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainStackParamList } from '../constants/types';
import colors from "../constants/colors";


type HomeScreenProps = NativeStackScreenProps<MainStackParamList, "Home">

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {

  return (
    <>
      <View style={styles.homeContainer}>
          <Image source={require('../assets/images/sabbacular-logos.png')} style={styles.backgroundImage} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: '100%',
    width: '100%',
  },
  homeContainer: {
    flex: 1,
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home