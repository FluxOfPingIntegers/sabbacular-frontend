import React, { ReactElement} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";

import { LinkRoutes } from "../constants/types";

type RowItemProps = {title: LinkRoutes, navigation: any}

export const RowItem: (obj: RowItemProps) => ReactElement = ({title, navigation}) => {
  const onPress = (title:string) => {
    const route = title.split(" ").join("")
    return navigation.push(route)
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(title)}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export const RowSeparator = () => {
  return (
    <View style={styles.separator} />
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    separator: {
      backgroundColor: colors.border,
      height: StyleSheet.hairlineWidth,
      marginLeft: 20,
    }
  });