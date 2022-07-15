import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainStackParamList } from '../constants/types';
import colors from "../constants/colors";
import { RowSeparator} from "../components/RowItem";


type OptionsScreenProps = NativeStackScreenProps<MainStackParamList, "Options">

const Options: React.FC<OptionsScreenProps> = ({ navigation }) => {

  const DATA: {id: string, title: string}[] = [
    {
      id: "1",
      title: "Option 1"
    },
    {
      id: "2",
      title: "Option 2"
    },
  ]

  const renderItem: React.FC<{item: {title: string, id: string} }> = ({item}) => {
    return (
      <View style={styles.container}>
        <Text>{item.title}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={DATA} 
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <RowSeparator />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 16,
      flexDirection: 'row-reverse',
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

export default Options