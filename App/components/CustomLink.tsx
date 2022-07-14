import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PageRoutes } from '../constants/types';

interface LinkProps {navigation: any, route: PageRoutes, linkText: string, linkColor: string}

const CustomLink: React.FC<LinkProps> = ({ navigation, route, linkText, linkColor }) => {
  return (
    <View style={styles.textContainer}>
      <Text
        style={{color: linkColor}}
        onPress={() => navigation.push(route)}
      >{linkText}</Text>
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

export default CustomLink