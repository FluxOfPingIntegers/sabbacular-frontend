import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainStackParamList } from '../constants/types';
import colors from "../constants/colors";


type HomeScreenProps = NativeStackScreenProps<MainStackParamList, "Home">

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {

  return (
    <>
      <View style={styles.homeContainer}>
          <ImageBackground 
            source={require('../assets/images/sabbacular-logos.png')} 
            resizeMode="cover" 
            style={styles.backgroundImage} 
          >
            
          </ImageBackground>
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