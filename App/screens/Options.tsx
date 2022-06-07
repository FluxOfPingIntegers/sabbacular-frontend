import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from "../constants/colors";

export default ({ navigation }) => {
  return (
    <View style={styles.textContainer}>
      <Text
        style={{color: colors.link}}
        onPress={() => navigation.push("Home")}
      >Goto Options Screen</Text>
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