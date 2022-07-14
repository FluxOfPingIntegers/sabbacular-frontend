import React, { ReactElement} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";


type RowItemProps = {title: string, route: string, navigation: any}

export const RowItem: (obj: RowItemProps) => ReactElement = ({title, route, navigation}) => {
  const onPress = (route: string) => {
    return navigation.push(route)
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(route)}>
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
      paddingHorizontal: 20,
      paddingVertical: 16,
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "white",
    },
    separator: {
      backgroundColor: colors.border,
      height: StyleSheet.hairlineWidth,
      marginLeft: 20,
    }
  });