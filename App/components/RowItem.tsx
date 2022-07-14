import React, { ReactElement} from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { LinkRoutes } from "../constants/types";

const RowItem: (obj: {title: LinkRoutes, navigation: any}) => ReactElement = ({title, navigation}) => {
  const onPress = (title:string) => {
    return navigation.push(title)
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(title)}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default RowItem